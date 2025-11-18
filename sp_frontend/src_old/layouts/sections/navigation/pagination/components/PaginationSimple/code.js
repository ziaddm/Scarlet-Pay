const paginationSimpleCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPPagination from "components/SPPagination";

function PaginationSimple() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
        <SPPagination>
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
    </Container>
  );
}

export default PaginationSimple;`;

export default paginationSimpleCode;
