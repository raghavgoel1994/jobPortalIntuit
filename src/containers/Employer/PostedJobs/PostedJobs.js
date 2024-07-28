import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typography";
import {
  getApplicationsByJobId,
  getPostedByEmployerId,
} from "../../../redux/features/employer/employerSlice";
import PostedJobsList from "./JobsList/PostedJobsList";

export default function PostedJobs() {
  const dispatch = useDispatch();
  const { jobs, application } = useSelector((state) => state.employer);
  const employerId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    dispatch(getPostedByEmployerId({ employerId }));
  }, []);

  const onViewApplicationsClick = (jobId) => {
    dispatch(getApplicationsByJobId({ jobId }));
  };
  return (
    <>
      <Card fullWidth="true">
        <Typography variant="h3">
          List of jobs posted by you, check new job applications
        </Typography>
      </Card>
      <PostedJobsList
        jobs={jobs}
        onViewApplication={onViewApplicationsClick}
        application={application}
      />
    </>
  );
}
