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
import SPButton from "components/SPButton";

function ButtonsGradient() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <SPButton variant="gradient" color="primary">
              primary
            </SPButton>
            <SPButton variant="gradient" color="secondary">
              secondary
            </SPButton>
            <SPButton variant="gradient" color="info">
              info
            </SPButton>
            <SPButton variant="gradient" color="success">
              success
            </SPButton>
            <SPButton variant="gradient" color="warning">
              warning
            </SPButton>
            <SPButton variant="gradient" color="error">
              error
            </SPButton>
            <SPButton variant="gradient" color="light">
              light
            </SPButton>
            <SPButton variant="gradient" color="dark">
              dark
            </SPButton>
            <SPButton variant="gradient" color="white">
              White
            </SPButton>
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ButtonsGradient;
