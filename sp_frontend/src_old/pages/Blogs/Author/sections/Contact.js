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
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function Contact() {
  return (
    <SPBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <SPBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <SPBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <SPBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <SPTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </SPTypography>
                    <SPTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </SPTypography>
                    <SPBox display="flex" p={1}>
                      <SPTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </SPTypography>
                      <SPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </SPTypography>
                    </SPBox>
                    <SPBox display="flex" color="white" p={1}>
                      <SPTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </SPTypography>
                      <SPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </SPTypography>
                    </SPBox>
                    <SPBox display="flex" color="white" p={1}>
                      <SPTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </SPTypography>
                      <SPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </SPTypography>
                    </SPBox>
                    <SPBox mt={3}>
                      <SPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </SPButton>
                      <SPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </SPButton>
                      <SPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </SPButton>
                      <SPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </SPButton>
                    </SPBox>
                  </SPBox>
                </SPBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <SPBox component="form" p={2} method="post">
                  <SPBox px={3} py={{ xs: 2, sm: 6 }}>
                    <SPTypography variant="h2" mb={1}>
                      Say Hi!
                    </SPTypography>
                    <SPTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </SPTypography>
                  </SPBox>
                  <SPBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <SPInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <SPInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="What you love"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <SPInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <SPButton variant="gradient" color="info">
                        Send Message
                      </SPButton>
                    </Grid>
                  </SPBox>
                </SPBox>
              </Grid>
            </Grid>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Contact;
