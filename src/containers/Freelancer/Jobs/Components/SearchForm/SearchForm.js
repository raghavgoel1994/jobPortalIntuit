import React from "react";
import Input from "../../../../../components/Input/Input";
import Typography from "../../../../../components/Typography/Typography";

export default function SearchForm({ filters, setFilters }) {
  return (
    <>
      <div>
        <Typography variant="span">Free Text Search</Typography>
        <Input
          type="text"
          placeholder="Senior Software Engineer..."
          onChange={(e, type) => {
            setFilters((item) => ({
              ...item,
              freeText: e.target.value,
            }));
          }}
          value={filters.freeText}
        />
      </div>
      <div>
        <Typography variant="span">Filter By Skills</Typography>
        <Input
          type="text"
          placeholder="HTML, CSS..."
          onChange={(e, type) => {
            setFilters((item) => ({
              ...item,
              skills: e.target.value,
            }));
          }}
          value={filters.skills}
        />
      </div>
      <div>
        <Typography variant="span">Min Salary per Hour</Typography>
        <Input
          type="text"
          placeholder="1000 ..."
          onChange={(e, type) => {
            setFilters((item) => ({
              ...item,
              salary: e.target.value,
            }));
          }}
          value={filters.salary}
        />
      </div>
    </>
  );
}
