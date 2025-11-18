/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.scarlet-pay.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.scarlet-pay.com)

Coded by www.scarlet-pay.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";

// Custom styles for the SPAlert
import SPAlertRoot from "components/base/SPAlert/SPAlertRoot";
import SPAlertCloseIcon from "components/base/SPAlert/SPAlertCloseIcon";

function SPAlert({ color = "info", dismissible = false, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <SPAlertRoot ownerState={{ color }} {...rest}>
        <SPBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </SPBox>
        {dismissible ? (
          <SPAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</SPAlertCloseIcon>
        ) : null}
      </SPAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Typechecking props of the SPAlert
SPAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SPAlert;
