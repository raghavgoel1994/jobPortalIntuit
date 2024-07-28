import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick = () => {},
  variant = "primary",
  disabled = false,
}) => {
  const classNames = `${styles.button} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
