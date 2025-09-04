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

export default function QuizView() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentIdx, setCurrentIdx] = useState(getRandomIndex(questions.length));
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
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
      // Vergleiche Arrays unabhängig von Reihenfolge
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