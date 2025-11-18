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
import Tooltip from "@mui/material/Tooltip";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";

function Tooltips() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Tooltip on top" placement="top">
              <SPButton variant="gradient" color="info">
                tooltip on top
              </SPButton>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <SPButton variant="gradient" color="info">
                tooltip on right
              </SPButton>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <SPButton variant="gradient" color="info">
                tooltip on bottom
              </SPButton>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <SPButton variant="gradient" color="info">
                tooltip on left
              </SPButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Tooltips;
