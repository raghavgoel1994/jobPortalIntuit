import React, { useEffect, useState } from "react";
import styles from "./SkillSelector.module.css";

const SkillSelector = ({
  availableSkills = [],
  onAddSkill = () => {},
  filterList,
}) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showSkill, setShowSkill] = useState(availableSkills);

  useEffect(() => {
    if (filterList) {
      let filteredAvailableSkills =
        availableSkills.filter((item) => !filterList.includes(item)) || [];
      setShowSkill(filteredAvailableSkills);
    }
  }, [filterList]);

  useEffect(() => {
    if (selectedSkill) {
      onAddSkill(selectedSkill);
      setSelectedSkill("");
    }
  }, [selectedSkill]);

  return (
    <div className={styles.skillSelector}>
      <select
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e.target.value)}
      >
        <option value="" disabled>
          Select a skill
        </option>
        {showSkill.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SkillSelector;
