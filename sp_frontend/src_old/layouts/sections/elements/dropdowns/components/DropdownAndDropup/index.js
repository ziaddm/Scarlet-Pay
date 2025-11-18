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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";

function DropdownAndDropup() {
  const [dropdown, setDropdown] = useState(null);
  const [dropup, setDropup] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const openDropup = ({ currentTarget }) => setDropup(currentTarget);
  const closeDropup = () => setDropup(null);

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  const dropupIconStyles = {
    transform: dropup ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} textAlign="center">
            <SPButton variant="gradient" color="info" onClick={openDropdown}>
              Dropdown <Icon sx={dropdownIconStyles}>expand_more</Icon>
            </SPButton>
            <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
              <MenuItem onClick={closeDropdown}>Action</MenuItem>
              <MenuItem onClick={closeDropdown}>Another action</MenuItem>
              <MenuItem onClick={closeDropdown}>Something else here</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center">
            <SPButton variant="gradient" color="info" onClick={openDropup}>
              Dropup <Icon sx={dropupIconStyles}>expand_more</Icon>
            </SPButton>
            <Menu
              anchorEl={dropup}
              open={Boolean(dropup)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onClose={closeDropup}
            >
              <MenuItem onClick={closeDropup}>Action</MenuItem>
              <MenuItem onClick={closeDropup}>Another action</MenuItem>
              <MenuItem onClick={closeDropup}>Something else here</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default DropdownAndDropup;
