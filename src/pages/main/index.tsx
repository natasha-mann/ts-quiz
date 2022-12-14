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
import { shuffleQuestions } from "../../utils/utils";

export const Main = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [isQuiz, setIsQuiz] = useState(false);
  const [error, setError] = useState<{ error: boolean; message: string }>({
    error: false,
    message: "",
  });

  const getSelectedQuestions = (
    checkboxes: NodeListOf<HTMLInputElement>
  ): Question[] => {
    const selectedQuestions = [] as Question[];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        switch (checkbox.value) {
          case "javascript":
            selectedQuestions.push(...javascriptQuestions);
            break;
          case "html":
            selectedQuestions.push(...htmlQuestions);
            break;
          case "css":
            selectedQuestions.push(...cssQuestions);
            break;
        }
      }
    });

    return selectedQuestions;
  };

  const handleClick = () => {
    const checkboxes = document.querySelectorAll("input");

    const selectedQuestions = getSelectedQuestions(checkboxes);

    if (!selectedQuestions.length) {
      setError({
        error: true,
        message: "Please select at least one set of questions!",
      });
    } else {
      const shuffledQs = shuffleQuestions(selectedQuestions);

      setQuestions(shuffledQs);
      setIsQuiz(true);
    }
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
            <Input type="checkbox" id="cssCheckbox" value="css" label="CSS" />
          </div>

          <Button
            type="button"
            onClick={handleClick}
            label="START QUIZ"
            id="start-btn"
          />
          {error.error && <h5 className={styles.error}>{error.message}</h5>}
        </form>
      )}

      {isQuiz && questions?.length && <Quiz questions={questions} />}
    </>
  );
};
