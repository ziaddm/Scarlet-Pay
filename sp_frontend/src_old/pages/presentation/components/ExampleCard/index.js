/*
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function ExampleCard({ image, name = "", count = 0, ...rest }) {
  return (
    <SPBox>
      <SPBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        minHeight="10rem"
        sx={{
          overflow: "hidden",
          transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
          transformOrigin: "50% 0",
          backfaceVisibility: "hidden",
          willChange: "transform, box-shadow",
          transition: "transform 200ms ease-out",

          "&:hover": {
            transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
          },
        }}
        {...rest}
      >
        <SPBox component="img" src={image} alt={name} width="100%" my="auto" />
      </SPBox>
      {name || count > 0 ? (
        <SPBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <SPTypography variant="h6" fontWeight="bold">
              {name}
            </SPTypography>
          )}
          {count > 0 && (
            <SPTypography variant="button" fontWeight="regular" color="secondary">
              {count} {count === 1 ? "Example" : "Examples"}
            </SPTypography>
          )}
        </SPBox>
      ) : null}
    </SPBox>
  );
}

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
};

export default ExampleCard;
