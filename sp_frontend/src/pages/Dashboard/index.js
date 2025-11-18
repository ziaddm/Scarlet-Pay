/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.scarlet-pay.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.scarlet-pay.com)

Coded by www.scarlet-pay.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPButton from "components/base/SPButton";

function Dashboard() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <SPBox mb={6}>
        <SPTypography variant="h4" fontWeight="bold" mb={2}>
          Dashboard Overview
        </SPTypography>
        <SPTypography variant="body1" color="text">
          Welcome to your comprehensive dashboard. Here you can view key metrics and manage your
          data.
        </SPTypography>
      </SPBox>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={6} sx={{ px: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
            }}
          >
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              1,234
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Total Users
            </SPTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(240, 147, 251, 0.3)",
            }}
          >
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              98.5%
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Uptime
            </SPTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(79, 172, 254, 0.3)",
            }}
          >
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              567
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Reports
            </SPTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(67, 233, 123, 0.3)",
            }}
          >
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              89
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Active Teams
            </SPTypography>
          </Card>
        </Grid>
      </Grid>

      {/* Content Cards */}
      <Grid container spacing={4} sx={{ px: 3 }}>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <SPTypography variant="h5" fontWeight="bold" mb={2}>
              Recent Activity
            </SPTypography>
            <SPTypography variant="body2" color="text" mb={3}>
              Track your recent activities and system events.
            </SPTypography>
            <SPButton variant="gradient" color="info" size="large" fullWidth>
              View Activity
            </SPButton>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <SPTypography variant="h5" fontWeight="bold" mb={2}>
              Quick Actions
            </SPTypography>
            <SPTypography variant="body2" color="text" mb={3}>
              Access frequently used features and tools.
            </SPTypography>
            <SPButton variant="gradient" color="success" size="large" fullWidth>
              Get Started
            </SPButton>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
