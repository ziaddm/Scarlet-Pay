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

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";
import NavbarLight from "layouts/sections/navigation/navbars/components/NavbarLight";
import NavbarTransparent from "layouts/sections/navigation/navbars/components/NavbarTransparent";
import NavbarBlur from "layouts/sections/navigation/navbars/components/NavbarBlur";

// Stats page components code
import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";
import navbarLightCode from "layouts/sections/navigation/navbars/components/NavbarLight/code";
import navbarTransparentCode from "layouts/sections/navigation/navbars/components/NavbarTransparent/code";
import navbarBlurCode from "layouts/sections/navigation/navbars/components/NavbarBlur/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <SPBox py={6}>
          <NavbarDark />
        </SPBox>
      </View>
      <View title="Navbar light" code={navbarLightCode}>
        <SPBox py={6}>
          <NavbarLight />
        </SPBox>
      </View>
      <View title="Navbar transparent" code={navbarTransparentCode}>
        <SPBox py={6}>
          <NavbarTransparent />
        </SPBox>
      </View>
      <View title="Navbar blur" code={navbarBlurCode}>
        <SPBox py={6} variant="gradient" bgColor="dark">
          <NavbarBlur />
        </SPBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
