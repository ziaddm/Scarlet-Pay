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

// Scarlet Pay 2 PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Scarlet Pay 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;
const { size, fontWeightBold } = typography;

export default {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};
