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
import SPTypography from "components/SPTypography";

function Footer() {
  return (
    <SPBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <SPTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              Material Design
            </SPTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <SPBox component="li">
                <SPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </SPTypography>
              </SPBox>
              <SPBox component="li">
                <SPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </SPTypography>
              </SPBox>
            </Stack>
            <SPTypography variant="button" opacity={0.8}>
              Copyright © <script>document.write(new Date().getFullYear())</script>2021 Material
              Design by Scarlet Pay Team.
            </SPTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <SPTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              The reward for getting on the stage is fame. The price of fame is you can&apos;t get
              off the stage.
            </SPTypography>
            <SPTypography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-dribbble" />
            </SPTypography>
            <SPTypography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-twitter" />
            </SPTypography>
            <SPTypography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-pinterest" />
            </SPTypography>
            <SPTypography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
            >
              <i className="fab fa-github" />
            </SPTypography>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Footer;
