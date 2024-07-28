import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typography";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Card fullWidth="true">
        <Typography variant="h3">Hi {user?.name}</Typography>
        <div>
          <Typography variant="span">Email: </Typography>
          <Typography variant="span">{user?.email}</Typography>
        </div>
        <div>
          <Typography variant="span">Phone Number: </Typography>
          <Typography variant="span">{user?.mobile}</Typography>
        </div>
        <div>
          <Typography variant="span">Year of Experience: </Typography>
          <Typography variant="span">{user?.yoe}</Typography>
        </div>
        <div>
          <Typography variant="span">Location: </Typography>
          <Typography variant="span">{user?.location}</Typography>
        </div>
      </Card>
      <Skills />
      <Projects />
    </>
  );
};

export default Profile;
