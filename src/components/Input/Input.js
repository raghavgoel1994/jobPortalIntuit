import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
