const simpleAlertsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAlert from "components/SPAlert";

function SimpleAlerts() {
  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <SPAlert color="primary">A simple primary alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="secondary">A simple secondary alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="success">A simple success alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="error">A simple error alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="warning">A simple warning alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="info">A simple info alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="light">A simple light alert—check it out!</SPAlert>
          </Grid>
          <Grid item xs={12}>
            <SPAlert color="dark">A simple dark alert—check it out!</SPAlert>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default SimpleAlerts;`;

export default simpleAlertsCode;
