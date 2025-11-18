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
import SPBadge from "components/SPBadge";

function BadgesGradient() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <SPBadge badgeContent="primary" color="primary" container />
            <SPBadge badgeContent="secondary" color="secondary" container />
            <SPBadge badgeContent="success" color="success" container />
            <SPBadge badgeContent="error" color="error" container />
            <SPBadge badgeContent="warning" color="warning" container />
            <SPBadge badgeContent="info" color="info" container />
            <SPBadge badgeContent="light" color="light" container />
            <SPBadge badgeContent="dark" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default BadgesGradient;
