import React, { useState } from "react";
import "./CardView.css";
import { questions } from "./data.js";

export default function CardView() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = questions[index];

  function prevCard() {
    setFlipped(false);
    setIndex((i) => (i > 0 ? i - 1 : questions.length - 1));
  }

  function nextCard() {
    setFlipped(false);
    setIndex((i) => (i < questions.length - 1 ? i + 1 : 0));
  }

  function flipCard() {
    setFlipped((f) => !f);
  }

  return (
    <div className="cardview-container">
      <h1 className="cardview-title">Lernkarten</h1>

      <div className="card-scene">
        <div className={`card ${flipped ? "is-flipped" : ""}`}>
          <div className="card-face card-front">
            <strong>Karte {index + 1}</strong>
            <div>{current.question}</div>
            <button className="reveal-btn" onClick={flipCard}>
              Antwort zeigen
            </button>
          </div>
          <div className="card-face card-back">
            <strong>Antwort:</strong>
            <div>{current.answer}</div>
            <button className="reveal-btn" onClick={flipCard}>
              Zurück
            </button>
          </div>
        </div>
      </div>

      <div className="card-nav">
        <button onClick={prevCard}>⏮️ vorherige Karte</button>
        <button onClick={nextCard}>nächste Karte ⏭️</button>
      </div>
    </div>
  );
}
