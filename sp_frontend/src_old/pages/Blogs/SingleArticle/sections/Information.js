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

function Information() {
  return (
    <SPBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <SPTypography
            component="h6"
            variant="button"
            opacity={0.7}
            textTransform="uppercase"
            fontWeight="bold"
          >
            The Idea
          </SPTypography>
          <SPTypography variant="h3" mb={3}>
            Create a design system that can be used in any product available
          </SPTypography>
          <SPTypography variant="body2">
            This is the paragraph where you can write more details about your product. Keep you user
            engaged by providing meaningful information. Remember that by this time, the user is
            curious, otherwise he wouldn&apos;t scroll to get here. Add a button if you want the
            user to see more. We are here to make life better.
            <br /> <br />
            And now I look and look around and there&aposl;s so many Kanyes I&apos;ve been trying to
            figure out the bed design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            <br /> <br />
            The way to survive in modern society is to be an ascetic. It is to retreat from society.
            There&aposl;s too much society everywhere you go…The only solution is turn it off.
          </SPTypography>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Information;
