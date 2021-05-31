import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalproject";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080

const port = process.env.PORT || 8080;
const app = express();

// CONCEPT SCHEMA
const conceptSchema = new mongoose.Schema({
  concept: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    maxlength: 140,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

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

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({ sucess: false, message: "Not authorized" });
    }
  } catch (error) {
    res.status(404).json({ sucess: false, message: "Invalid request", error });
  }
};

const Concept = mongoose.model("Concept", conceptSchema);
const User = mongoose.model("User", userSchema);

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello world");
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
    res.status(400).json({ sucess: false, message: "Invalid rewquest" });
  }
});

//POST CONCEPTS
// Gör så att bara vi har behörighet till denna endpoint

app.post("/concepts", async (req, res) => {
  const { concept, description } = req.body;

  // ska vi ha success här?
  try {
    const newConcept = await new Concept({
      concept,
      description,
    }).save();
    res.json(newConcept);
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

//POST for the user to add explanation of the concept
//Authenticate user, to promot login
app.post("/concepts/description", authenticateUser);
app.post("/concepts/description", async (req, res) => {
  const { concept, description } = req.body;

  // ska vi ha success här?
  try {
    const newConcept = await new Concept({
      concept,
      description,
    }).save();
    res.json(newConcept);
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

// GET CONCEPTS
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
    // const page = await Concept.find().limit(limit).skip(skip)
    // res.send({ page, size, data: page })
    const concept = await Concept.find()
      .sort({ concept: 1 })
      .skip(skip)
      .limit(limit);

    res.json({ page, size, data: concept });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});
// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
