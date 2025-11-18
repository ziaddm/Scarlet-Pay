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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function TodoCard() {
  return (
    <SPBox bgColor="dark" variant="gradient" borderRadius="xl" shadow="lg">
      <SPBox p={3}>
        <SPBox display="flex" justifyContent="space-between">
          <SPTypography variant="h5" color="white">
            To Do
          </SPTypography>
          <SPBox textAlign="center" lineHeight={1}>
            <SPTypography variant="h1" color="white" fontWeight="bold">
              7
            </SPTypography>
            <SPTypography variant="button" color="white" fontWeight="regular">
              items
            </SPTypography>
          </SPBox>
        </SPBox>
        <SPTypography variant="body2" color="white" fontWeight="regular">
          Shopping
        </SPTypography>
        <SPTypography variant="body2" color="white" fontWeight="regular">
          Meeting
        </SPTypography>
      </SPBox>
      <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
        <SPBox textAlign="center" color="white" py={0.5} lineHeight={0}>
          <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
            keyboard_arrow_down
          </Icon>
        </SPBox>
      </Tooltip>
    </SPBox>
  );
}

export default TodoCard;
