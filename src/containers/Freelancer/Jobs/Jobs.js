import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typography";
import {
  getJobs,
  getJobsFromUserId,
  postApplication,
} from "../../../redux/features/freelancer/freelanceSlice";
import { debounce } from "../../../utils/debounce";
import JobsList from "./Components/JobsList/JobsList";
import SearchForm from "./Components/SearchForm/SearchForm";
import style from "./Jobs.module.css";

const Jobs = () => {
  const { jobs, hasMore, page } = useSelector((state) => state.freelance);
  const freelancerId = useSelector((state) => state.auth.user.id);
  const appliedJobs = useSelector((state) => state.freelance.appliedJobs);
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    salary: "",
    freeText: "",
    skills: "",
  });

  const debouncedFetchJobs = useCallback(
    debounce((searchQuery) => {
      dispatch(getJobs(searchQuery));
    }, 1000),
    [dispatch]
  );

  const debouncedFetchWithPageJobs = useCallback(() => {
    debouncedFetchJobs({ filter, page });
  }, [filter, page]);

  useEffect(() => {
    let filter = "";
    if (filters.salary) {
      filter = `${filter}salary_gte=${filters.salary}&`;
    }
    if (filters.skills) {
      filter = `${filter}tags_like=^${filters.skills}&`;
    }
    if (filters.freeText) {
      filter = `${filter}q=${filters.freeText}`;
    }
    setFilter(filter);
  }, [filters.salary, filters.freeText, filters.skills]);

  useEffect(() => {
    dispatch(getJobsFromUserId({ freelancerId }));
  }, [freelancerId]);

  useEffect(() => {
    debouncedFetchJobs({ filter, page: 1 });
  }, [filter]);

  const onJobApply = (jobId) => {
    dispatch(postApplication({ jobId, freelancerId }));
  };

  return (
    <>
      <Card fullWidth="true">
        <Typography variant="h3">Search your dream Job & Easy Apply</Typography>
        <br />
        <div className={style.searchHeader}>
          <SearchForm setFilters={setFilters} filters={filters} />
        </div>
      </Card>
      <JobsList
        jobs={jobs}
        style={style}
        onJobApply={onJobApply}
        appliedJobs={appliedJobs}
        hasMore={hasMore}
        loadMore={debouncedFetchWithPageJobs}
      />
    </>
  );
};

export default Jobs;
