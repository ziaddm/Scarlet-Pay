const dismissingAlertCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAlert from "components/SPAlert";

function DismissingAlert() {
  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <SPAlert color="warning" dismissible>
              <strong>Holy molly!</strong>&nbsp; You should check in on some of those fields below.
            </SPAlert>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default DismissingAlert;`;

export default dismissingAlertCode;
