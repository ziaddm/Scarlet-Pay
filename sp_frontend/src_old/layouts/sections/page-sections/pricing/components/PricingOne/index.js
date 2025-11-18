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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

function PricingOne() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("monthly");

  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  return (
    <SPBox component="section" pb={3}>
      <SPBox variant="gradient" bgColor="dark">
        <Container sx={{ pb: { xs: 12, lg: 22 }, pt: 12 }}>
          <Grid
            container
            item
            flexDirection="column"
            alignItems="center"
            xs={12}
            md={8}
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <SPTypography variant="h3" color="white" mb={2}>
              See our pricing
            </SPTypography>
            <SPTypography variant="body2" color="white">
              You have Free Unlimited Updates and Premium Support on each package.
            </SPTypography>
          </Grid>
        </Container>
      </SPBox>
      <SPBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={7} md={6} lg={4} sx={{ mx: "auto", textAlign: "center" }}>
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab
                    id="monthly"
                    label={
                      <SPBox py={0.5} px={2} color="inherit">
                        Monthly
                      </SPBox>
                    }
                  />
                  <Tab
                    id="annual"
                    label={
                      <SPBox py={0.5} px={2} color="inherit">
                        Annual
                      </SPBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <SPBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "starter" }}
                  price={{ currency: "$", value: tabType === "annual" ? 119 : 59, type: "mo" }}
                  specifications={[
                    { label: "2 team members", includes: true },
                    { label: "20GB Cloud storage", includes: true },
                    { label: "Integration help", includes: false },
                    { label: "Sketch Files", includes: false },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "dark",
                    label: "join",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  color="dark"
                  badge={{ color: "info", label: "premium" }}
                  price={{ currency: "$", value: tabType === "annual" ? 159 : 89, type: "mo" }}
                  specifications={[
                    { label: "10 team members", includes: true },
                    { label: "40GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "info",
                    label: "try premium",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "enterprise" }}
                  price={{ currency: "$", value: tabType === "annual" ? 99 : 399, type: "mo" }}
                  specifications={[
                    { label: "Unlimited team members", includes: true },
                    { label: "100GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: true },
                    { label: "Complete documentation", includes: true },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "dark",
                    label: "join",
                  }}
                />
              </Grid>
            </Grid>
          </SPBox>
        </Container>
      </SPBox>
    </SPBox>
  );
}

export default PricingOne;
