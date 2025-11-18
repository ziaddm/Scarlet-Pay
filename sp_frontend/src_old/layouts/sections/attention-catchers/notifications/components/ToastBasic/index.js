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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPSnackbar from "components/SPSnackbar";

function ToastBasic() {
  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);

  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <SPButton variant="gradient" color="dark" onClick={toggleSnackbar}>
            Show Snackbar
          </SPButton>
        </Grid>
        <SPSnackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          color="dark"
          icon="notifications"
          title="Material Design"
          content="Hello, world! This is a notification message"
          dateTime="11 mins ago"
          open={show}
          close={toggleSnackbar}
        />
      </Container>
    </SPBox>
  );
}

export default ToastBasic;
