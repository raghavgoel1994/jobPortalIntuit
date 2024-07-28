import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, className, fullWidth, ...props }) => {
  return (
    <div
      className={`${styles.card} ${className} ${
        fullWidth ? styles.fullWidth : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
