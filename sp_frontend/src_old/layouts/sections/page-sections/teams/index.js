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

// Pricing page components
import TeamOne from "layouts/sections/page-sections/teams/components/TeamOne";
import TeamTwo from "layouts/sections/page-sections/teams/components/TeamTwo";

// Pricing page components code
import teamOneCode from "layouts/sections/page-sections/teams/components/TeamOne/code";
import teamTwoCode from "layouts/sections/page-sections/teams/components/TeamTwo/code";

function Teams() {
  return (
    <BaseLayout
      title="Teams"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/teams" },
        { label: "Teams" },
      ]}
    >
      <View title="Team 1" height="40rem" code={teamOneCode}>
        <TeamOne />
      </View>
      <View title="Team 2" code={teamTwoCode}>
        <SPBox bgColor="white">
          <TeamTwo />
        </SPBox>
      </View>
    </BaseLayout>
  );
}

export default Teams;
