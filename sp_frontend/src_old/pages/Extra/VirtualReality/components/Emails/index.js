/**
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
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function Emails() {
  return (
    <Card>
      <SPBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <SPTypography variant="body2" color="text">
          Emails (21)
        </SPTypography>
        <Tooltip title="Check your emails" placement="top">
          <SPBox component="a" href="#">
            <SPTypography variant="body2" fontWeight="regular">
              Check
            </SPTypography>
          </SPBox>
        </Tooltip>
      </SPBox>
    </Card>
  );
}

export default Emails;
