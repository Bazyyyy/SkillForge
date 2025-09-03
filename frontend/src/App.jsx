import React, { useState } from "react";
import "./App.css";
import CardView from "./CardView.jsx";
import QuizView from "./QuizView.jsx";

// Die Hauptkomponente der App. Sie steuert die Ansicht (Karteikarten oder Quiz)
// und zeigt das passende Modul an. Das Design ist freundlich und erinnert an eine Schmiede.
export default function App() {
  const [view, setView] = useState("menu");

  function handleBack() {
    setView("menu");
  }

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
            <button onClick={() => setView("cards")}>Karteikarten</button>
            <button onClick={() => setView("quiz")}>Quiz</button>
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