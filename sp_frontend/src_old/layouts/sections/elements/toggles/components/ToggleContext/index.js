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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function ToggleContext() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <SPBox component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <SPBox display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />
            <SPBox ml={2} lineHeight={0.5}>
              <SPTypography display="block" variant="button" fontWeight="bold">
                Remember me
              </SPTypography>
              <SPTypography variant="caption" color="text" fontWeight="regular">
                Be sure that you will always be logged in.
              </SPTypography>
            </SPBox>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ToggleContext;
