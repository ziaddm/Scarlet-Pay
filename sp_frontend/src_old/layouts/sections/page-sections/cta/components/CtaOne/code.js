const ctaOneCode = `// @mui material components
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

// Images
import image from "assets/images/examples/blog2.jpg";

function StatsOne() {
  return (
    <SPBox component="section" py={12}>
      <SPBox bgColor="grey-100" py={12} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto">
            <SPTypography variant="h4" mb={1}>
              Be the first to see the news
            </SPTypography>
            <SPTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </SPTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <SPInput label="Email Here" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SPButton variant="gradient" color="warning" sx={{ height: "100%" }}>
                  Subscribe
                </SPButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <SPBox
              component="img"
              src={image}
              alt="image"
              maxWidth="18.75rem"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              mt={-24}
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </SPBox>
    </SPBox>
  );
}

export default StatsOne;`;

export default ctaOneCode;
