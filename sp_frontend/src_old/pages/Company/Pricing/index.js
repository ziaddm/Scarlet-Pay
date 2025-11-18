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
// import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Pricing page sections
import Header from "pages/Company/Pricing/sections/Header";
import AboutUs from "pages/Company/Pricing/sections/AboutUs";
import PricingSection from "pages/Company/Pricing/sections/Pricing";
import LifetimeMembership from "pages/Company/Pricing/sections/LifetimeMembership";
import Testimonials from "pages/Company/Pricing/sections/Testimonials";
import Trust from "pages/Company/Pricing/sections/Trust";
import Faq from "pages/Company/Pricing/sections/Faq";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Pricing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
          label: "buy now",
        }}
        transparent
        light
      />
      <Header />
      <SPBox p={3}>
        <AboutUs />
        <PricingSection />
        <LifetimeMembership />
        <Testimonials />
        <Trust />
        <Faq />
      </SPBox>
      <SPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </SPBox>
    </>
  );
}

export default Pricing;
