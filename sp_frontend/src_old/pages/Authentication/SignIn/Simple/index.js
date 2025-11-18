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
import SimpleLayout from "pages/Authentication/components/SimpleLayout";
import Separator from "pages/Authentication/components/Separator";
import Socials from "pages/Authentication/components/Socials";

function SignInSimple() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <SimpleLayout>
      <Card>
        <SPBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          pt={2.5}
          pb={2.875}
          px={2.5}
          textAlign="center"
          lineHeight={1}
        >
          <SPTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </SPTypography>
          <SPTypography variant="button" color="white">
            Welcome back
          </SPTypography>
        </SPBox>
        <SPBox p={3}>
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
            <SPBox mt={2} mb={1}>
              <SPButton variant="gradient" color="info" fullWidth>
                sign in
              </SPButton>
            </SPBox>
            <Separator />
            <Socials />
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
        </SPBox>
      </Card>
    </SimpleLayout>
  );
}

export default SignInSimple;
