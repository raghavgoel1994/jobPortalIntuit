import React from "react";
import Card from "../../../components/Card/Card";
import JobForm from "./Component/JobForm";

export default function PostJobs() {
  return (
    <>
      <Card fullWidth="true">
        <JobForm />
      </Card>
    </>
  );
}
