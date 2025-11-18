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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPButton from "components/SPButton";

function MediaPlayer() {
  const bgImage =
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80";

  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <SPBox p={3} position="relative" lineHeight={0}>
        <SPTypography variant="h5" color="white" fontWeight="medium">
          Some Kind Of Blues
        </SPTypography>
        <SPTypography variant="button" color="white" fontWeight="regular">
          Deftones
        </SPTypography>
        <SPBox display="flex" mt={6} pt={1}>
          <SPBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <SPButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_previous</Icon>
              </SPButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <SPButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>play_arrow</Icon>
              </SPButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <SPButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_next</Icon>
              </SPButton>
            </Tooltip>
          </SPBox>
        </SPBox>
      </SPBox>
    </Card>
  );
}

export default MediaPlayer;
