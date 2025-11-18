/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Authentication layout components
import CoverLayout from "pages/Authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-cover.jpeg";

function SignInCover() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <SPBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <SPTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </SPTypography>
          <SPTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to Sign In
          </SPTypography>
        </SPBox>
        <SPBox pt={4} pb={3} px={3}>
          <SPBox component="form" role="form">
            <SPBox mb={2}>
              <SPInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="john@example.com"
                InputLabelProps={{ shrink: true }}
              />
            </SPBox>
            <SPBox mb={2}>
              <SPInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                InputLabelProps={{ shrink: true }}
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
              <SPButton variant="gradient" color="info" fullWidth>
                sign in
              </SPButton>
            </SPBox>
            <SPBox mt={3} mb={1} textAlign="center">
              <SPTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <SPTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
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
        </SPBox>
      </Card>
    </CoverLayout>
  );
}

export default SignInCover;
