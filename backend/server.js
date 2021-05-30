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

// GET CONCEPT
app.get("/concepts", async (req, res) => {
  try {
    //ska vi ha success här?
    // sortera a-z, finns som mongoose grej?
    // pagination items per page
    const concept = await Concept.find().sort({ concept: 1 });
    res.json(concept);
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});
// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
