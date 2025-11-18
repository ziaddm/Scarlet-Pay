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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function TodoList() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <SPBox p={3}>
        <SPBox display="flex" lineHeight={1}>
          <SPBox mr={2}>
            <SPTypography variant="h6" fontWeight="medium">
              08:00
            </SPTypography>
          </SPBox>
          <SPBox>
            <SPTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </SPTypography>
            <SPTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </SPTypography>
          </SPBox>
        </SPBox>
        <Divider />
        <SPBox display="flex" lineHeight={0}>
          <SPBox mr={2}>
            <SPTypography variant="h6" fontWeight="medium">
              09:30
            </SPTypography>
          </SPBox>
          <SPBox>
            <SPTypography variant="h6" fontWeight="medium">
              Gym
            </SPTypography>
            <SPTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </SPTypography>
          </SPBox>
        </SPBox>
        <Divider />
        <SPBox display="flex" lineHeight={1}>
          <SPBox mr={2}>
            <SPTypography variant="h6" fontWeight="medium">
              11:00
            </SPTypography>
          </SPBox>
          <SPBox>
            <SPTypography variant="h6" fontWeight="medium">
              Design Review
            </SPTypography>
            <SPTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </SPTypography>
          </SPBox>
        </SPBox>
      </SPBox>
      <SPBox bgColor="grey-100" mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <SPBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </SPBox>
        </Tooltip>
      </SPBox>
    </Card>
  );
}

export default TodoList;
