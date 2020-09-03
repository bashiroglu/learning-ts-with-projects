import React from "react";

import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [number, setNumber] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);
  console.log(questions);

  const TOTAL_QUESTIONS = 10;

  async function startTrivia() {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setNumber(0);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
  }
  function nextQuestion() {
    if (number + 1 === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber((prev) => prev + 1);
    }
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    if (!gameOver) {
      //users
      const answer = e.currentTarget.value;
      const isCorrect = questions[number].correct_answer === answer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      const answerObject: AnswerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        isCorrect,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }
  return (
    <div className="App">
      <header className="App-header">hi</header>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>start</button>
      ) : null}
      {!gameOver && <p>score:{score} </p>}
      {loading && <p>loading question</p>}

      {!gameOver && !loading && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion}>next</button>
      ) : null}
    </div>
  );
}

export default App;
