import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalproject";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080
// sync

const port = process.env.PORT || 8080;
const app = express();
app.use(cors())

// CONCEPT SCHEMA
const conceptSchema = new mongoose.Schema({
  concept: {
    type: String,
    required: true,
    unique: true
  },
  description: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Description",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

//Description Schema
const descriptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 5,
  },
  likes: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

// add username in description object
// changes in schema, drop database everytime?
// if username not unique, choose another username displayed in frontend
// display currenct concept you are contributing to

//USER SCHEMA
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  //email
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

const Concept = mongoose.model("Concept", conceptSchema);
const User = mongoose.model("User", userSchema);
const Description = mongoose.model("Description", descriptionSchema);

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      req.user=user
      next();
    } else {
      res.status(401).json({ sucess: false, message: "Not authorized" });
    }
  } catch (error) {
    res.status(404).json({ sucess: false, message: "Invalid request", error });
  }
};

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Our backend");
});

//POST USER "/singup" and "/signin"
app.post("/signup", async (req, res) => {
  //lägg till email
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt),
    }).save();

    res.json({
      success: true,
      userID: newUser._id,
      username: newUser.username,
      accessToken: newUser.accessToken,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request" });
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true,
        userID: user._id,
        username: user.username,
        accessToken: user.accessToken,
      });
    } else {
      res
        .status(404)
        .json({ sucess: false, message: "User or password not found" });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, message: "Invalid request" });
  }
});


// function hasProperty(property) {
//   return function(req, res, next) {
//     if (!req.body[property]) {
//       res.status(400).json({ success: false, message: `${property} not allowed to add`, error });
//     }

//     next();
//   }
// }

//POST CONCEPTS
// Gör så att bara vi har behörighet till denna endpoint

app.post("/concepts", async (req, res) => {
  const { concept, description } = req.body;

  // hasProperty(concept, req.body)
  // hasProperty(description, req.body)

  // if (!concept) {
  //   res.status(400).json({ success: false, message: "concept required", error });
  // }

  // ska vi ha success här?
  try {
    const newDescription = await new Description({
      text: description,
    }).save();

    const newConcept = await new Concept({
      concept,
      description: [newDescription],
    }).save();
    res.json(newConcept);
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

//ADD Delete concepts also

//POST for the user to add explanation of the concept
//Authenticate user, to promot login

app.patch("/concepts", authenticateUser)
app.patch("/concepts", async (req, res) => {
  const { idOfAConcept, description } = req.body;
  const { _id } = req.user


  try {
    const newDescription = await new Description({
      text: description,
      user: req.user
    }).save();

    const updatedConcept = await Concept.findByIdAndUpdate(
      idOfAConcept,
      {
        $push: {
          description: newDescription,
        },
      },
      { new: true }
    ).populate({
      path : 'description',
      populate : {
        path : 'user'
      }
    });
    res.json(updatedConcept);
  } catch (error) {
    res.status(400).json({ sucess: false, message: "Invalid request", error });
  }
});

//POST
//Relevant for update likes?
//Same user can only like once. "toggle"
// this one should like a specific description, not the concept
// need to create an id for description
app.post("/concepts/:descriptionId/likes", async (req, res) => {
  const { descriptionId } = req.params;

  try {
    const likes = await Description.findOneAndUpdate(
      {
        _id: descriptionId,
      },
      {
        $inc: { likes: 1 },
      },
      {
        new: true
      }
    );
    if (likes) {
      res.status(200).json(likes);
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "invalid request", error });
  }
});

//GET CONCEPTS V1 WORKING
app.get("/concepts", async (req, res) => {
  try {
    let { page, size } = req.query;
    //ska vi ha success här?
    // pagination items per page

    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;

    const concept = await Concept.find()
      .sort({ concept: 1 })
      .skip(skip)
      .limit(limit)

      console.log(concept, 'concept')

    res.json({ page, size, data: concept });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

// WORKING ON THIS. SHOULD BE ABLE TO SEARCH

// app.get("/concepts", async (req, res) => {
//   const { concept } = req.query;
//   const page = parseInt(req.query.page)
//   const size = parseInt(req.query.size)
//   const conceptRegex = new RegExp(concept, 'i');

//   try {
//     const filteredConcepts = await Concept.aggregate([ 
//       {
//         $match: {
//           concept: conceptRegex
//         },
//       }, 
//       {
//         $skip: (page -1) * size + 1
//       }, 
//       {
//         $limit: size
//       }
//     ]);

//     res.json(filteredConcepts);
//   } catch (error) {
//     res.status(400).json({ success: false, message: "Invalid request", error });
//   }
// });


// One concept with all the desciptions through concept id

app.get("/concepts/:conceptId", async (req, res) => {
  const { conceptId } = req.params;

  try {
    const oneConcept = await Concept.findOne({ _id: conceptId }).populate({
      path : 'description',
      populate : {
        path : 'user'
      }
    });;
    if (oneConcept) {

      console.log(oneConcept);
      res.json(oneConcept);
    } else {
      // Error when the id format is valid, but no concept is found with that id
      res.status(400).json({ error: "no concept found with that id" });
    }
    // Error when format id os wrong and invalid dong id entered
  } catch (err) {
    res.status(404).json({ error: "Invalid request" });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
