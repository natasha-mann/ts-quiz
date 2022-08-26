import { SyntheticEvent, useEffect, useState } from "react";
import { GameOver } from "./components/GameOver";
import styles from "./quiz.module.css";

export interface Question {
  title: string;
  choices: string[];
  answer: string;
}

interface QuizProps {
  questions: Question[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(questions.length * 10);

  useEffect(() => {
    const countdown = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0 || gameOver) {
      clearTimeout(countdown);
      setGameOver(true);
    }

    return () => clearTimeout(countdown);
  }, [timer, gameOver]);

  const handleCheckAnswer = (event: SyntheticEvent) => {
    const selectedAnswer = event.target as HTMLInputElement;
    if (
      selectedAnswer.dataset.answer === questions[currentQuestionIndex].answer
    ) {
      setScore(score + 10);
    } else {
      timer >= 10 ? setTimer(timer - 10) : setTimer(0);
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
      {gameOver && (
        <GameOver numberOfQuestions={questions.length} score={score} />
      )}
      {!gameOver && (
        <>
          <div className={styles.header}>
            <div>Score: {score}</div>
            <div>Time Remaining: {timer}</div>
          </div>
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
