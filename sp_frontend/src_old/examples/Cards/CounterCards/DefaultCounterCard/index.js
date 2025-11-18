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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function DefaultCounterCard({ color = "info", count, title = "", description = "", ...rest }) {
  return (
    <SPBox p={2} textAlign="center" lineHeight={1}>
      <SPTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </SPTypography>
      {title && (
        <SPTypography variant="h5" mt={2} mb={1}>
          {title}
        </SPTypography>
      )}
      {description && (
        <SPTypography variant="body2" color="text">
          {description}
        </SPTypography>
      )}
    </SPBox>
  );
}

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
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
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
