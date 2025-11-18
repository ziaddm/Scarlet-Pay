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
import Switch from "@mui/material/Switch";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Authentication layout components
import IllustrationLayout from "pages/Authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <SPBox component="form" role="form">
        <SPBox mb={2}>
          <SPInput type="email" label="Email" fullWidth />
        </SPBox>
        <SPBox mb={2}>
          <SPInput type="password" label="Password" fullWidth />
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
          <SPButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </SPButton>
        </SPBox>
        <SPBox mt={3} textAlign="center">
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
    </IllustrationLayout>
  );
}

export default Illustration;
