const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Beispiel-API-Route (optional, für spätere Erweiterungen)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo vom Backend!" });
});

let userProgress = {}; // { email: { score, level, achievements, answeredQuestions } }

app.post("/api/save-progress", (req, res) => {
  const { email, progress } = req.body;
  if (!email || !progress) return res.status(400).json({ error: "Missing data" });
  userProgress[email] = progress;
  res.json({ success: true });
});

app.get("/api/load-progress", (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: "Missing email" });
  res.json({ progress: userProgress[email] || null });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});