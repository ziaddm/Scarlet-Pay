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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";

// @mui icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPButton from "components/base/SPButton";
import SPAvatar from "components/base/SPAvatar";

// Sample notifications data
const allNotifications = [
  {
    id: 1,
    type: "success",
    title: "Payment Received",
    message: "Your payment of $1,234.56 has been successfully processed.",
    timestamp: "2 minutes ago",
    read: false,
    icon: "check_circle",
  },
  {
    id: 2,
    type: "error",
    title: "Server Error",
    message: "High CPU usage detected on server-02. Immediate attention required.",
    timestamp: "15 minutes ago",
    read: false,
    icon: "error",
  },
  {
    id: 3,
    type: "warning",
    title: "Storage Limit Warning",
    message: "Your storage is at 85% capacity. Consider upgrading your plan.",
    timestamp: "1 hour ago",
    read: false,
    icon: "warning",
  },
  {
    id: 4,
    type: "info",
    title: "New Feature Available",
    message: "We've added new analytics tools. Check them out in your dashboard.",
    timestamp: "2 hours ago",
    read: true,
    icon: "info",
  },
  {
    id: 5,
    type: "success",
    title: "Profile Updated",
    message: "Your profile information has been successfully updated.",
    timestamp: "3 hours ago",
    read: true,
    icon: "check_circle",
  },
  {
    id: 6,
    type: "info",
    title: "New Team Member",
    message: "Sarah Johnson has joined your team as a Designer.",
    timestamp: "5 hours ago",
    read: true,
    icon: "info",
  },
  {
    id: 7,
    type: "warning",
    title: "Scheduled Maintenance",
    message: "System maintenance scheduled for tonight at 11 PM EST.",
    timestamp: "1 day ago",
    read: true,
    icon: "warning",
  },
  {
    id: 8,
    type: "error",
    title: "Failed Login Attempt",
    message: "There was a failed login attempt from an unknown device.",
    timestamp: "2 days ago",
    read: true,
    icon: "error",
  },
];

