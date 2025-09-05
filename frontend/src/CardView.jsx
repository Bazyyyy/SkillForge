import React, { useState } from "react";
import "./CardView.css";
import { questions } from "./data.js";

// CardView zeigt eine Frage als Karteikarte an.
// Mit "Antwort zeigen" wird die Lösung sichtbar.
// Mit "Zurück" und "Weiter" kannst du durch die Karten blättern.

export default function CardView() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = questions[index];

  function prevCard() {
    setShowAnswer(false);
    setIndex((i) => (i > 0 ? i - 1 : questions.length - 1));
  }

  function nextCard() {
    setShowAnswer(false);
    setIndex((i) => (i < questions.length - 1 ? i + 1 : 0));
  }

  function reveal() {
    setShowAnswer(true);
  }

  return (
    <div className="cardview-container">
      <div className="card">
        <div className="card-question">
          <strong>Karte {index + 1}:</strong>
          <div>{current.question}</div>
        </div>
        {showAnswer ? (
          <div className="card-answer">
            <strong>Antwort:</strong>
            <div>{current.answer}</div>
          </div>
        ) : (
          <button className="reveal-btn" onClick={reveal}>
            Antwort zeigen
          </button>
        )}
      </div>
      <div className="card-nav">
        <button onClick={prevCard}>⏮️vorherige Karte</button>
        <button onClick={nextCard}>nächste Karte⏭️</button>
      </div>
    </div>
  );
}