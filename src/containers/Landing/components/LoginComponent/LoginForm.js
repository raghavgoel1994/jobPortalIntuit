import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Typography from "../../../../components/Typography/Typography";
import styles from "./LoginForm.module.css";

const LoginForm = ({
  handleSubmit,
  setFormData,
  formData,
  errors,
  loginError = "",
  onChange = () => {},
}) => {
  const onInputChange = (e, type) => {
    onChange();
    setFormData({ ...formData, [type]: e.target.value });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Typography variant="div" error>
        {loginError}
      </Typography>
      <div>
        <Typography variant="span">Email:</Typography>
        <Input
          type="email"
          required
          onChange={(e) => onInputChange(e, "email")}
          value={formData.email}
        />
        <Typography variant="div" error>
          {errors.email}
        </Typography>
      </div>
      <div>
        <Typography variant="span">Password:</Typography>
        <Input
          type="password"
          required
          onChange={(e) => onInputChange(e, "password")}
          value={formData.password}
        />
        <Typography variant="div" error>
          {errors.password}
        </Typography>
      </div>

      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
