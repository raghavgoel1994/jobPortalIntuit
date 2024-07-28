import React from "react";
import Typography from "../../../../components/Typography/Typography";
import Button from "./../../../../components/Button/Button";
import style from "./JobCard.module.css";

const JobCard = ({ job, onJobApply = () => {}, appliedJobs = [] }) => {
  return (
    <div className={style.jobCard}>
      <Typography variant="h2" className={style.jobTitle}>
        {job.title}
      </Typography>
      <Typography variant="p" className={style.jobDescription}>
        {job.description}
      </Typography>
      <div className={style.jobRequirements}>
        <Typography variant="h3">Requirements</Typography>
        <Typography variant="p">{job.requirement}</Typography>
      </div>
      <div className={style.jobRequirements}>
        <Typography variant="h3">Salary</Typography>
        <Typography variant="p">{job.salary}$/Hour</Typography>
      </div>
      <div className={style.jobTags}>
        <Typography variant="h3">Tags</Typography>
        <ul>
          {job?.tags?.map((tag, index) => (
            <li key={index} className={style.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {job.company && (
        <div className={style.jobCompany}>
          <Typography variant="h3">Company</Typography>
          <Typography variant="p">{job.company.name}</Typography>
          {job.company.contact && (
            <>
              <Typography variant="p">
                Contact: {job.company.contact.email}
              </Typography>
              <Typography variant="p">
                Phone: {job.company.contact.phone}
              </Typography>
              <Typography variant="p">
                Address: {job.company.contact.address}
              </Typography>
            </>
          )}
        </div>
      )}
      <Button
        type="submit"
        onClick={onJobApply}
        disabled={appliedJobs.includes(job.id)}
      >
        {appliedJobs.includes(job.id) ? "Applied !!" : "Easy Apply"}
      </Button>
    </div>
  );
};

export default JobCard;
