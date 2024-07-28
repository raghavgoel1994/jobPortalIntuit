import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/Button/Button";
import Card from "../../../../../components/Card/Card";
import Chips from "../../../../../components/Chips/Chips";
import SkillSelector from "../../../../../components/SkillSelector/SkillSelector";
import Typography from "../../../../../components/Typography/Typography";
import { saveSkills } from "../../../../../redux/features/freelancer/freelanceSlice";
import styles from "./Skills.module.css";

const Skills = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user) || {};
  const [skills, setSkills] = useState(user.skills || []);
  const availableSkills = [
    "JavaScript",
    "React",
    "CSS",
    "Node.js",
    "Python",
    "HTML",
    "Angular",
  ];

  const handleAddSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  const handleDeleteSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const onSubmitClick = () => {
    dispatch(saveSkills({ skills, id: user.id }));
  };

  return (
    <Card className={styles.skillsContainer} fullWidth={true}>
      <Typography variant="h5">Keep your skills upto date.</Typography>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Chips key={index} skill={skill} onDelete={handleDeleteSkill} />
        ))}
      </div>
      <SkillSelector
        availableSkills={availableSkills}
        onAddSkill={handleAddSkill}
        filterList={skills}
      />
      <Button type="submit" onClick={onSubmitClick}>
        Save
      </Button>
    </Card>
  );
};

export default Skills;
