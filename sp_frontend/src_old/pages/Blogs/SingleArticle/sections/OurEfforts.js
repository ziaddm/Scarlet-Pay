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

function OurEfforts() {
  const bgImage =
    "https://images.unsplash.com/photo-1585975438803-350463f9c9b6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80";

  return (
    <SPBox component="section">
      <SPBox
        mx={-2}
        minHeight="18.75rem"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      />
      <Container>
        <Grid container item flexDirection="column" xs={12} lg={8} mt={12} mx="auto">
          <SPTypography
            component="h6"
            variant="button"
            textTransform="uppercase"
            fontWeight="bold"
            opacity={0.7}
            mb={1}
          >
            Our effort
          </SPTypography>
          <SPTypography variant="h3" mb={3}>
            The powerfull design system
          </SPTypography>
          <SPTypography variant="body2">
            The way to survive in modern society is to be an ascetic. It is to retreat from society.
            There&apos;s too much society everywhere you go…The only solution is turn it off.
          </SPTypography>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default OurEfforts;
