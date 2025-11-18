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
import SPAvatar from "components/SPAvatar";

// Images
import team4 from "assets/images/team-4.jpg";

function AvatarSize() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <SPAvatar src={team4} alt="xs" size="xs" />
            <SPAvatar src={team4} alt="sm" size="sm" />
            <SPAvatar src={team4} alt="md" size="md" />
            <SPAvatar src={team4} alt="lg" size="lg" />
            <SPAvatar src={team4} alt="xl" size="xl" />
            <SPAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default AvatarSize;
