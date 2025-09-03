import React, { useState, useEffect } from "react";
import "./QuizView.css";
import { questions } from "./data.js";

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

// Hilfsfunktion: Generiert 3 plausible falsche Antworten
function getOptions(currentIdx) {
  const correct = questions[currentIdx].answer;
  const otherAnswers = questions
    .map((q, i) => i !== currentIdx ? q.answer : null)
    .filter(Boolean);
  const plausible = shuffle(otherAnswers).slice(0, 3);
  while (plausible.length < 3) {
    plausible.push("Weiß ich nicht");
  }
  return shuffle([correct, ...plausible]);
}

function getRandomIndex(max, exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * max);
  } while (idx === exclude && max > 1);
  return idx;
}

export default function QuizView() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentIdx, setCurrentIdx] = useState(getRandomIndex(questions.length));
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(getOptions(currentIdx));

  const current = questions[currentIdx];

  // Optionen neu generieren, wenn sich die Frage ändert
  useEffect(() => {
    setOptions(getOptions(currentIdx));
    setSelectedOption(null);
  }, [currentIdx]);

  function checkAnswer(e) {
    e.preventDefault();
    if (selectedOption === current.answer) {
      setScore(s => s + 1);
      setFeedback("Richtig! 🎉");
      if ((score + 1) % 3 === 0) setLevel(l => l + 1);
      const newAch = achievementsList.filter(
        a => a.points === score + 1 && !achievements.includes(a.text)
      );
      if (newAch.length > 0) {
        setAchievements([...achievements, ...newAch.map(a => a.text)]);
      }
    } else {
      setFeedback(`Leider falsch. Die richtige Antwort war: ${current.answer}`);
    }
    setAnsweredQuestions([...answeredQuestions, currentIdx]);
    setShowResult(true);
  }

  function nextQuestion() {
    let nextIdx;
    if (answeredQuestions.length + 1 >= questions.length) {
      setFeedback("Quiz beendet! Du hast alle Fragen beantwortet.");
      return;
    }
    do {
      nextIdx = getRandomIndex(questions.length, currentIdx);
    } while (answeredQuestions.includes(nextIdx));
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
  }

  return (
    <div className="quizview-container">
      <div className="quiz-status">
        <span>Level: {level}</span>
        <span>Punkte: {score}</span>
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
              {options.map((option, i) => (
                <label key={i} className={`quiz-option${selectedOption === option ? " selected" : ""}`}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
            <button type="submit" disabled={selectedOption === null}>Antwort prüfen</button>
          </form>
        ) : (
          <div className="quiz-feedback">
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