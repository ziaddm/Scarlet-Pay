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
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAvatar from "components/SPAvatar";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <SPBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <SPBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <SPAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </SPBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <SPBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <SPTypography variant="h3">Michael Roven</SPTypography>
                <SPButton variant="outlined" color="info" size="small">
                  Follow
                </SPButton>
              </SPBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <SPTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </SPTypography>
                  <SPTypography component="span" variant="body2" color="text">
                    Posts
                  </SPTypography>
                </Grid>
                <Grid item>
                  <SPTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </SPTypography>
                  <SPTypography component="span" variant="body2" color="text">
                    Followers
                  </SPTypography>
                </Grid>
                <Grid item>
                  <SPTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </SPTypography>
                  <SPTypography component="span" variant="body2" color="text">
                    Following
                  </SPTypography>
                </Grid>
              </Grid>
              <SPTypography variant="body1" fontWeight="light" color="text">
                Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an
                illusion of equality). Choose the path that leaves you more equanimous. <br />
                <SPTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </SPTypography>
              </SPTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Profile;
