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

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { white, gradients } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  // backgroundImage value
  const backgroundImageValue = gradients[color]
    ? linearGradient(gradients[color].main, gradients[color].state)
    : linearGradient(gradients.info.main, gradients.info.state);

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});
