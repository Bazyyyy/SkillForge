import React, { useState, useEffect } from "react";
import "./QuizView.css";
import { questions } from "./quizdata.js";

const achievementsList = [
  { points: 1, text: "Erste richtige Antwort! 🏅" },
  { points: 3, text: "Drei richtige Antworten! 🛡️" },
  { points: 5, text: "Fünf richtige Antworten! 🔥" },
  { points: 10, text: "Zehn richtige Antworten! Meisterschmied! ⚒️" },
];

// Hilfsfunktion: mischt ein Array (Fisher-Yates)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function getRandomIndex(max, exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * max);
  } while (idx === exclude && max > 1);
  return idx;
}

export default function QuizView({
  score,
  setScore,
  level,
  setLevel,
  achievements,
  setAchievements,
  answeredQuestions,
  setAnsweredQuestions,
  correctQuestions,
  setCorrectQuestions
}) {
  // Nur lokale States für quiz-interne Dinge:
  const [currentIdx, setCurrentIdx] = useState(getRandomIndex(questions.length));
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const current = questions[currentIdx];

  useEffect(() => {
    setOptions(questions[currentIdx].options);
    setSelectedOption(Array.isArray(questions[currentIdx].answer) ? [] : null);
  }, [currentIdx]);

  function handleOptionClick(opt) {
    if (Array.isArray(current.answer)) {
      setSelectedOption(prev =>
        prev.includes(opt)
          ? prev.filter(o => o !== opt)
          : [...prev, opt]
      );
    } else {
      setSelectedOption(opt);
    }
  }

  function checkAnswer(e) {
    e.preventDefault();
    let isCorrect = false;
    if (Array.isArray(current.answer)) {
      const sortedSelected = [...selectedOption].sort();
      const sortedAnswer = [...current.answer].sort();
      isCorrect =
        sortedSelected.length === sortedAnswer.length &&
        sortedSelected.every((v, i) => v === sortedAnswer[i]);
    } else {
      isCorrect = selectedOption === current.answer;
    }
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback("Richtig! 🎉");
      if (!correctQuestions.includes(currentIdx)) {
        setCorrectQuestions([...correctQuestions, currentIdx]);
      }
      if ((score + 1) % 3 === 0) setLevel(l => l + 1);
      const newAch = achievementsList.filter(
        a => a.points === score + 1 && !achievements.includes(a.text)
      );
      if (newAch.length > 0) {
        setAchievements([...achievements, ...newAch.map(a => a.text)]);
      }
    } else {
      setFeedback(
        `Leider falsch. Die richtige Antwort war: ${
          Array.isArray(current.answer)
            ? current.answer.join(" und ")
            : current.answer
        }`
      );
    }
    setAnsweredQuestions([...answeredQuestions, currentIdx]);
    setShowResult(true);
  }

  function nextQuestion() {
    if (correctQuestions.length >= questions.length) {
      setFeedback("Quiz beendet! Du hast alle Fragen richtig beantwortet.");
      return;
    }
    let nextIdx;
    const remaining = questions
      .map((_, idx) => idx)
      .filter(idx => !correctQuestions.includes(idx));
    nextIdx = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentIdx(nextIdx);
    setShowResult(false);
    setFeedback("");
  }

  function restartQuiz() {
    setScore(0);
    setLevel(1);
    setCurrentIdx(getRandomIndex(questions.length));
    setShowResult(false);
    setFeedback("");
    setAchievements([]);
    setAnsweredQuestions([]);
    setSelectedOption(null);
    setCorrectQuestions([]);
  }

  // Fortschritt berechnen
  const percent = Math.round((correctQuestions.length / questions.length) * 100);

  return (
    <div className="quizview-container">
      <div className="quiz-status">
        <span>Level: {level}</span>
        <span>Punkte: {score}</span>
      </div>
      {/* Fortschrittsbalken */}
      <div style={{width: "100%", marginBottom: "18px"}}>
        <div style={{
          background: "#ffe29f",
          borderRadius: "8px",
          height: "22px",
          width: "100%",
          boxShadow: "0 1px 4px rgba(80,40,10,0.07)",
          border: "1.5px solid #d2691e",
          position: "relative"
        }}>
          <div style={{
            background: "#388e3c",
            height: "100%",
            borderRadius: "8px",
            width: `${percent}%`,
            transition: "width 0.4s"
          }}></div>
          <span style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "#4e2e0e",
            fontWeight: "bold",
            fontSize: "1rem"
          }}>
            {percent}% richtig beantwortet
          </span>
        </div>
      </div>
      {achievements.length > 0 && (
        <div className="achievements">
          {achievements.map((a, i) => (
            <div className="achievement" key={i}>{a}</div>
          ))}
        </div>
      )}
      <div className="quiz-card">
        <div className="quiz-question">
          <strong>Frage:</strong>
          <div>{current.question}</div>
        </div>
        {!showResult ? (
          <form onSubmit={checkAnswer}>
            <div className="quiz-options">
              {options.map((opt, idx) => (
                <button
                  key={opt}
                  className={`quiz-option-btn${
                    Array.isArray(current.answer)
                      ? selectedOption.includes(opt)
                        ? " selected"
                        : ""
                      : selectedOption === opt
                        ? " selected"
                        : ""
                  }`}
                  type="button"
                  onClick={() => handleOptionClick(opt)}
                  disabled={showResult}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              type="submit"
              disabled={
                Array.isArray(current.answer)
                  ? selectedOption.length === 0
                  : selectedOption === null
              }
            >
              Antwort prüfen
            </button>
          </form>
        ) : (
          <div className={`quiz-feedback ${feedback.startsWith("Richtig") ? "correct" : feedback.startsWith("Leider") ? "incorrect" : ""}`}>
            <div>{feedback}</div>
            {(feedback.startsWith("Richtig") || feedback.startsWith("Leider")) && (
              <div>
                <button onClick={nextQuestion}>Nächste Frage</button>
              </div>
            )}
            {feedback.startsWith("Quiz beendet") && (
              <div>
                <button onClick={restartQuiz}>Quiz neu starten</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Beispiel in QuizView.jsx
async function saveProgress(email, progress) {
  await fetch("http://localhost:5000/api/save-progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, progress })
  });
}

// Beispiel in QuizView.jsx
async function loadProgress(email) {
  const res = await fetch(`http://localhost:5000/api/load-progress?email=${encodeURIComponent(email)}`);
  const data = await res.json();
  return data.progress;
}