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
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";
import TabsWithIcons from "layouts/sections/navigation/nav-tabs/components/TabsWithIcons";
import TabsVertical from "layouts/sections/navigation/nav-tabs/components/TabsVertical";

// Stats page components code
import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";
import tabsWithIconsCode from "layouts/sections/navigation/nav-tabs/components/TabsWithIcons/code";
import tabsVerticalCode from "layouts/sections/navigation/nav-tabs/components/TabsVertical/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <SPBox bgColor="white" py={6}>
          <TabsSimple />
        </SPBox>
      </View>
      <View title="Tabs with icon" code={tabsWithIconsCode}>
        <SPBox bgColor="white" py={6}>
          <TabsWithIcons />
        </SPBox>
      </View>
      <View title="Tabs vertical" code={tabsVerticalCode}>
        <SPBox bgColor="white" py={6}>
          <TabsVertical />
        </SPBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
