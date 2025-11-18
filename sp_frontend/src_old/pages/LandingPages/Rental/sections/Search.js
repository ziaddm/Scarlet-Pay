/*
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPInput from "components/SPInput";
// import SPDatePicker from "components/SPDatePicker";
import SPButton from "components/SPButton";

function Search() {
  return (
    <SPBox component="section">
      <Container>
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ pt: 2, pb: 3, px: 2, mx: "auto" }}>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <SPTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              Leave From
            </SPTypography>
            <Autocomplete
              defaultValue="Bucharest"
              options={["Brazil", "Bucharest", "London", "USA"]}
              renderInput={(params) => <SPInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <SPTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              To
            </SPTypography>
            <Autocomplete
              defaultValue="Italy"
              options={["Denmark", "Italy", "Poland", "Spain"]}
              renderInput={(params) => <SPInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <SPTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              Depart
            </SPTypography>
            <SPInput type="date" variant="standard" placeholder="Please select date" fullWidth />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 4 }}>
            <SPButton variant="gradient" color="info" fullWidth>
              search
            </SPButton>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Search;
