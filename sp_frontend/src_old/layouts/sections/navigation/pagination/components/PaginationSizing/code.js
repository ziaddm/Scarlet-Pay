const paginationSizingCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPPagination from "components/SPPagination";

function PaginationSizing() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container spacing={3} alignItems="center" mx="auto" height="100%">
        <Grid item xs={12}>
          <SPPagination size="small" placement="center">
            <SPPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </SPPagination>
            <SPPagination item active>
              1
            </SPPagination>
            <SPPagination item>2</SPPagination>
            <SPPagination item>3</SPPagination>
            <SPPagination item>4</SPPagination>
            <SPPagination item>5</SPPagination>
            <SPPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </SPPagination>
          </SPPagination>
        </Grid>
        <Grid item xs={12}>
          <SPPagination placement="center">
            <SPPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </SPPagination>
            <SPPagination item active>
              1
            </SPPagination>
            <SPPagination item>2</SPPagination>
            <SPPagination item>3</SPPagination>
            <SPPagination item>4</SPPagination>
            <SPPagination item>5</SPPagination>
            <SPPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </SPPagination>
          </SPPagination>
        </Grid>
        <Grid item xs={12}>
          <SPPagination size="large" placement="center">
            <SPPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </SPPagination>
            <SPPagination item active>
              1
            </SPPagination>
            <SPPagination item>2</SPPagination>
            <SPPagination item>3</SPPagination>
            <SPPagination item>4</SPPagination>
            <SPPagination item>5</SPPagination>
            <SPPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </SPPagination>
          </SPPagination>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaginationSizing;`;

export default paginationSizingCode;
