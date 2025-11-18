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
import PaginationSimple from "layouts/sections/navigation/pagination/components/PaginationSimple";
import PaginationSizing from "layouts/sections/navigation/pagination/components/PaginationSizing";
import PaginationVariants from "layouts/sections/navigation/pagination/components/PaginationVariants";

// Stats page components code
import paginationSimpleCode from "layouts/sections/navigation/pagination/components/PaginationSimple/code";
import paginationSizingCode from "layouts/sections/navigation/pagination/components/PaginationSizing/code";
import paginationVariantsCode from "layouts/sections/navigation/pagination/components/PaginationVariants/code";

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/pagination" },
        { label: "Pagination" },
      ]}
    >
      <View title="Pagination simple" code={paginationSimpleCode}>
        <SPBox py={3}>
          <PaginationSimple />
        </SPBox>
      </View>
      <View title="Pagination sizing" code={paginationSizingCode}>
        <SPBox p={3}>
          <PaginationSizing />
        </SPBox>
      </View>
      <View title="Pagination Variant" code={paginationVariantsCode}>
        <SPBox p={3}>
          <PaginationVariants />
        </SPBox>
      </View>
    </BaseLayout>
  );
}

export default Pagination;
