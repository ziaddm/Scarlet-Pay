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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for SPInput
import SPInputRoot from "components/base/SPInput/SPInputRoot";

const SPInput = forwardRef(({ error = false, success = false, disabled = false, ...rest }, ref) => (
  <SPInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Typechecking props for the SPInput
SPInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SPInput;
