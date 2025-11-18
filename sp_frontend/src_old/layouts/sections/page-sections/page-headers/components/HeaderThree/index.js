/* eslint-disable no-unused-vars */
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
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function HeaderThree() {
  return (
    <SPBox component="header" position="relative" height="100%">
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
            <SPButton color="default">buy now</SPButton>
          </Grid>
        </Container>
      </SPBox>
      <SPBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
          >
            <SPTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              mb={3}
            >
              Work with an amazing
            </SPTypography>
            <SPTypography variant="body1" color="white" mt={1} mb={{ xs: 3, sm: 8 }} px={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game. If you have the opportunity to play this game.
            </SPTypography>
            <SPTypography variant="h6" color="white" textTransform="uppercase" mb={3}>
              connect with us on:
            </SPTypography>
            <Stack direction="row" spacing={6} mx="auto">
              <SPTypography
                component={Link}
                href="#"
                variant="body2"
                onClick={(e) => e.preventDefault()}
              >
                <SPBox component="i" color="white" className="fab fa-facebook" />
              </SPTypography>
              <SPTypography
                component={Link}
                href="#"
                variant="body2"
                onClick={(e) => e.preventDefault()}
              >
                <SPBox component="i" color="white" className="fab fa-instagram" />
              </SPTypography>
              <SPTypography
                component={Link}
                href="#"
                variant="body2"
                onClick={(e) => e.preventDefault()}
              >
                <SPBox component="i" color="white" className="fab fa-twitter" />
              </SPTypography>
              <SPTypography
                component={Link}
                href="#"
                variant="body2"
                onClick={(e) => e.preventDefault()}
              >
                <SPBox component="i" color="white" className="fab fa-google-plus" />
              </SPTypography>
            </Stack>
          </Grid>
        </Container>
      </SPBox>
    </SPBox>
  );
}

export default HeaderThree;
