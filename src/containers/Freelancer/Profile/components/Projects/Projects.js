import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/Button/Button";
import Card from "../../../../../components/Card/Card";
import Input from "../../../../../components/Input/Input";
import Typography from "../../../../../components/Typography/Typography";
import {
  getGithubRepos,
  saveSkills,
} from "../../../../../redux/features/freelancer/freelanceSlice";
import styles from "./Project.module.css";

const Projects = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user) || {};
  const repos = useSelector((state) => state.freelance?.repos) || [];
  const [github, setGithub] = useState(user?.github || "");

  const onSubmitClick = () => {
    dispatch(saveSkills({ github, id: user.id }));
  };

  useEffect(() => {
    user?.github && dispatch(getGithubRepos({ github: user?.github }));
  }, []);

  return (
    <Card className={styles.skillsContainer} fullWidth={true}>
      <Typography variant="h5">
        Add/update github profile to list project.
      </Typography>
      <div>
        <Typography variant="span">Github Username:</Typography>
        <Input
          type="text"
          onChange={(e) => {
            setGithub(e.target.value);
          }}
          placeholder="raghavgoel1994"
          value={github}
        />
      </div>

      <Button type="submit" onClick={onSubmitClick}>
        Save
      </Button>

      <div>
        <Typography variant="h5">Your GitHub Repositories:</Typography>

        {repos.length > 0 ? (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        ) : (
          <Typography variant="span">No Project listed</Typography>
        )}
      </div>
    </Card>
  );
};

export default Projects;
