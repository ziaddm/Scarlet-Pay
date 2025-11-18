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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function ContactUsOne() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={7}
          mx="auto"
          mb={{ xs: 0, md: 6 }}
          textAlign="center"
        >
          <SPTypography variant="h3" mb={1}>
            Contact Us
          </SPTypography>
          <SPTypography variant="body2" color="text">
            For further questions, including partnership opportunities, please email
            hello@creative-tim.com or contact using our contact form.
          </SPTypography>
        </Grid>
        <Grid container item xs={12} lg={8} sx={{ mx: "auto" }}>
          <SPBox width="100%" component="form" method="post" autoComplete="off">
            <SPBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <SPInput label="Full Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SPInput type="email" label="Email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <SPInput label="What can we help you?" multiline fullWidth rows={6} />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={6}>
                <SPButton type="submit" variant="gradient" color="info">
                  Send Message
                </SPButton>
              </Grid>
            </SPBox>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ContactUsOne;
