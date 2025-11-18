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

// @mui material components
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";

// Scarlet Pay 2 PRO React example components
import DefaultNavbar from "components/custom/DefaultNavbar";

// Scarlet Pay 2 PRO React page layout routes

function IllustrationLayout({
  header = "",
  title = "",
  description = "",
  illustration = "",
  children,
}) {
  return (
    <SPBox width="100%" height="100%" bgColor="white">
      <SPBox position="absolute" width="100%" mt={1}>
        <DefaultNavbar
          action={{
            type: "external",
            route: "https://www.scarlet-pay.com/product/scarlet-pay-pro-react",
            label: "buy now",
            color: "dark",
          }}
        />
      </SPBox>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <SPBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${illustration})` }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={5} lg={4} xl={3} sx={{ mx: "auto" }}>
          <SPBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <SPBox p={3} textAlign="center">
              {!header ? (
                <>
                  <SPBox mb={1} textAlign="center">
                    <SPTypography variant="h4" fontWeight="bold">
                      {title}
                    </SPTypography>
                  </SPBox>
                  <SPTypography variant="body2" color="text">
                    {description}
                  </SPTypography>
                </>
              ) : (
                header
              )}
            </SPBox>
            <SPBox p={3}>{children}</SPBox>
          </SPBox>
        </Grid>
      </Grid>
    </SPBox>
  );
}

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.string,
};

export default IllustrationLayout;
