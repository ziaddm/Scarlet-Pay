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
import TestimonialsOne from "layouts/sections/page-sections/testimonials/components/TestimonialsOne";
import TestimonialsTwo from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo";
import TestimonialsThree from "layouts/sections/page-sections/testimonials/components/TestimonialsThree";

// Pricing page components code
import testimonialOneCode from "layouts/sections/page-sections/testimonials/components/TestimonialsOne/code";
import testimonialTwoCode from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo/code";
import testimonialThreeCode from "layouts/sections/page-sections/testimonials/components/TestimonialsThree/code";

function Testimonials() {
  return (
    <BaseLayout
      title="Testimonials"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/testimonials" },
        { label: "Testimonials" },
      ]}
    >
      <View title="Testimonials 1" height="40rem" code={testimonialOneCode}>
        <TestimonialsOne />
      </View>
      <View title="Testimonials 2" code={testimonialTwoCode}>
        <SPBox bgColor="white">
          <TestimonialsTwo />
        </SPBox>
      </View>
      <View title="Testimonials 3" code={testimonialThreeCode}>
        <SPBox bgColor="white">
          <TestimonialsThree />
        </SPBox>
      </View>
    </BaseLayout>
  );
}

export default Testimonials;
