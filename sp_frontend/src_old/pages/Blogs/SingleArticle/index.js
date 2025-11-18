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

import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Blogs/SingleArticle/sections/Information";
import Steps from "pages/Blogs/SingleArticle/sections/Steps";
import OurEfforts from "pages/Blogs/SingleArticle/sections/OurEfforts";
import Features from "pages/Blogs/SingleArticle/sections/Features";
import Posts from "pages/Blogs/SingleArticle/sections/Posts";
import Support from "pages/Blogs/SingleArticle/sections/Support";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg5.jpg";

function SingleArticle() {
  const headerRef = useRef(null);

  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  return (
    <>
      <SPBox bgColor="white" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
            label: "buy now",
            color: "success",
          }}
          transparent
          relative
        />
      </SPBox>
      <SPBox
        ref={headerRef}
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <SPTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Design - News
            </SPTypography>
            <SPTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={2}
              mr={{ xs: 0, sm: 6 }}
              pr={{ xs: 0, sm: 6 }}
            >
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </SPTypography>
            <SPTypography variant="h5" color="white" mt={2} mb={1}>
              Connect with us on
            </SPTypography>
            <SPBox display="flex" alignItems="center">
              <SPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </SPTypography>
              <SPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </SPTypography>
              <SPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </SPTypography>
              <SPTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </SPTypography>
            </SPBox>
          </Grid>
        </Container>
      </SPBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Steps />
        <OurEfforts />
        <Features />
        <Posts />
        <Support />
      </Card>
      <SPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </SPBox>
    </>
  );
}

export default SingleArticle;
