import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../../redux/features/auth/authSlice";
import { validateLoginForm } from "../../../../utils/LoginFormValidator";
import LoginForm from "./LoginForm";

const LoginAsFreelancer = () => {
  const [formData, setFormData] = useState({
    email: "raghavgoel1994@gmail.com",
    password: "Test@123",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const loginError = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, errors } = validateLoginForm(formData);
    if (valid) {
      dispatch(
        login({
          ...formData,
          role: "freelancer",
        })
      );
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const onChange = () => {
    dispatch(reset());
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      errors={errors}
      setFormData={setFormData}
      formData={formData}
      loginError={loginError}
      onChange={onChange}
    />
  );
};

export default LoginAsFreelancer;
