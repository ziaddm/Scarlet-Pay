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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Authentication layout components
import CoverLayout from "pages/Authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
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
            Join us today
          </SPTypography>
          <SPTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </SPTypography>
        </SPBox>
        <SPBox p={3}>
          <SPBox component="form" role="form">
            <SPBox mb={2}>
              <SPInput type="text" label="Name" fullWidth />
            </SPBox>
            <SPBox mb={2}>
              <SPInput type="email" label="Email" fullWidth />
            </SPBox>
            <SPBox mb={2}>
              <SPInput type="password" label="Password" fullWidth />
            </SPBox>
            <SPBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <SPTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SPTypography>
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
            </SPBox>
            <SPBox mt={3} mb={1}>
              <SPButton variant="gradient" color="info" fullWidth>
                sign in
              </SPButton>
            </SPBox>
            <SPBox mt={3} mb={1} textAlign="center">
              <SPTypography variant="button" color="text">
                Already have an account?{" "}
                <SPTypography
                  component={Link}
                  to="/authentication/sign-in/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </SPTypography>
              </SPTypography>
            </SPBox>
          </SPBox>
        </SPBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
