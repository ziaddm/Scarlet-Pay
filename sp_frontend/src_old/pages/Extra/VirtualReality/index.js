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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPAvatar from "components/SPAvatar";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// VirtualReality page components
import TodoList from "pages/Extra/VirtualReality/components/TodoList";
import TodoCard from "pages/Extra/VirtualReality/components/TodoCard";
import Emails from "pages/Extra/VirtualReality/components/Emails";
import MediaPlayer from "pages/Extra/VirtualReality/components/MediaPlayer";
import Messages from "pages/Extra/VirtualReality/components/Messages";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/vr-bg.jpg";
import team1 from "assets/images/team-1.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function VirtualReality() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
          label: "buy now",
          color: "dark",
        }}
      />
      <SPBox
        component="header"
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" pt={{ xs: 16, lg: 6 }}>
            <Grid item xs={12} md={1}>
              <SPBox
                display="flex"
                flexDirection={{ xs: "row", md: "column" }}
                justifyContent="center"
                alignItems="center"
                px={2}
                mb={{ xs: 8, md: 0 }}
              >
                <Tooltip title="My Profile" placement="right">
                  <SPAvatar
                    src={team1}
                    alt="Profile Picture"
                    size="lg"
                    variant="rounded"
                    sx={{ cursor: "pointer" }}
                  />
                </Tooltip>

                <SPBox my={{ xs: 0, md: 2 }} mx={{ xs: 2, md: 0 }}>
                  <Tooltip title="Home" placement="right">
                    <SPButton
                      iconOnly
                      size="large"
                      sx={({ palette: { black }, borders: { borderRadius } }) => ({
                        color: black.main,
                        borderRadius: borderRadius.lg,
                      })}
                    >
                      <Icon color="inherit">home</Icon>
                    </SPButton>
                  </Tooltip>
                </SPBox>
                <SPBox mb={{ xs: 0, md: 2 }} mr={{ xs: 2, md: 0 }}>
                  <Tooltip title="Search" placement="right">
                    <SPButton
                      iconOnly
                      size="large"
                      sx={({ palette: { black }, borders: { borderRadius } }) => ({
                        color: black.main,
                        borderRadius: borderRadius.lg,
                      })}
                    >
                      <Icon color="inherit">search</Icon>
                    </SPButton>
                  </Tooltip>
                </SPBox>
                <Tooltip title="Minimize" placement="right">
                  <SPButton
                    iconOnly
                    size="large"
                    sx={({ palette: { black }, borders: { borderRadius } }) => ({
                      color: black.main,
                      borderRadius: borderRadius.lg,
                    })}
                  >
                    <Icon color="inherit">more_horiz</Icon>
                  </SPButton>
                </Tooltip>
              </SPBox>
            </Grid>
            <Grid item xs={12} lg={11} xl={8}>
              <SPBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "center", md: "flex-start" }}
                ml={{ xs: 1, md: 4 }}
                mt={-1}
              >
                <SPBox>
                  <SPTypography
                    variant="h1"
                    sx={{
                      fontSize: ({ typography: { d1, h2 } }) => ({
                        xs: h2.fontSize,
                        lg: d1.fontSize,
                      }),
                    }}
                    color="white"
                    lineHeight={1}
                  >
                    28&deg;C
                  </SPTypography>
                  <SPTypography
                    variant="h6"
                    color="white"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    cloudy
                  </SPTypography>
                </SPBox>
                <SPBox component="img" src={sunCloud} width="30%" />
              </SPBox>
              <SPBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TodoList />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SPBox mb={3}>
                      <TodoCard />
                    </SPBox>
                    <Emails />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SPBox mb={3}>
                      <MediaPlayer />
                    </SPBox>
                    <Messages />
                  </Grid>
                </Grid>
              </SPBox>
            </Grid>
          </Grid>
        </Container>
      </SPBox>
      <SPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </SPBox>
    </>
  );
}

export default VirtualReality;
