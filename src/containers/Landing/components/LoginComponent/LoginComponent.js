import React from "react";
import Card from "../../../../components/Card/Card";
import Tabs from "../../../../components/Tabs/Tabs";
import LoginAsEmployer from "./LoginAsEmployer";
import LoginAsFreelancer from "./LoginAsFreelancer";

const LoginForm = () => {
  return (
    <Card>
      <Tabs
        tabs={[
          { label: "Login as Freelancer", value: "freelancer" },
          { label: "Login as Employer", value: "employer" },
        ]}
      >
        <div tab="freelancer">
          <LoginAsFreelancer />
        </div>
        <div tab="employer">
          <LoginAsEmployer />
        </div>
      </Tabs>
    </Card>
  );
};

export default LoginForm;
