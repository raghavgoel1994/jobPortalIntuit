const validateLoginForm = ({ email, password }) => {
  let valid = true;
  let errors = {};

  if (!email) {
    valid = false;
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    valid = false;
    errors.email = "Email is invalid";
  }

  if (!password) {
    valid = false;
    errors.password = "Password is required";
  } else if (password.length < 6) {
    valid = false;
    errors.password = "Password must be at least 6 characters";
  }

  return { valid, errors };
};

export { validateLoginForm };
