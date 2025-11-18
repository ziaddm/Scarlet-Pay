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
import Divider from "@mui/material/Divider";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAlert from "components/SPAlert";
import SPTypography from "components/SPTypography";

function AlertWithContent() {
  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <SPAlert color="success">
              <SPBox>
                <SPTypography variant="h4" color="white" mb={1}>
                  Good job!
                </SPTypography>
                <SPTypography variant="body2" color="white">
                  That&apos;s the main thing people are controlled by! Thoughts- their perception of
                  themselves! They&apos;re slowed down by their perception of themselves. If
                  you&apos;re taught you can&apos;t do anything, you won&apos;t do anything. I was
                  taught I could do everything.
                </SPTypography>
                <Divider light />
                <SPTypography variant="body2" color="white">
                  What else could rust the heart more over time? Blackgold.
                </SPTypography>
              </SPBox>
            </SPAlert>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default AlertWithContent;
