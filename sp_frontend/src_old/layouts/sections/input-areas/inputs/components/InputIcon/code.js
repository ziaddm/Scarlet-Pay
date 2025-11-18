const inputIconCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";

function InputIcon() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <SPInput
            variant="standard"
            placeholder="Search"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Container>
    </SPBox>
  );
}

export default InputIcon;`;

export default inputIconCode;
