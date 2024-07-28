import React from "react";
import styles from "./SelectInput.module.css";
const SelectInput = ({ label, options, value, onChange, name, error }) => {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.customSelect}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
