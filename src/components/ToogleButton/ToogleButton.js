import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ theme, toggleTheme = () => {} }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    toggleTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [toggleTheme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onButtonClick = () => {
    toggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const { isMobile } = useMediaQuery();
  return (
    <button className={styles.toggleButton} onClick={onButtonClick}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
      {!isMobile ? (theme === "light" ? "Dark Mode" : "Light Mode") : ""}
    </button>
  );
};

export default ToggleButton;
