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

// @mui material components
import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Authentication layout components
import CoverLayout from "pages/Authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <SPBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <SPTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </SPTypography>
          <SPTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </SPTypography>
        </SPBox>
        <SPBox pt={4} pb={3} px={3}>
          <SPBox component="form" role="form">
            <SPBox mb={4}>
              <SPInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="john@email.com"
              />
            </SPBox>
            <SPBox mt={6} mb={1}>
              <SPButton variant="gradient" color="info" fullWidth>
                reset
              </SPButton>
            </SPBox>
          </SPBox>
        </SPBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
