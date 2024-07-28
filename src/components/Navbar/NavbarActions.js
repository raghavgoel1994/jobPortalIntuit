import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathnameIncludes } from "../../hooks/usePathnameIncludes";
import useRoutes from "../../hooks/useRoutes";
import { logout } from "../../redux/features/auth/authSlice";
import Button from "./../Button/Button";

const NavbarActions = ({ theme, toggleTheme }) => {
  const auth = useSelector((state) => state.auth);
  const isFreelancerJobs = usePathnameIncludes("freelancer/jobs");
  const isEmployerPostedJobs = usePathnameIncludes("employer/postedJobs");

  const dispatch = useDispatch();
  const {
    onLoginClick,
    onSignInClick,
    onProfileClick,
    onJobsClick,
    onLogoutClick,
    onPostJobClick,
    onPostedJobsClick,
  } = useRoutes();

  const onLogoutButtonClick = () => {
    dispatch(logout());
    onLogoutClick();
  };

  if (!auth.isAuthenticated) {
    return (
      <>
        <Button variant="text" onClick={onLoginClick}>
          Login
        </Button>
        <Button variant="text" onClick={onSignInClick}>
          Signup
        </Button>
      </>
    );
  } else if (auth.isAuthenticated && auth.user.role === "freelancer") {
    return (
      <>
        <Button
          variant="text"
          onClick={isFreelancerJobs ? onProfileClick : onJobsClick}
        >
          {isFreelancerJobs ? "My Profile" : "View Jobs"}
        </Button>
        <Button variant="text" onClick={onLogoutButtonClick}>
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button
          variant="text"
          onClick={isEmployerPostedJobs ? onPostJobClick : onPostedJobsClick}
        >
          {isEmployerPostedJobs ? "Post Job" : "View Jobs"}
        </Button>
        <Button variant="text" onClick={onLogoutButtonClick}>
          Logout
        </Button>
      </>
    );
  }
};

export default NavbarActions;
