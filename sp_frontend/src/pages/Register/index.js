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
import { useRegister } from "features/auth";

// Shared hooks
import { useSnackbar } from "shared/hooks";

// Core config
import { ROUTES } from "core/config";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    major: "",
    classYear: "",
  });
  const [errors, setErrors] = useState({});
  const [agreeTerms, setAgreeTerms] = useState(false);

  const { register, loading, error: registerError } = useRegister();
  const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();

  const handleSetAgreeTerms = () => setAgreeTerms(!agreeTerms);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Full name must be at least 2 characters";
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    }

    if (!formData.major.trim()) {
      newErrors.major = "Major is required";
    }

    if (!formData.classYear.trim()) {
      newErrors.classYear = "Class year is required";
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
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
      await register({
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        student_id: formData.studentId.trim(),
        major: formData.major.trim(),
        class_year: formData.classYear.trim(),
      });
      showSnackbar(
        "success",
        "check_circle",
        "Registration Successful",
        "Welcome! Your account has been created."
      );
    } catch (err) {
      // Error is already set in the hook, show snackbar
      showSnackbar(
        "error",
        "error",
        "Registration Failed",
        registerError || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <SPBox component="form" role="form" onSubmit={handleSubmit}>
        <SPBox mb={2}>
          <SPInput
            type="text"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
        </SPBox>
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
        <SPBox mb={2}>
          <SPInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            fullWidth
          />
        </SPBox>
        <SPBox mb={2}>
          <SPInput
            type="text"
            label="Student ID"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            error={!!errors.studentId}
            helperText={errors.studentId}
            fullWidth
          />
        </SPBox>
        <SPBox mb={2}>
          <SPInput
            type="text"
            label="Major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            error={!!errors.major}
            helperText={errors.major}
            fullWidth
          />
        </SPBox>
        <SPBox mb={2}>
          <SPInput
            type="text"
            label="Class Year"
            name="classYear"
            value={formData.classYear}
            onChange={handleChange}
            error={!!errors.classYear}
            helperText={errors.classYear}
            fullWidth
          />
        </SPBox>
        <SPBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={agreeTerms} onChange={handleSetAgreeTerms} />
          <SPTypography
            variant="button"
            fontWeight="regular"
            color={errors.agreeTerms ? "error" : "text"}
            onClick={handleSetAgreeTerms}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;I agree the{" "}
            <SPTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="bold"
              color="info"
              textGradient
            >
              Terms and Conditions
            </SPTypography>
          </SPTypography>
        </SPBox>
        {errors.agreeTerms && (
          <SPBox mt={-2} mb={1}>
            <SPTypography variant="caption" color="error">
              {errors.agreeTerms}
            </SPTypography>
          </SPBox>
        )}
        <SPBox mt={4} mb={1}>
          <SPButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "sign up"}
          </SPButton>
        </SPBox>
        <SPBox mt={3} textAlign="center">
          <SPTypography variant="button" color="text">
            Already have an account?{" "}
            <SPTypography
              component={Link}
              to={ROUTES.LOGIN}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign in
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

export default Register;
