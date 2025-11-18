const badgesSimpleCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPBadge from "components/SPBadge";

function BadgesSimple() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <SPBadge badgeContent="primary" variant="contained" color="primary" container />
            <SPBadge badgeContent="secondary" variant="contained" color="secondary" container />
            <SPBadge badgeContent="success" variant="contained" color="success" container />
            <SPBadge badgeContent="error" variant="contained" color="error" container />
            <SPBadge badgeContent="warning" variant="contained" color="warning" container />
            <SPBadge badgeContent="info" variant="contained" color="info" container />
            <SPBadge badgeContent="light" variant="contained" color="light" container />
            <SPBadge badgeContent="dark" variant="contained" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default BadgesSimple;`;

export default badgesSimpleCode;
