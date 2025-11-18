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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function ListItem({ title, children }) {
  return (
    <SPBox p={2}>
      <SPTypography variant="h5" mb={1}>
        {title}
      </SPTypography>
      <SPTypography variant="body2" color="text" mb={2}>
        {children}
      </SPTypography>
    </SPBox>
  );
}

// Typechecking props for the ListItem
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListItem;
