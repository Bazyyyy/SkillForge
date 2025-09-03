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

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});