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
import SPTypography from "components/SPTypography";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function LogoAreaOne() {
  return (
    <SPBox py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <SPTypography variant="h6" opacity={0.5}>
            More than 50+ brands trust Material
          </SPTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SPBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.9} />
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default LogoAreaOne;
