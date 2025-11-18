/* eslint-disable no-template-curly-in-string */
const bgImage =
  "`${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`";

const headerOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderOne() {
  return (
    <SPBox component="header" position="relative">
      <SPBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <SPTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </SPTypography>
            <SPButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <SPBox component="i" color="white" className="fas fa-bars" />
            </SPButton>
            <SPBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </SPTypography>
              </SPBox>
            </SPBox>
            <SPBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <SPBox component="i" color="white" className="fab fa-twitter" />
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <SPBox component="i" color="white" className="fab fa-facebook" />
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <SPBox component="i" color="white" className="fab fa-instagram" />
                </SPTypography>
              </SPBox>
            </SPBox>
          </Grid>
        </Container>
      </SPBox>
      <SPBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => ${bgImage},
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <SPTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Scarlet Pay
            </SPTypography>
            <SPTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </SPTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <SPButton color="white">Get Started</SPButton>
              <SPButton variant="text" color="white">
                Read more
              </SPButton>
            </Stack>
          </Grid>
        </Container>
      </SPBox>
    </SPBox>
  );
}

export default HeaderOne;`;

export default headerOneCode;
