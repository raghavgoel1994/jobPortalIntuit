import React from "react";
import Card from "../../../../components/Card/Card";
import Typography from "../../../../components/Typography/Typography";
import PostedJobsCard from "../JobsCard/PostedJobsCard";
import style from "./PostedJobsList.module.css";

export default function PostedJobsList({
  jobs,
  onViewApplication,
  application,
}) {
  return (
    <>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <Card fullWidth="true" key={index} className={style.jobCardContainer}>
            <PostedJobsCard
              job={job}
              onViewApplication={() => onViewApplication(job.id)}
              application={application}
            />
          </Card>
        ))
      ) : (
        <Card fullWidth="true" className={style.jobCardContainer}>
          <Typography variant="span">
            No Jobs Posted, Post new Jobs today to hire a freelancer
          </Typography>
        </Card>
      )}
    </>
  );
}
