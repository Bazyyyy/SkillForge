const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Beispiel-API-Route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo vom Backend!" });
});

// Statisches Ausliefern des gebauten Frontends (nach Build)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Fallback für alle anderen GET-Anfragen (für React Router)
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});