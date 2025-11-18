// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Scarlet Pay React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";

// Scarlet Pay React example components
import DefaultNavbar from "components/custom/DefaultNavbar";

// Scarlet Pay React page layout routes

function IllustrationLayout({
  header = "",
  title = "",
  description = "",
  illustration = "",
  logo = "",
  children,
}) {
  return (
    <SPBox width="100%" height="100%" bgColor="white">
      <SPBox position="absolute" width="100%" mt={1}></SPBox>
      <Grid container>
        <Grid item xs={12} lg={7.75}>
          <SPBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: illustration ? `url(${illustration})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={5} lg={4} xl={3} sx={{ mx: "auto" }}>
          <SPBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            {logo && (
              <SPBox mb={3} textAlign="center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    maxWidth: "350px",
                    height: "auto",
                    marginTop: "0px",
                    marginLeft: "0px",
                    marginRight: "45px",
                  }}
                />
              </SPBox>
            )}
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
            <SPBox>{children}</SPBox>
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
  logo: PropTypes.string,
};

export default IllustrationLayout;
