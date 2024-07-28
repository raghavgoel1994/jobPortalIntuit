import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {
  PrivateEmployerRoute,
  PrivateFreelancerRoute,
  PrivateRoute,
} from "./components/PrivateRoute/PrivateRoute";
import ApplicantProfile from "./containers/Employer/PostedJobs/ApplicantProfile/ApplicantProfile";
import PostedJobs from "./containers/Employer/PostedJobs/PostedJobs";
import PostJobs from "./containers/Employer/PostJobs/PostJobs";
import Jobs from "./containers/Freelancer/Jobs/Jobs";
import UserProfile from "./containers/Freelancer/Profile/Profile";
import LoginForm from "./containers/Landing/components/LoginComponent/LoginComponent";
import SearchForm from "./containers/Landing/components/SearchForm/SearchForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <SearchForm />,
          },
          {
            path: "signUp",
            element: <LoginForm />,
          },
          {
            path: "login",
            element: <LoginForm />,
          },
        ],
      },
      {
        path: "/",
        element: <PrivateRoute />,
        children: [
          {
            path: "freelancer",
            element: <PrivateFreelancerRoute />,
            children: [
              {
                path: "profile",
                element: <UserProfile />,
              },
              {
                path: "jobs",
                element: <Jobs />,
              },
            ],
          },
          {
            path: "employer",
            element: <PrivateEmployerRoute />,
            children: [
              {
                path: "postedJobs",
                element: <PostedJobs />,
              },
              {
                path: "postJobs",
                element: <PostJobs />,
              },
              {
                path: "applicant/:id",
                element: <ApplicantProfile />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
