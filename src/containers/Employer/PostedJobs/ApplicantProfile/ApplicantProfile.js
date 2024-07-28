import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import Chips from "../../../../components/Chips/Chips";
import Typography from "../../../../components/Typography/Typography";
import { getFreelancer } from "../../../../redux/features/freelancer/freelanceSlice";
import styles from "./ApplicantProfile.module.css";

export default function ApplicantProfile({ skills, user }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, repos } = useSelector((state) => state.freelance);

  useEffect(() => {
    dispatch(getFreelancer({ id }));
  }, [id]);

  return (
    <Card fullWidth="true">
      <Typography variant="h3">Profile of freelancer</Typography>
      <div className={styles.container}>
        <div>
          <Typography variant="h5">Name: </Typography>
          <Typography variant="span">{profile?.name}</Typography>
        </div>
        <div>
          <Typography variant="h5">Email: </Typography>
          <Typography variant="span">{profile?.email}</Typography>
        </div>
        <div>
          <Typography variant="h5">Phone Number: </Typography>
          <Typography variant="span">{profile?.mobile}</Typography>
        </div>
        <div>
          <Typography variant="h5">Year of Experience: </Typography>
          <Typography variant="span">{profile?.yoe}</Typography>
        </div>
        <div>
          <Typography variant="h5">Location: </Typography>
          <Typography variant="span">{profile?.location}</Typography>
        </div>
        <div>
          <Typography variant="h5">Skills:</Typography>
          <div className={styles.skills}>
            {profile?.skills?.map((skill, index) => (
              <Chips key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <Typography variant="h5">Github Profile: </Typography>
          <Typography variant="span">{profile?.github}</Typography>
        </div>
        <div>
          <Typography variant="h5">Projects: </Typography>
          {repos?.length > 0 ? (
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
          ) : (
            <Typography variant="span">No Project listed</Typography>
          )}
        </div>
      </div>
    </Card>
  );
}
