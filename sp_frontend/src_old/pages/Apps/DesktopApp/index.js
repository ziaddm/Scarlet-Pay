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

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
// import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// DesktopApp page sections
import Banner from "pages/Apps/DesktopApp/sections/Banner";
import Information from "pages/Apps/DesktopApp/sections/Information";
import Features from "pages/Apps/DesktopApp/sections/Features";
import Testimonials from "pages/Apps/DesktopApp/sections/Testimonials";
import Pricing from "pages/Apps/DesktopApp/sections/Pricing";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function DesktopApp() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
          label: "buy now",
          color: "warning",
        }}
        transparent
        light
      />
      <SPBox bgColor="white">
        <SPBox
          minHeight="50vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
              linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        />
        <Banner />
        <Information />
        <Features />
        <Testimonials />
        <Pricing />
        <SPBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </SPBox>
      </SPBox>
    </>
  );
}

export default DesktopApp;
