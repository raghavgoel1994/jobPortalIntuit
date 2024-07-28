import React from "react";
import style from "./Chips.module.css";

const Chips = ({ skill, onDelete }) => {
  return (
    <div className={style.skillChip}>
      {skill}
      {onDelete && <button onClick={() => onDelete(skill)}>x</button>}
    </div>
  );
};

export default Chips;
