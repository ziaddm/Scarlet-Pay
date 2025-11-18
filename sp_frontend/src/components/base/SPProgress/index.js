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

// Scarlet Pay 2 PRO React components
import SPTypography from "components/base/SPTypography";

// Custom styles for SPProgress
import SPProgressRoot from "components/base/SPProgress/SPProgressRoot";

const SPProgress = forwardRef(
  ({ variant = "contained", color = "info", value = 0, label = false, ...rest }, ref) => (
    <>
      {label && (
        <SPTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </SPTypography>
      )}
      <SPProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

// Typechecking props for the SPProgress
SPProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default SPProgress;
