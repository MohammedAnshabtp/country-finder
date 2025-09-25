export function validateLoginForm({ email, password }) {
    const errors = {};
  
    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.email = "Enter a valid email";
    }
  
    // Password validation
    const pwdRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  
    if (!password) {
      errors.password = "Password is required";
    } else if (!pwdRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters and include 1 capital letter, 1 number and 1 symbol";
    }
  
    return errors;
  }
  