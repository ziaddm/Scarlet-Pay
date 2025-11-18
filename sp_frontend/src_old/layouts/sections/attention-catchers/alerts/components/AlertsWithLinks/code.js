const alertsWithLinksCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAlert from "components/SPAlert";
import SPTypography from "components/SPTypography";

function AlertsWithLinks() {
  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <SPAlert color="primary">
              A simple primary alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="secondary">
              A simple secondary alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="success">
              A simple success alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="error">
              A simple error alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="warning">
              A simple warning alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="info">
              A simple info alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="light">
              A simple light alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="dark">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="dark">
              A simple dark alert with an&nbsp;
              <SPTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </SPTypography>
              . Give it a click if you like.
            </SPAlert>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default AlertsWithLinks;`;

export default alertsWithLinksCode;
