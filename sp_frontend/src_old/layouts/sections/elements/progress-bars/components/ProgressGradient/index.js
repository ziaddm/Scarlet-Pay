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

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPProgress from "components/SPProgress";

function ProgressGradient() {
  return (
    <SPBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <SPProgress variant="gradient" color="primary" value={50} />
            <SPProgress variant="gradient" color="secondary" value={50} />
            <SPProgress variant="gradient" color="success" value={50} />
            <SPProgress variant="gradient" color="info" value={50} />
            <SPProgress variant="gradient" color="warning" value={50} />
            <SPProgress variant="gradient" color="error" value={50} />
            <SPProgress variant="gradient" color="dark" value={50} />
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ProgressGradient;
