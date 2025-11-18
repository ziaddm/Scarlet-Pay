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

import { Fragment } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPButton from "components/SPButton";

function SimpleBookingCard({ image, title, description, categories = [], action }) {
  return (
    <Card>
      <SPBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <SPBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <SPBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </SPBox>
      <SPBox p={3} mt={-2}>
        {categories.length > 0 && (
          <SPTypography
            display="block"
            variant="button"
            color="text"
            fontWeight="regular"
            mb={0.75}
          >
            {categories.map((category) => (
              <Fragment key={category}>{category}&nbsp;&bull;&nbsp;</Fragment>
            ))}
          </SPTypography>
        )}
        <SPTypography display="inline" variant="h5" fontWeight="bold">
          {title}
        </SPTypography>
        <SPBox mt={1} mb={3}>
          <SPTypography variant="body2" component="p" color="text">
            {description}
          </SPTypography>
        </SPBox>
        {action.type === "external" ? (
          <SPButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </SPButton>
        ) : (
          <SPButton
            component={Link}
            to={action.route}
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </SPButton>
        )}
      </SPBox>
    </Card>
  );
}

// Typechecking props for the SimpleBookingCard
SimpleBookingCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBookingCard;
