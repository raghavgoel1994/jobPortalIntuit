import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { setNavigate } from "./utils/history";

function App({ children }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={setTheme} />
      <div className={style.container}>{children || <Outlet />}</div>
    </>
  );
}

export default App;
