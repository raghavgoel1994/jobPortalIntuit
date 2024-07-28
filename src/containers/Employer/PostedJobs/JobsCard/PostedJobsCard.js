import React from "react";
import Button from "../../../../components/Button/Button";
import Typography from "../../../../components/Typography/Typography";
import useRoutes from "../../../../hooks/useRoutes";
import style from "./PostedJobsCard.module.css";

const PostedJobsCard = ({
  job,
  onViewApplication = () => {},
  application = {},
}) => {
  const { onViewFreelancerProfileClick } = useRoutes();

  const getApplications = () => {
    if (application[job.id]?.freelancer?.length > 0) {
      return (
        <div className={style.jobTags}>
          <Typography variant="h3">List of Freelancers Applied</Typography>
          <ul>
            {application[job.id].freelancer.map((app, index) => (
              <li
                key={index}
                className={`${style.tag} ${style.click}`}
                onClick={() => onViewFreelancerProfileClick(app.id)}
              >
                {app.name}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (application[job.id]?.freelancer?.length === 0) {
      return (
        <div className={style.jobTags}>
          <Typography variant="h3">List of Freelancers Applied</Typography>
          <Typography variant="p">No Application submit yet!!</Typography>
        </div>
      );
    } else {
      return (
        <Button type="submit" onClick={onViewApplication}>
          {"View Jobs"}
        </Button>
      );
    }
  };

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
          {job.tags.map((tag, index) => (
            <li key={index} className={style.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.jobCompany}>
        <Typography variant="h3">Company</Typography>
        <Typography variant="p">{job.company.name}</Typography>
        <Typography variant="p">
          Contact: {job.company.contact.email}
        </Typography>
        <Typography variant="p">Phone: {job.company.contact.phone}</Typography>
        <Typography variant="p">
          Address: {job.company.contact.address}
        </Typography>
      </div>
      {getApplications()}
    </div>
  );
};

export default PostedJobsCard;
