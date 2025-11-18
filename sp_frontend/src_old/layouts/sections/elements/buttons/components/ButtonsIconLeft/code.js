const buttonsIconLeftCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";

function ButtonsIconLeft() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <SPButton color="info" size="small">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              small
            </SPButton>
            <SPButton color="info">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              default
            </SPButton>
            <SPButton color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              large
            </SPButton>
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ButtonsIconLeft;`;

export default buttonsIconLeftCode;
