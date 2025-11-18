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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAvatar from "components/SPAvatar";
import SPTypography from "components/SPTypography";

function MiniReviewCard({ color = "transparent", review, author }) {
  return (
    <SPBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      coloredShadow={color === "transparent" ? "none" : color}
      p={3}
    >
      <SPTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={2}
      >
        &quot;{review}&quot;
      </SPTypography>
      <SPBox display="flex" alignItems="center" mt={3}>
        <SPAvatar src={author.image} alt={author.name} shadow="md" />
        <SPBox pl={1.5} lineHeight={1}>
          <SPTypography
            display="block"
            variant="button"
            fontWeight="bold"
            color={color === "transparent" || color === "light" ? "dark" : "white"}
          >
            {author.name}
          </SPTypography>
          <SPTypography
            variant="caption"
            fontWeight="regular"
            color={color === "transparent" || color === "light" ? "text" : "white"}
          >
            {author.date}
          </SPTypography>
        </SPBox>
      </SPBox>
    </SPBox>
  );
}

// Typechecking props for the MiniReviewCard
MiniReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  review: PropTypes.string.isRequired,
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniReviewCard;
