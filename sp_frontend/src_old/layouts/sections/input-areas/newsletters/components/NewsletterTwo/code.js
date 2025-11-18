const newsletterTwoCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function NewsletterTwo() {
  return (
    <SPBox component="section" py={20}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={4}
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          mx="auto"
        >
          <SPBox
            width="3rem"
            height="3rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="gradient"
            bgColor="warning"
            color="white"
            borderRadius="lg"
            coloredShadow="warning"
            mx="auto"
            mb={3}
          >
            <Icon>person</Icon>
          </SPBox>
          <SPTypography variant="h3" mb={1}>
            Subscribe
          </SPTypography>
          <SPTypography variant="body2" color="text">
            This is the paragraph where you can write more details about your product.
          </SPTypography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          mt={6}
        >
          <SPBox component="form" method="" action="">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <SPInput label="Your Email..." fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SPButton variant="gradient" color="warning" fullWidth sx={{ height: "100%" }}>
                  Subscribe
                </SPButton>
              </Grid>
            </Grid>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default NewsletterTwo;`;

export default newsletterTwoCode;
