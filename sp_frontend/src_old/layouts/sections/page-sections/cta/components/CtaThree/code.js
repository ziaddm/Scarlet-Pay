/* eslint-disable no-template-curly-in-string */
const bgImage =
  "`${linearGradient(rgba(gradients.dark.main, 0.8), rgba(gradients.dark.state, 0.8))}, url(${bgImage})`";

const statsTwoCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import bgImage from "assets/images/bg3.jpg";

function CtaThree() {
  return (
    <SPBox
      display="flex"
      my={24}
      py={6}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => ${bgImage},
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8} lg={5}>
            <SPTypography variant="h5" color="white" fontWeight="bold">
              For being a bright color. For standing out. But the time is now to be okay to be the
              greatest you.
            </SPTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
            <SPBox width="12rem" ml="auto">
              <SPButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                start now
              </SPButton>
            </SPBox>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default CtaThree;`;

export default statsTwoCode;
