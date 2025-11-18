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
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import laptop from "assets/images/macbook-2.png";

function Banner() {
  return (
    <SPBox
      variant="gradient"
      bgColor="warning"
      position="relative"
      borderRadius="xl"
      mx={{ xs: 2, xl: 3, xxl: 16 }}
      mt={-32}
      py={13}
      px={3}
      sx={{ overflow: "hidden" }}
    >
      <SPBox
        component="img"
        src={bgPattern}
        alt="pattern-lines"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        opacity={0.6}
      />
      <Container sx={{ position: "relative" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={7} lg={5} py={{ xs: 0, sm: 6 }} mr="auto" position="relative">
            <SPTypography variant="h2" color="white" mb={1}>
              Start building your awesome application
            </SPTypography>
            <SPTypography variant="body1" color="white" mb={6}>
              Elegance is the end result of hard work, not the starting point. Strive to make your
              work so invisible that the reader thinks they could have written what you published.
              Trusted by 5.000+ clients from all around the world.
            </SPTypography>
            <SPButton variant="gradient" color="dark">
              Start now
            </SPButton>
            <SPButton variant="text" color="white" sx={{ ml: 1 }}>
              Read more
            </SPButton>
          </Grid>
          <Grid item xs={12} position="absolute" left="50%" mr={-32} width="75%">
            <SPBox
              component="img"
              src={laptop}
              alt="macbook"
              width="100%"
              display={{ xs: "none", md: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Banner;
