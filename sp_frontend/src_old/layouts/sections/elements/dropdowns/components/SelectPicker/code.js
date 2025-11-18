const selectPickerCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPInput from "components/SPInput";

function SelectPicker() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Autocomplete
            defaultValue="Washington"
            options={["Brazil", "Bucharest", "London", "Washington"]}
            sx={{ width: 300 }}
            renderInput={(params) => <SPInput {...params} variant="standard" />}
          />
        </Grid>
      </Container>
    </SPBox>
  );
}

export default SelectPicker;`;

export default selectPickerCode;
