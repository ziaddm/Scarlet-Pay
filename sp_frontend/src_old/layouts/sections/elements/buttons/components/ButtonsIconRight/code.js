const buttonsIconRightCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";

function ButtonsIconRight() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <SPButton color="info" size="small">
              small
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </SPButton>
            <SPButton color="info">
              default
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </SPButton>
            <SPButton color="info" size="large">
              large
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </SPButton>
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default ButtonsIconRight;`;

export default buttonsIconRightCode;
