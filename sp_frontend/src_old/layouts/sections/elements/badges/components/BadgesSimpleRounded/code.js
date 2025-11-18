const badgesSimpleRoundedCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPBadge from "components/SPBadge";

function BadgesSimpleRounded() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <SPBadge
              badgeContent="primary"
              variant="contained"
              color="primary"
              container
              circular
            />
            <SPBadge
              badgeContent="secondary"
              variant="contained"
              color="secondary"
              container
              circular
            />
            <SPBadge
              badgeContent="success"
              variant="contained"
              color="success"
              container
              circular
            />
            <SPBadge badgeContent="error" variant="contained" color="error" container circular />
            <SPBadge
              badgeContent="warning"
              variant="contained"
              color="warning"
              container
              circular
            />
            <SPBadge badgeContent="info" variant="contained" color="info" container circular />
            <SPBadge badgeContent="light" variant="contained" color="light" container circular />
            <SPBadge badgeContent="dark" variant="contained" color="dark" container circular />
          </Stack>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default BadgesSimpleRounded;`;

export default badgesSimpleRoundedCode;
