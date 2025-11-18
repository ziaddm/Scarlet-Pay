const inputDynamicCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";

function InputDynamic() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <SPInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </SPBox>
  );
}

export default InputDynamic;`;

export default inputDynamicCode;
