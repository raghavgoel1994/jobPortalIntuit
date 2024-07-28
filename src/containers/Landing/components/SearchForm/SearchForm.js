import React from "react";
import Input from "./../../../../components/Input/Input";
import Typography from "./../../../../components/Typography/Typography";
import style from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <div className={style.SearchFormContainer}>
      <Typography variant="h1">Find your dream job now</Typography>
      <Typography variant="h2">5 lakh+ jobs for you to explore</Typography>
      <div className={style.SearchForm}>
        <Input type="text" placeholder="Search for jobs..." />
      </div>
    </div>
  );
}
