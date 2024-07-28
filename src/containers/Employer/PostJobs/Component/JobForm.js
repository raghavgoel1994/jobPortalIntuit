import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Typography from "../../../../components/Typography/Typography";
import { postJob } from "../../../../redux/features/employer/employerSlice";
import styles from "./JobForm.module.css";

const JobForm = () => {
  const [formData, setFormData] = useState({
    description: null,
    requirement: "",
    title: "",
    salary: "",
    tags: "",
    company: { name: "" },
  });
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const employerId = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, ...{ [name]: value } }));
    switch (name) {
      case "requirement":
      case "tags":
      case "salary":
      case "title":
        setFormData({ ...formData, ...{ [name]: value } });
        break;
      case "companyName":
        setFormData({ ...formData, ...{ company: { name: value } } });
        break;
      case "email":
      case "phone":
      case "address":
        setContactInfo({ ...contactInfo, [name]: value });
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 16 * 1024) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event.target.result);
        setFormData({ ...formData, ...{ description: event.target.result } });
      };
      reader.readAsText(file);
    } else {
      setErrors({
        ...errors,
        description: "File must be less than 16KB.",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description) {
      newErrors.description = "Job description document is required.";
    }
    if (!formData.salary) {
      newErrors.salary = "Salary is required.";
    }
    if (!formData.requirement.trim()) {
      newErrors.requirement = "Job requirements are required.";
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!formData.tags.trim()) {
      newErrors.tags = "Tags are required.";
    }
    if (!formData.company?.name.trim()) {
      newErrors.companyName = "Company name is required.";
    }
    if (
      !contactInfo.email.trim() ||
      !contactInfo.phone.trim() ||
      !contactInfo.address.trim()
    ) {
      newErrors.contactInfo = "All contact information fields are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const jobData = {
        ...formData,
        employerId,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
        company: {
          name: formData.company.name,
          contact: contactInfo,
        },
      };
      dispatch(postJob(jobData));
    }
  };

  return (
    <form className={styles.jobForm} onSubmit={handleSubmit}>
      <Typography variant="h2">Post a Job</Typography>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="description">
          Job Description (Document, max 16KB)
        </Typography>
        <Input
          type="file"
          accept=".txt,.doc,.docx"
          onChange={handleFileChange}
        />
        {errors.description && (
          <Typography variant="span" className={styles.error}>
            {errors.description}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="requirement">
          Job Requirements
        </Typography>
        <Input
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleInputChange}
        />
        {errors.requirement && (
          <Typography variant="span" className={styles.error}>
            {errors.requirement}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="title">
          Job Title
        </Typography>
        <Input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        {errors.title && (
          <Typography variant="span" className={styles.error}>
            {errors.title}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="tags">
          Tags (comma-separated)
        </Typography>
        <Input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
        />
        {errors.tags && (
          <Typography variant="span" className={styles.error}>
            {errors.tags}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="salary">
          Salary
        </Typography>
        <Input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
        />
        {errors.tags && (
          <Typography variant="span" className={styles.error}>
            {errors.tags}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <Typography variant="label" htmlFor="companyName">
          Company Name
        </Typography>
        <Input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.company.name}
          onChange={handleInputChange}
        />
        {errors.companyName && (
          <Typography variant="span" className={styles.error}>
            {errors.companyName}
          </Typography>
        )}
      </div>
      <div className={styles.formGroup}>
        <h3>Contact Information</h3>
        <Typography variant="label" htmlFor="email">
          Email
        </Typography>
        <Input
          type="email"
          id="email"
          name="email"
          value={contactInfo.email}
          onChange={handleInputChange}
        />
        <Typography variant="label" htmlFor="phone">
          Phone
        </Typography>
        <Input
          type="text"
          id="phone"
          name="phone"
          value={contactInfo.phone}
          onChange={handleInputChange}
        />
        <Typography variant="label" htmlFor="address">
          Address
        </Typography>
        <Input
          type="text"
          id="address"
          name="address"
          value={contactInfo.address}
          onChange={handleInputChange}
        />
        {errors.contactInfo && (
          <Typography variant="span" className={styles.error}>
            {errors.contactInfo}
          </Typography>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default JobForm;
