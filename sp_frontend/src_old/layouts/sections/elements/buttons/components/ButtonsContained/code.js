const buttonsContainedCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";

function ButtonsContained() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <SPButton color="primary">primary</SPButton>
            <SPButton color="secondary">secondary</SPButton>
            <SPButton color="info">info</SPButton>
            <SPButton color="success">success</SPButton>
            <SPButton color="warning">warning</SPButton>
            <SPButton color="error">error</SPButton>
            <SPButton color="light">light</SPButton>
            <SPButton color="dark">dark</SPButton>
            <SPButton color="white">White</SPButton>
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ButtonsContained;`;

export default buttonsContainedCode;
