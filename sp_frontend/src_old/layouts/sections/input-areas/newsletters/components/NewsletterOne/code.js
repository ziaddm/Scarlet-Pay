const newsletterOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function NewsletterOne() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5} mr="auto">
            <SPTypography variant="h4" mb={1}>
              Get Tips &amp; Tricks every Week!
            </SPTypography>
            <SPTypography variant="body2" color="text">
              Join our newsletter and get news in your inbox every week!
            </SPTypography>
          </Grid>
          <Grid item xs={12} lg={6} flexDirection="column" justifyContent="center" ml="auto">
            <SPBox component="form" method="" action="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <SPInput label="Your Email..." fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SPButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }}>
                    Subscribe
                  </SPButton>
                </Grid>
              </Grid>
            </SPBox>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default NewsletterOne;`;

export default newsletterOneCode;
