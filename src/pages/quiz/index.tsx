import { SyntheticEvent, useEffect, useState } from "react";
import { Button } from "../../lib/components/button";
import styles from "./quiz.module.css";

export type Question = { title: string; choices: string[]; answer: string };

type QuizProps = {
  questions: Question[];
};

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCheckAnswer = (event: SyntheticEvent) => {
    console.log("checking");
    const selectedAnswer = event.target as HTMLInputElement;
    if (
      selectedAnswer.dataset.answer === questions[currentQuestionIndex].answer
    ) {
      console.log("correct");
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setGameOver(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.quizContainer}>
      <div>Score: {score}</div>
      {gameOver && <div>GAME OVER</div>}
      {!gameOver && (
        <>
          <h1 className={styles.question}>{currentQuestion.title}</h1>
          <div className={styles.answersContainer}>
            {currentQuestion.choices.map((choice, index) => {
              return (
                <button
                  className={styles.answer}
                  type="button"
                  id={index.toString()}
                  data-answer={choice}
                  onClick={handleCheckAnswer}
                  key={index}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
