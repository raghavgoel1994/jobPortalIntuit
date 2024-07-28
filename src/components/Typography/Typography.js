import React from "react";
import styles from "./Typography.module.css";

const Typography = ({
  variant = "h6",
  children,
  className = "",
  error = false,
  ...props
}) => {
  const Component = variant;
  return (
    <Component
      className={`${styles.typography} ${styles[variant]} ${
        error ? styles.error : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
