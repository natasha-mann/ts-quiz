import { useState } from "react";
import { Button } from "../../lib/components/button";
import { Input } from "../../lib/components/input";
import { Question, Quiz } from "../quiz";
import styles from "./main.module.css";
import {
  javascriptQuestions,
  htmlQuestions,
  cssQuestions,
} from "../../utils/questions";

const shuffleQuestions = (array: Question[]) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    const temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const Main = () => {
  const [questions, setQuestions] = useState<
    {
      title: string;
      choices: string[];
      answer: string;
    }[]
  >();
  const [isQuiz, setIsQuiz] = useState(false);

  const handleClick = () => {
    const javascriptCheck = document.getElementById(
      "javascriptCheckbox"
    )! as HTMLInputElement;
    const cssCheck = document.getElementById(
      "cssCheckbox"
    )! as HTMLInputElement;
    const htmlCheck = document.getElementById(
      "htmlCheckbox"
    )! as HTMLInputElement;

    const selectedQuestions = [];

    if (javascriptCheck.checked) selectedQuestions.push(...javascriptQuestions);
    if (cssCheck.checked) selectedQuestions.push(...htmlQuestions);
    if (htmlCheck.checked) selectedQuestions.push(...cssQuestions);

    const shuffledQs = shuffleQuestions(selectedQuestions);

    setQuestions(shuffledQs);
    setIsQuiz(true);
  };

  return (
    <>
      {!isQuiz && (
        <form id="start-form" className={styles.form}>
          <h2 className={styles.text}>Select your questions:</h2>

          <div className={styles.checkboxes}>
            <Input
              type="checkbox"
              id="javascriptCheckbox"
              value="javascript"
              label="JavaScript"
            />
            <Input
              type="checkbox"
              id="htmlCheckbox"
              value="html"
              label="HTML"
            />
            <Input
              type="checkbox"
              id="cssCheckbox"
              value="htmcssl"
              label="CSS"
            />
          </div>

          <Button
            type="button"
            onClick={handleClick}
            label="START QUIZ"
            id="start-btn"
          />
        </form>
      )}

      {isQuiz && questions?.length && <Quiz questions={questions} />}
    </>
  );
};
