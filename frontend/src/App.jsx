import React, { useState, useEffect } from "react";
import "./App.css";
import CardView from "./CardView.jsx";
import QuizView from "./QuizView.jsx";

// Dummy-Funktionen, damit die App nicht abstürzt
async function saveProgress(email, progress) {
  // Hier könntest du später einen API-Call einbauen
  return true;
}

async function loadProgress(email) {
  // Hier könntest du später einen API-Call einbauen
  return null;
}

// Die Hauptkomponente der App. Sie steuert die Ansicht (Karteikarten oder Quiz)
// und zeigt das passende Modul an. Das Design ist freundlich und erinnert an eine Schmiede.
export default function App() {
  const [view, setView] = useState("menu");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  function handleBack() {
    setView("menu");
  }

  function handleLogin(e) {
    e.preventDefault();
    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Falsche E-Mail oder Passwort.");
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setRegisteredUser({ email, password });
      setLoggedIn(true);
      setShowRegister(false);
      setLoginError("");
    }
  }

  // Nach Login: Fortschritt laden und State setzen
  useEffect(() => {
    if (loggedIn && email) {
      loadProgress(email).then(progress => {
        if (progress) {
          setScore(progress.score);
          setLevel(progress.level);
          setAchievements(progress.achievements);
          setAnsweredQuestions(progress.answeredQuestions);
        }
      });
    }
  }, [loggedIn, email]);

  // Nach jeder Antwort: Fortschritt speichern
  useEffect(() => {
    if (loggedIn && email) {
      saveProgress(email, { score, level, achievements, answeredQuestions });
    }
  }, [score, level, achievements, answeredQuestions]);

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
            <button className="back-btn" onClick={handleBack} style={{position: "absolute", top: 20, left: 20}}>← Zurück zum Hauptmenü</button>
            <CardView />
          </>
        )}
        {view === "quiz" && (
          <>
            <button className="back-btn" onClick={handleBack} style={{position: "absolute", top: 20, left: 20}}>← Zurück zum Hauptmenü</button>
            <QuizView />
          </>
        )}
      </main>
      <footer>
        <small>&copy; 2025 SkillForge</small>
      </footer>
    </div>
  );
}