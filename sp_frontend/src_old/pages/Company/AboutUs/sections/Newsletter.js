/* eslint-disable react/jsx-no-duplicate-props */
/*
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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  return (
    <SPBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <SPTypography variant="h4">Be the first to see the news</SPTypography>
            <SPTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </SPTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <SPInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <SPButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </SPButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <SPBox position="relative">
              <SPBox component="img" src={macbook} alt="macbook" width="100%" />
            </SPBox>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Newsletter;
