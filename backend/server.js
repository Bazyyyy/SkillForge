const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Verbindung zu MongoDB (lokal oder Atlas)
mongoose.connect(
  "mongodb+srv://beyzacakir_db_user:iOfE1Y5WTgjxjFqM@skillforge.btrohsa.mongodb.net/?retryWrites=true&w=majority&appName=SkillForge"
);

// User-Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  progress: {
    score: Number,
    level: Number,
    achievements: [String],
    answeredQuestions: [Number],
    correctQuestions: [Number] // <--- HIER ergänzen!
  }
});

const User = mongoose.model("User", userSchema);

// Beispiel-API-Route (optional, für spätere Erweiterungen)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo vom Backend!" });
});

// Registrierung
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Missing data" });
  try {
    const user = new User({
      email,
      password,
      progress: {
        score: 0,
        level: 1,
        achievements: [],
        answeredQuestions: [],
        correctQuestions: []
      }
    });
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "E-Mail existiert bereits." });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ error: "Falsche E-Mail oder Passwort." });
  res.json({ success: true, progress: user.progress });
});

// Fortschritt speichern
app.post("/api/save-progress", async (req, res) => {
  const { email, progress } = req.body;
  if (!email || !progress) return res.status(400).json({ error: "Missing data" });
  await User.updateOne({ email }, { progress });
  res.json({ success: true });
});

// Fortschritt laden
app.get("/api/load-progress", async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: "Missing email" });
  const user = await User.findOne({ email });
  res.json({ progress: user ? user.progress : null });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});