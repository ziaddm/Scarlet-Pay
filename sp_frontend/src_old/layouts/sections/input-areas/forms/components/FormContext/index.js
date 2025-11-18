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
import Switch from "@mui/material/Switch";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";

function FormContext() {
  return (
    <SPBox
      component="section"
      display="grid"
      position="relative"
      minHeight="90vh"
      borderRadius="xl"
      mr={{ xs: 0, lg: -2 }}
      mb={{ xs: 0, lg: -2 }}
      sx={{ overflow: { xs: "hidden", lg: "visible" }, placeItems: "center" }}
    >
      <SPBox
        component="img"
        src="https://images.unsplash.com/photo-1539803442075-48618f39bb3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=963&amp;q=80"
        alt="lake house"
        width={{ xs: "100%", lg: "50%" }}
        height={{ xs: "100%", lg: "100%" }}
        position="absolute"
        right={0}
        bottom={{ xs: "-25%", lg: "unset" }}
        top={{ xs: 0, lg: "unset" }}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.lg }),
        }}
      />
      <Container>
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ mt: { xs: 0, lg: 12 } }}>
          <Grid item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <SPBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              shadow="lg"
              borderRadius="xl"
              sx={{
                backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                  rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                px: { xs: 3, sm: 6 },
                py: { xs: 3, sm: 8 },
                mb: { xs: 0, lg: 8 },
                mt: { xs: 0, lg: -6 },
              }}
            >
              <SPTypography variant="h3" textAlign="center" mb={2}>
                Contact us
              </SPTypography>
              <SPBox component="form" method="post" autoComplete="off">
                <SPBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={6} lg={12} xl={6}>
                      <SPInput
                        variant="standard"
                        placeholder="eg. Michael"
                        label="First Name"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={12} xl={6}>
                      <SPInput
                        variant="standard"
                        placeholder="eg. Prior"
                        label="Last Name"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <SPInput
                        variant="standard"
                        type="email"
                        placeholder="eg. material@design.com"
                        label="Email Address"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <SPInput
                        variant="standard"
                        label="Your Message"
                        rows={4}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sx={{ mb: 3, ml: -1 }}>
                      <Switch id="flexSwitchCheckDefault" defaultChecked />
                      <SPTypography
                        component="label"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        htmlFor="flexSwitchCheckDefault"
                        sx={{ userSelect: "none", cursor: "pointer" }}
                      >
                        I agree to the{" "}
                        <SPTypography component="a" href="#" variant="button" fontWeight="regular">
                          <u>Terms and Conditions</u>
                        </SPTypography>
                        .
                      </SPTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <SPButton type="submit" variant="gradient" color="dark" fullWidth>
                        Send Message
                      </SPButton>
                    </Grid>
                  </Grid>
                </SPBox>
              </SPBox>
            </SPBox>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default FormContext;
