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
import Divider from "@mui/material/Divider";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPBadge from "components/SPBadge";
import SPButton from "components/SPButton";
import SPAvatar from "components/SPAvatar";
import SPTypography from "components/SPTypography";
import SPSocialButton from "components/SPSocialButton";

// Images
import profilePicture from "assets/images/team-2.jpg";

function ContentTwo() {
  return (
    <SPBox component="section" py={20}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8} mx="auto">
            <Grid container justifyContent="space-betweeb" alignItems="center">
              <Grid item xs={12} md={6}>
                <SPBox ml={-1}>
                  <SPBadge badgeContent="Photography" variant="contained" color="info" />
                  <SPBadge badgeContent="Stories" variant="contained" color="info" />
                  <SPBadge badgeContent="Castle" variant="contained" color="info" />
                </SPBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <SPSocialButton color="facebook" size="small">
                    <SPBox className="fab fa-facebook" color="inherit" mr={1} /> 872
                  </SPSocialButton>
                  <SPSocialButton color="twitter" size="small">
                    <SPBox className="fab fa-twitter" color="inherit" mr={1} /> 910
                  </SPSocialButton>
                  <SPSocialButton color="pinterest" size="small">
                    <SPBox className="fab fa-pinterest" color="inherit" mr={1} /> 232
                  </SPSocialButton>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
            <SPBox display="flex" alignItems="center">
              <SPAvatar
                src={profilePicture}
                alt="Alec Thompson"
                size="xxl"
                variant="rounded"
                shadow="xl"
              />
              <SPBox ml={3}>
                <SPTypography variant="h5" mb={1}>
                  Alec Thompson
                </SPTypography>
                <SPTypography variant="button" color="text">
                  I&apos;ve been trying to figure out the bed design for the master bedroom at our
                  Hidden Hills compound...I like good music from Youtube.
                </SPTypography>
              </SPBox>
              <SPBox display={{ xs: "none", lg: "block" }} ml={1}>
                <SPButton color="dark">Follow</SPButton>
              </SPBox>
            </SPBox>
            <SPBox display={{ xs: "block", lg: "none" }} mt={1}>
              <SPButton color="dark">Follow</SPButton>
            </SPBox>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ContentTwo;
