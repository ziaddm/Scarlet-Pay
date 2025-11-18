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
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Authentication pages components
import BasicLayout from "pages/Authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <SPBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <SPTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </SPTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <SPTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </SPTypography>
            </Grid>
            <Grid item xs={2}>
              <SPTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </SPTypography>
            </Grid>
            <Grid item xs={2}>
              <SPTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </SPTypography>
            </Grid>
          </Grid>
        </SPBox>
        <SPBox pt={4} pb={3} px={3}>
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
    </BasicLayout>
  );
}

export default SignInBasic;
