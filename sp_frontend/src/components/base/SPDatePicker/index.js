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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Scarlet Pay 2 PRO React components
import SPInput from "components/base/SPInput";

function SPDatePicker({ input = {}, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <SPInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Typechecking props for the SPDatePicker
SPDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default SPDatePicker;
