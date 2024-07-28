import { useNavigate } from "react-router-dom";

const useRoutes = () => {
  const nav = useNavigate();

  const onHomeClick = () => {
    nav("/");
  };

  const onLoginClick = () => {
    nav("/login");
  };

  const onSignInClick = () => {
    nav("/signUp");
  };

  const onJobsClick = () => {
    nav("/freelancer/jobs");
  };

  const onProfileClick = () => {
    nav("/freelancer/profile");
  };

  const onPostedJobsClick = () => {
    nav("/employer/postedJobs");
  };

  const onPostJobClick = () => {
    nav("/employer/postJobs");
  };

  const onViewFreelancerProfileClick = (id) => {
    nav(`/employer/applicant/${id}`);
  };

  const onLogoutClick = () => {
    nav("/");
  };

  return {
    onLoginClick,
    onSignInClick,
    onHomeClick,
    onProfileClick,
    onJobsClick,
    onLogoutClick,
    onPostedJobsClick,
    onPostJobClick,
    onViewFreelancerProfileClick,
  };
};

export default useRoutes;
