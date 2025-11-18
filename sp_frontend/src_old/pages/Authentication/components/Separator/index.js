/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-2-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function Separator() {
  const separatorStyles = {
    content: '""',
    display: "inline-block",
    width: "30%",
    height: "1px",
    position: "relative",
    verticalAlign: "middle",
  };

  return (
    <SPBox my={3} position="relative" textAlign="center">
      <SPTypography
        variant="button"
        fontWeight="bold"
        color="secondary"
        px={2}
        sx={{
          "&::before": {
            ...separatorStyles,
            right: "0.5em",
            marginLeft: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, transparent, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )})`,
          },
          "&::after": {
            ...separatorStyles,
            left: "0.5em",
            marginRight: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )}, transparent)`,
          },
        }}
      >
        or continue with
      </SPTypography>
    </SPBox>
  );
}

export default Separator;
