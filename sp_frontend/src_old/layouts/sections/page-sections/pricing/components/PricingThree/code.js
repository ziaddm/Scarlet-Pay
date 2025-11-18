const featuresThreeCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function PricingThree() {
  return (
    <SPBox component="section" py={{ xs: 12, lg: 18 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <SPTypography variant="h2" mb={1}>
            Best no-tricks pricing
          </SPTypography>
          <SPTypography variant="body1" color="text">
            If you&apos;re not satisfied, contact us within the first 30 days and we&apos;ll send
            you a full refund.
          </SPTypography>
        </Grid>
        <Grid container item xs={12}>
          <Card sx={{ width: "100%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <SPBox py={3} px={4}>
                  <SPTypography variant="h3" mb={1}>
                    Lifetime Membership
                  </SPTypography>
                  <SPTypography variant="body2" color="text" fontWeight="regular">
                    You have Free Unlimited Updates and Premium Support on each package. You also
                    have 30 days to request a refund.
                  </SPTypography>
                  <Grid container item xs={12} lg={3} sx={{ mt: 6, mb: 1 }}>
                    <SPTypography variant="h6">What&apos;s included</SPTypography>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <SPBox display="flex" py={1} pr={1} lineHeight={0}>
                        <SPTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </SPTypography>
                        <SPTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Private code access
                        </SPTypography>
                      </SPBox>
                      <SPBox display="flex" py={1} pr={1} lineHeight={0}>
                        <SPTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </SPTypography>
                        <SPTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Free entry to all repositories
                        </SPTypography>
                      </SPBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <SPBox display="flex" py={1} pr={1} lineHeight={0}>
                        <SPTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </SPTypography>
                        <SPTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Pro member accounts
                        </SPTypography>
                      </SPBox>
                      <SPBox display="flex" py={1} pr={1} lineHeight={0}>
                        <SPTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </SPTypography>
                        <SPTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Support team full assist
                        </SPTypography>
                      </SPBox>
                    </Grid>
                  </Grid>
                </SPBox>
              </Grid>
              <Grid item xs={12} lg={4}>
                <SPBox p={3} textAlign="center">
                  <SPTypography variant="h6" mt={{ xs: 0, sm: 3 }}>
                    Pay once, own it forever
                  </SPTypography>
                  <SPTypography variant="h1">
                    <SPBox component="small">$</SPBox>399
                  </SPTypography>
                  <SPButton variant="gradient" color="error" size="large" sx={{ my: 2 }}>
                    Get Access
                  </SPButton>
                  <SPTypography display="block" variant="button" color="text" fontWeight="regular">
                    Get a free sample (20MB)
                  </SPTypography>
                </SPBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default PricingThree;`;

export default featuresThreeCode;
