/* eslint-disable no-template-curly-in-string */
const bgImage =
  "`${linearGradient(rgba(gradients.info.main, 0.5), rgba(gradients.info.state, 0.5))}, url(${bgImage})`";

const headerTwoCode = `import { useEffect, useRef } from "react";

// typed-js
import Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function HeaderTwo() {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["web design", "web development", "mobile development"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

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
          <Grid
            container
            item
            xs={12}
            lg={8}
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
            >
              Our company mission is to lead the <span ref={typedJSRef} />
            </SPTypography>
            <SPTypography variant="body1" color="white" mt={1} mb={6} px={{ xs: 3, lg: 6 }}>
              The time is now for it to be okay to be great. People in this world shun people for
              being great. For being a bright color.
            </SPTypography>
            <SPButton color="white">contact us</SPButton>
          </Grid>
        </Container>
      </SPBox>
    </SPBox>
  );
}

export default HeaderTwo;`;

export default headerTwoCode;
