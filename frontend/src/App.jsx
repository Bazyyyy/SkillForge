import React, { useState, useEffect } from "react";
import "./App.css";
import CardView from "./CardView.jsx";
import QuizView from "./QuizView.jsx";

// Fortschritt speichern
async function saveProgress(email, progress) {
  await fetch("http://localhost:5000/api/save-progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, progress })
  });
}

// Fortschritt laden
async function loadProgress(email) {
  const res = await fetch(`http://localhost:5000/api/load-progress?email=${encodeURIComponent(email)}`);
  const data = await res.json();
  return data.progress;
}

// Registrierung
async function registerUser(email, password) {
  const res = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return await res.json();
}

// Login
async function loginUser(email, password) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return await res.json();
}

export default function App() {
  const [view, setView] = useState("menu");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [correctQuestions, setCorrectQuestions] = useState([]);

  // Login mit Backend
  async function handleLogin(e) {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.success) {
      setLoggedIn(true);
      setLoginError("");
      if (result.progress) {
        setScore(result.progress.score || 0);
        setLevel(result.progress.level || 1);
        setAchievements(result.progress.achievements || []);
        setAnsweredQuestions(result.progress.answeredQuestions || []);
        setCorrectQuestions(result.progress.correctQuestions || []);
      }
    } else {
      setLoginError(result.error || "Falsche E-Mail oder Passwort.");
    }
  }

  // Registrierung mit Backend
  async function handleRegister(e) {
    e.preventDefault();
    const result = await registerUser(email, password);
    if (result.success) {
      setLoggedIn(true);
      setShowRegister(false);
      setLoginError("");
      setScore(0);
      setLevel(1);
      setAchievements([]);
      setAnsweredQuestions([]);
      setCorrectQuestions([]);
    } else {
      setLoginError(result.error || "Registrierung fehlgeschlagen.");
    }
  }

  // Fortschritt speichern nach jeder Änderung
  useEffect(() => {
    if (loggedIn && email) {
      saveProgress(email, { score, level, achievements, answeredQuestions, correctQuestions });
    }
  }, [score, level, achievements, answeredQuestions, correctQuestions, loggedIn, email]);

  return (
    <div className="app-container">
      <header>
        <h1>
          <span role="img" aria-label="hammer">⚒️</span> SkillForge Lernschmiede
        </h1>
      </header>
      <main>
        {view === "menu" && (
          <div className="main-menu">
            {!loggedIn ? (
              showRegister ? (
                <form onSubmit={handleRegister} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"}}>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{padding: "12px", fontSize: "1.2rem", borderRadius: "8px", border: "2px solid #d2691e"}}
                  />
                  <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{padding: "12px", fontSize: "1.2rem", borderRadius: "8px", border: "2px solid #d2691e"}}
                  />
                  <button type="submit" style={{padding: "12px 32px", fontSize: "1.2rem"}}>Registrieren</button>
                  <button type="button" onClick={() => setShowRegister(false)} style={{
                      background: "none",
                      border: "none",
                      color: "#d2691e",
                      marginTop: "4px",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      padding: "2px 6px"
                    }}
                  >
                    Zurück zum Login
                  </button>
                  {loginError && <div style={{color: "#d32f2f"}}>{loginError}</div>}
                </form>
              ) : (
                <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"}}>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{padding: "12px", fontSize: "1.2rem", borderRadius: "8px", border: "2px solid #d2691e"}}
                  />
                  <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{padding: "12px", fontSize: "1.2rem", borderRadius: "8px", border: "2px solid #d2691e"}}
                  />
                  <button type="submit" style={{padding: "12px 32px", fontSize: "1.2rem"}}>Login</button>
                  <button
                    type="button"
                    onClick={() => setShowRegister(true)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#d2691e",
                      marginTop: "4px",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      padding: "2px 6px"
                    }}
                  >
                    Noch kein Account? Jetzt registrieren
                  </button>
                  {loginError && <div style={{color: "#d32f2f"}}>{loginError}</div>}
                </form>
              )
            ) : (
              <>
                <div style={{marginBottom: "24px", fontSize: "1.1rem"}}>Willkommen!</div>
                <button onClick={() => setView("cards")}>Karteikarten</button>
                <button onClick={() => setView("quiz")}>Quiz</button>
              </>
            )}
          </div>
        )}
        {view === "cards" && (
          <>
            <button className="back-btn" onClick={() => setView("menu")} style={{position: "absolute", top: 20, left: 20}}>← Zurück zum Hauptmenü</button>
            <CardView />
          </>
        )}
        {view === "quiz" && (
          <>
            <button className="back-btn" onClick={() => setView("menu")} style={{position: "absolute", top: 20, left: 20}}>← Zurück zum Hauptmenü</button>
            <QuizView
              score={score}
              setScore={setScore}
              level={level}
              setLevel={setLevel}
              achievements={achievements}
              setAchievements={setAchievements}
              answeredQuestions={answeredQuestions}
              setAnsweredQuestions={setAnsweredQuestions}
              correctQuestions={correctQuestions}
              setCorrectQuestions={setCorrectQuestions}
            />
          </>
        )}
      </main>
      <footer>
        <small>&copy; 2025 SkillForge</small>
      </footer>
    </div>
  );
}