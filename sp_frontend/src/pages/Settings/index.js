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
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPButton from "components/base/SPButton";
import SPInput from "components/base/SPInput";

function Settings() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <SPBox mb={6}>
        <SPTypography variant="h4" fontWeight="bold" mb={2}>
          Settings
        </SPTypography>
        <SPTypography variant="body1" color="text">
          Configure your application settings and preferences.
        </SPTypography>
      </SPBox>

      <Grid container spacing={4} sx={{ px: 3 }}>
        {/* Profile Settings */}
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
            <SPTypography variant="h5" fontWeight="bold" mb={3}>
              Profile Settings
            </SPTypography>
            <SPBox mb={3}>
              <SPInput type="text" label="Full Name" defaultValue="John Doe" fullWidth />
            </SPBox>
            <SPBox mb={3}>
              <SPInput
                type="email"
                label="Email Address"
                defaultValue="john@example.com"
                fullWidth
              />
            </SPBox>
            <SPBox mb={3}>
              <SPInput type="text" label="Company" defaultValue="Scarlet Pay Team" fullWidth />
            </SPBox>
            <SPButton variant="gradient" color="info" size="large" fullWidth>
              Save Changes
            </SPButton>
          </Card>
        </Grid>

        {/* Notification Settings */}
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
            <SPTypography variant="h5" fontWeight="bold" mb={3}>
              Notifications
            </SPTypography>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch defaultChecked />} label="Email Notifications" />
            </SPBox>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch defaultChecked />} label="Push Notifications" />
            </SPBox>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch />} label="SMS Notifications" />
            </SPBox>
            <SPBox mb={3}>
              <FormControlLabel control={<Switch defaultChecked />} label="Weekly Reports" />
            </SPBox>
            <SPButton variant="gradient" color="success" size="large" fullWidth>
              Update Preferences
            </SPButton>
          </Card>
        </Grid>

        {/* Security Settings */}
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
            <SPTypography variant="h5" fontWeight="bold" mb={3}>
              Security
            </SPTypography>
            <SPBox mb={3}>
              <SPInput type="password" label="Current Password" fullWidth />
            </SPBox>
            <SPBox mb={3}>
              <SPInput type="password" label="New Password" fullWidth />
            </SPBox>
            <SPBox mb={3}>
              <SPInput type="password" label="Confirm New Password" fullWidth />
            </SPBox>
            <SPButton variant="gradient" color="warning" size="large" fullWidth>
              Change Password
            </SPButton>
          </Card>
        </Grid>

        {/* System Settings */}
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
            <SPTypography variant="h5" fontWeight="bold" mb={3}>
              System Preferences
            </SPTypography>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
            </SPBox>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch defaultChecked />} label="Auto-save" />
            </SPBox>
            <SPBox mb={2}>
              <FormControlLabel control={<Switch />} label="Beta Features" />
            </SPBox>
            <SPBox mb={3}>
              <FormControlLabel control={<Switch defaultChecked />} label="Analytics Tracking" />
            </SPBox>
            <SPButton variant="gradient" color="info" size="large" fullWidth>
              Save Settings
            </SPButton>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
