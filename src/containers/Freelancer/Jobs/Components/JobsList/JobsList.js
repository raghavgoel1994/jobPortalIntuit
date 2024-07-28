import React from "react";
import Card from "../../../../../components/Card/Card";
import Typography from "../../../../../components/Typography/Typography";
import JobCard from "../JobCard";

export default function JobsList({ jobs, style, onJobApply, appliedJobs }) {
  return (
    <>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <Card fullWidth="true" key={index} className={style.jobCardContainer}>
            <JobCard
              job={job}
              onJobApply={() => onJobApply(job.id)}
              appliedJobs={appliedJobs}
            />
          </Card>
        ))
      ) : (
        <Card fullWidth="true" className={style.jobCardContainer}>
          <Typography variant="span">
            No Jobs listed or matching Search filters
          </Typography>
        </Card>
      )}
    </>
  );
}
