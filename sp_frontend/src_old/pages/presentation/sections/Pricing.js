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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPBadge from "components/SPBadge";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";

function Pricing() {
  return (
    <>
      <SPBox position="relative" variant="gradient" bgColor="info" mt={{ xs: 0, lg: 12 }} mx={-2}>
        <SPBox
          component="img"
          src={bgPattern}
          alt="background-pattern"
          position="absolute"
          top={0}
          left={0}
          width={{ xs: "auto", lg: "100%" }}
          height={{ xs: "100%", lg: "auto" }}
          opacity={0.6}
        />
        <Container>
          <Grid container justifyContent="center" sx={{ pt: 6, pb: 18 }}>
            <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
              <SPBadge badgeContent="pricing" color="dark" size="sm" container sx={{ mb: 1 }} />
              <SPTypography variant="h3" color="white" mb={1}>
                Ready to get Scarlet Pay?
              </SPTypography>
              <SPTypography variant="body2" color="white">
                Based on the license you get, you will have direct access to our team <br /> of
                developers who built the product.
              </SPTypography>
            </Grid>
          </Grid>
        </Container>
      </SPBox>
      <SPBox mt={-19}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} sm={6} lg={3}>
              <SimplePricingCard
                color="dark"
                title="Freelancer"
                description="Good for a personal or client web/mobile app."
                price={{ value: "$79" }}
                action={{ type: "internal", route: "/", label: "buy now" }}
                specifications={[
                  "Complete documentation",
                  "Full code",
                  "Projects - 1",
                  "Team Size - 1",
                  "Support",
                  "Free Updates - 6 months",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SimplePricingCard
                color="dark"
                title="Startup"
                description="Build your startup or client web/mobile app."
                price={{ value: "$149" }}
                action={{ type: "internal", route: "/", label: "buy now" }}
                specifications={[
                  "Complete documentation",
                  "Full code",
                  "Projects - 1",
                  "Team Size - up to 5",
                  "Support",
                  "Free Updates - 12 months",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SimplePricingCard
                variant="gradient"
                color="dark"
                title="Company"
                description="Perfect for web/mobile apps or SaaS projects."
                price={{ value: "$249" }}
                action={{ type: "internal", route: "/", label: "buy now" }}
                specifications={[
                  "Complete documentation",
                  "Full code",
                  "Use in SaaS",
                  "Projects - unlimited",
                  "Team Size - up to 20",
                  "Priority support",
                  "Free Updates - 12 months",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SimplePricingCard
                color="dark"
                title="Enterprise"
                description="Deploy large-scale projects which include redistribution rights."
                price={{ value: "$599" }}
                action={{ type: "internal", route: "/", label: "buy now" }}
                specifications={[
                  "Complete documentation",
                  "Full code",
                  "Use in SaaS",
                  "Projects - unlimited",
                  "Team Size - more than 20",
                  "Priority support",
                  "Free Updates - 24 months",
                ]}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} flexDirection="column" sx={{ textAlign: "center" }}>
            <SPTypography variant="body2" color="text" mt={6} mb={3} mx="auto">
              <Icon>lock</Icon> Secured Payment by <b>2Checkout</b> with:
            </SPTypography>
            <SPTypography variant="body2" color="text" mb={2} mx="auto">
              <i className="fa fa-cc-paypal fa-2x" />
              &nbsp;
              <i className="fa fa-cc-visa fa-2x" />
              &nbsp;
              <i className="fa fa-cc-mastercard fa-2x" />
              &nbsp;
              <i className="fa fa-cc-amex fa-2x" />
            </SPTypography>
            <SPTypography variant="body2" color="text" mx="auto" sx={{ maxWidth: "500px" }}>
              <b>Info:</b> If you are a Registered Company inside the European Union you will be
              able to add your VAT ID after your Press &quot;Buy Now&quot;
            </SPTypography>
          </Grid>
        </Container>
      </SPBox>
    </>
  );
}

export default Pricing;