function Notifications() {
  const [activeTab, setActiveTab] = useState(0);
  const [notifications, setNotifications] = useState(allNotifications);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event, notificationId) => {
    setAnchorEl(event.currentTarget);
    setSelectedNotification(notificationId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedNotification(null);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
    handleMenuClose();
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
    handleMenuClose();
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  const getFilteredNotifications = () => {
    if (activeTab === 0) return notifications; // All
    if (activeTab === 1) return notifications.filter((n) => !n.read); // Unread
    return notifications.filter((n) => n.read); // Read
  };

  const filteredNotifications = getFilteredNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getTypeColor = (type) => {
    const colors = {
      success: "success",
      error: "error",
      warning: "warning",
      info: "info",
    };
    return colors[type] || "info";
  };

  const getTypeIcon = (type) => {
    const icons = {
      success: <CheckCircleIcon />,
      error: <ErrorIcon />,
      warning: <WarningIcon />,
      info: <InfoIcon />,
    };
    return icons[type] || <InfoIcon />;
  };

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <SPBox mb={6}>
        <SPBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <SPBox display="flex" alignItems="center">
            <Badge badgeContent={unreadCount} color="error" sx={{ mr: 2 }}>
              <NotificationsIcon sx={{ fontSize: 32 }} />
            </Badge>
            <SPTypography variant="h4" fontWeight="bold">
              Notification Center
            </SPTypography>
          </SPBox>
          <SPBox display="flex" gap={2}>
            {unreadCount > 0 && (
              <SPButton variant="outlined" color="info" size="large" onClick={markAllAsRead}>
                Mark All as Read
              </SPButton>
            )}
            <SPButton
              variant="gradient"
              color="error"
              size="large"
              onClick={deleteAllNotifications}
            >
              Clear All
            </SPButton>
          </SPBox>
        </SPBox>
        <SPTypography variant="body1" color="text">
          Manage and view all your notifications in one place.
        </SPTypography>
      </SPBox>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4} sx={{ px: 3 }}>
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
              {notifications.length}
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Total Notifications
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
              {unreadCount}
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Unread
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
              {notifications.filter((n) => n.type === "success").length}
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Success
            </SPTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(250, 112, 154, 0.3)",
            }}
          >
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              {notifications.filter((n) => n.type === "error" || n.type === "warning").length}
            </SPTypography>
            <SPTypography variant="body2" sx={{ opacity: 0.9 }}>
              Alerts
            </SPTypography>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <SPBox sx={{ borderBottom: 1, borderColor: "divider", px: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="notification tabs">
            <Tab
              label={
                <SPBox display="flex" alignItems="center" gap={1}>
                  All
                  <Chip label={notifications.length} size="small" color="primary" />
                </SPBox>
              }
            />
            <Tab
              label={
                <SPBox display="flex" alignItems="center" gap={1}>
                  Unread
                  {unreadCount > 0 && <Chip label={unreadCount} size="small" color="error" />}
                </SPBox>
              }
            />
            <Tab
              label={
                <SPBox display="flex" alignItems="center" gap={1}>
                  Read
                  <Chip
                    label={notifications.filter((n) => n.read).length}
                    size="small"
                    color="default"
                  />
                </SPBox>
              }
            />
          </Tabs>
        </SPBox>

        {/* Notifications List */}
        <SPBox sx={{ maxHeight: "600px", overflowY: "auto" }}>
          {filteredNotifications.length === 0 ? (
            <SPBox p={6} textAlign="center">
              <NotificationsIcon sx={{ fontSize: 64, color: "text.secondary", mb: 2 }} />
              <SPTypography variant="h6" color="text.secondary" mb={1}>
                No notifications found
              </SPTypography>
              <SPTypography variant="body2" color="text.secondary">
                {activeTab === 1
                  ? "You're all caught up! No unread notifications."
                  : "You don't have any notifications yet."}
              </SPTypography>
            </SPBox>
          ) : (
            filteredNotifications.map((notification, index) => (
              <SPBox key={notification.id}>
                <SPBox
                  display="flex"
                  alignItems="flex-start"
                  p={3}
                  sx={{
                    backgroundColor: notification.read ? "transparent" : "action.hover",
                    transition: "background-color 0.2s",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <SPAvatar
                    color={getTypeColor(notification.type)}
                    sx={{
                      width: 48,
                      height: 48,
                      mr: 2,
                      bgcolor: `${getTypeColor(notification.type)}.main`,
                    }}
                  >
                    {getTypeIcon(notification.type)}
                  </SPAvatar>

                  <SPBox flex={1}>
                    <SPBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb={1}
                    >
                      <SPBox>
                        <SPTypography variant="h6" fontWeight="bold" mb={0.5}>
                          {notification.title}
                        </SPTypography>
                        <SPTypography variant="body2" color="text.secondary">
                          {notification.message}
                        </SPTypography>
                      </SPBox>
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuOpen(e, notification.id)}
                        sx={{ ml: 2 }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </SPBox>
                    <SPBox display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                      <SPTypography variant="caption" color="text.secondary">
                        {notification.timestamp}
                      </SPTypography>
                      {!notification.read && (
                        <Chip
                          label="New"
                          size="small"
                          color="error"
                          sx={{ height: 20, fontSize: "0.65rem" }}
                        />
                      )}
                    </SPBox>
                  </SPBox>
                </SPBox>
                {index < filteredNotifications.length - 1 && <Divider />}
              </SPBox>
            ))
          )}
        </SPBox>
      </Card>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => markAsRead(selectedNotification)}
          disabled={notifications.find((n) => n.id === selectedNotification)?.read}
        >
          Mark as read
        </MenuItem>
        <MenuItem onClick={() => deleteNotification(selectedNotification)}>Delete</MenuItem>
      </Menu>
    </Container>
  );
}

export default Notifications;
