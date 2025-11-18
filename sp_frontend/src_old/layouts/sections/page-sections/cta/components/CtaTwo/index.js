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
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPSocialButton from "components/SPSocialButton";

function CtaTwo() {
  return (
    <SPBox component="section" mt={6} py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6} mb={{ xs: 3, lg: 0 }}>
            <SPTypography variant="h4" mb={0.5}>
              Thank you for your support!
            </SPTypography>
            <SPTypography variant="body1" color="text">
              Delivering the best products
            </SPTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              flexWrap="wrap"
              justifyContent={{ xs: "flex-start", lg: "flex-end" }}
            >
              <SPSocialButton color="twitter">
                <i className="fab fa-twitter" />
                &nbsp; twitter
              </SPSocialButton>
              <SPSocialButton color="facebook">
                <i className="fab fa-facebook" />
                &nbsp; facebook
              </SPSocialButton>
              <SPSocialButton color="tumblr">
                <i className="fab fa-tumblr" />
                &nbsp; tumblr
              </SPSocialButton>
              <SPSocialButton color="dribbble">
                <i className="fab fa-dribbble" />
                &nbsp; dribbble
              </SPSocialButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default CtaTwo;
