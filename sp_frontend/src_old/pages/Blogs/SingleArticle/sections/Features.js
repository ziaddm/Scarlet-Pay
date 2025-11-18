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
import SPTypography from "components/SPTypography";

function Features() {
  const data = [
    {
      icon: "credit_card",
      name: "Modular Components",
    },
    {
      icon: "history_edu",
      name: "Great Features",
    },
    {
      icon: "developer_mode",
      name: "Modern Frameworks",
    },
    {
      icon: "history",
      name: "24/7 Support",
    },
    {
      icon: "support",
      name: "Awesome Support",
    },
    {
      icon: "contacts",
      name: "Modern Interface",
    },
  ];

  return (
    <SPBox component="section" py={8}>
      <Container>
        <Grid container item xs={12} md={9} mx="auto">
          {data.map(({ icon, name }) => (
            <Grid key={name} item xs={12} md={4} my={2}>
              <SPBox p={2} textAlign="center" borderRadius="lg">
                <SPTypography variant="h3" color="info" mb={2} textGradient>
                  <Icon>{icon}</Icon>
                </SPTypography>
                <SPTypography variant="h6">{name}</SPTypography>
              </SPBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Features;
