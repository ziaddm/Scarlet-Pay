/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.scarlet-pay.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.scarlet-pay.com)

Coded by www.scarlet-pay.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPInput from "components/base/SPInput";
import SPButton from "components/base/SPButton";
import SPSnackbar from "components/base/SPSnackbar";

// @mui icons
import Icon from "@mui/material/Icon";

// Features
import { useLogin } from "features/auth";

// Shared hooks
import { useSnackbar } from "shared/hooks";

// Core config
import { ROUTES } from "core/config";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const { login, loading, error: loginError } = useLogin();
  const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      showSnackbar("error", "error", "Validation Error", "Please fix the errors in the form.");
      return;
    }

    try {
      await login(formData);
      // Success - navigation will happen automatically, no need to show snackbar
      // as the user will be redirected to home page
    } catch (err) {
      // Error occurred - show error snackbar and stay on login page
      const errorMessage =
        loginError ||
        err.response?.data?.message ||
        err.message ||
        "An error occurred. Please try again.";
      console.error("Login form error:", err);
      console.error("Login form error message:", errorMessage);
      showSnackbar("error", "error", "Login Failed", errorMessage);
    }
  };

  return (
    <>
      <SPBox component="form" role="form" onSubmit={handleSubmit}>
        <SPBox mb={2}>
          <SPInput
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
        </SPBox>
        <SPBox mb={2}>
          <SPInput
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />
        </SPBox>
        <SPBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SPTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </SPTypography>
        </SPBox>
        <SPBox mt={4} mb={1}>
          <SPButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "sign in"}
          </SPButton>
        </SPBox>
        <SPBox mt={2} textAlign="center">
          <SPTypography
            component={Link}
            to={ROUTES.RESET_PASSWORD}
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Forgot password?
          </SPTypography>
        </SPBox>
        <SPBox mt={3} textAlign="center">
          <SPTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <SPTypography
              component={Link}
              to={ROUTES.REGISTER}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SPTypography>
          </SPTypography>
        </SPBox>
      </SPBox>

      {/* Snackbar */}
      <SPSnackbar
        color={snackbar.color}
        icon={<Icon>{snackbar.icon}</Icon>}
        title={snackbar.title}
        content={snackbar.content}
        dateTime={snackbar.dateTime}
        open={snackbar.open}
        close={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}

export default Login;
