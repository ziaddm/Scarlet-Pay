const typographyCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function Typography() {
  return (
    <SPBox component="section" py={8}>
      <Container>
        <SPTypography variant="h2" mb={6}>
          Typography - Font Family Roboto
        </SPTypography>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 1
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h1">H1 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 2
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h2">H2 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 3
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h3">H3 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 4
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h4">H4 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 5
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h5">H5 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 6
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="h6">H6 Scarlet Pay</SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Lead Text
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="body1" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Paragraph
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <SPTypography variant="body2" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Small
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <SPTypography variant="button" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </SPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <SPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Tiny
            </SPTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <SPTypography variant="caption" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </SPTypography>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Typography;`;

export default typographyCode;
