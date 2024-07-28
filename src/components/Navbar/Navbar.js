import React from "react";
import useRoutes from "../../hooks/useRoutes";
import ToggleButton from "./../ToogleButton/ToogleButton";
import styles from "./Navbar.module.css";
import NavbarActions from "./NavbarActions";

const Navbar = ({ theme, toggleTheme }) => {
  const { onHomeClick } = useRoutes();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={onHomeClick}>
        Intuit
      </div>
      <div className={styles.navLinks}>
        <NavbarActions />
        <div className={styles.themeToggle}>
          <ToggleButton theme={theme} toggleTheme={toggleTheme}></ToggleButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
