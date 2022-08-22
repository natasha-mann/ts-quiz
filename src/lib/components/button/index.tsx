import styles from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  type: "submit" | "reset" | "button";
  id: string;
}

export const Button = ({
  type = "button",
  label,
  onClick,
  id,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} id={id} className={styles[type]}>
      {label}
    </button>
  );
};
