import { Button } from "../../../../lib/components/button";
import styles from "./gameOver.module.css";

interface GameOverParams {
  score: number;
  numberOfQuestions: number;
}

export const GameOver = ({ score, numberOfQuestions }: GameOverParams) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.gameOver}>
      <div className={styles.heading}>GAME OVER</div>
      <div className={styles.gameInfo}>
        <div>
          Score: {score} / {numberOfQuestions}{" "}
        </div>
      </div>
      <Button
        type="button"
        label="Try Again"
        id="reset"
        onClick={handleClick}
      />
    </div>
  );
};
