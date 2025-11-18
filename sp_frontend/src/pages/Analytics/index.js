/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================
*
* Product Page: https://www.scarlet-pay.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.scarlet-pay.com)
*
Coded by www.scarlet-pay.com
*
 =========================================================
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useEffect, useMemo } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme as useMUITheme } from "@mui/material/styles";

// @mui icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import TimelineIcon from "@mui/icons-material/Timeline";
import RefreshIcon from "@mui/icons-material/Refresh";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPButton from "components/base/SPButton";

// Features
import { useTransactionAnalytics } from "features/transactions";

// Recharts components
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { analytics, loading, error, fetchAnalytics } = useTransactionAnalytics();
  const muiTheme = useMUITheme();
  const isDarkMode = muiTheme.palette.mode === "dark";

  // Set default date range to current month
  useEffect(() => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const formatDateForInput = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setStartDate(formatDateForInput(firstDay));
    setEndDate(formatDateForInput(lastDay));
  }, []);

  // Fetch analytics when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const startDateTime = `${startDate}T00:00:00`;
      const endDateTime = `${endDate}T23:59:59`;
      fetchAnalytics({ start_date: startDateTime, end_date: endDateTime });
    }
  }, [startDate, endDate, fetchAnalytics]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "N/A";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      dining: "error",
      books: "info",
      transportation: "warning",
      entertainment: "success",
      services: "secondary",
      other: "default",
    };
    return colors[category] || "default";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      dining: "🍽️",
      books: "📚",
      transportation: "🚗",
      entertainment: "🎬",
      services: "🔧",
      other: "📦",
    };
    return icons[category] || "📦";
  };

  const handleRefresh = () => {
    if (startDate && endDate) {
      const startDateTime = `${startDate}T00:00:00`;
      const endDateTime = `${endDate}T23:59:59`;
      fetchAnalytics({ start_date: startDateTime, end_date: endDateTime });
    }
  };

  // Calculate max spending for progress bars
  const maxCategorySpending =
    analytics?.spending_by_category?.reduce((max, item) => Math.max(max, item.total), 0) || 0;

  const maxTimeSpending =
    analytics?.spending_over_time?.reduce((max, item) => Math.max(max, item.total), 0) || 0;

  // Calculate additional metrics
  const totalSpending = analytics?.total_spending || 0;
  const categoryCount = analytics?.spending_by_category?.length || 0;
  const timePeriodCount = analytics?.spending_over_time?.length || 0;
  const averageSpending =
    timePeriodCount > 0
      ? analytics?.spending_over_time?.reduce((sum, item) => sum + item.total, 0) / timePeriodCount
      : 0;
  const topCategory =
    analytics?.spending_by_category?.length > 0
      ? analytics.spending_by_category.reduce((max, item) => (item.total > max.total ? item : max))
      : null;

  // Calculate future projections based on historical patterns
  const calculateProjections = (historicalData, daysToProject = 7) => {
    if (!historicalData || historicalData.length === 0) return [];

    // Use average of recent days (last 7 or all if less than 7)
    const recentDays = historicalData.slice(-7);
    const average = recentDays.reduce((sum, item) => sum + item.total, 0) / recentDays.length;

    // Calculate trend using simple linear regression
    const n = historicalData.length;
    const xValues = historicalData.map((_, i) => i);
    const yValues = historicalData.map((item) => item.total);

    const sumX = xValues.reduce((a, b) => a + b, 0);
    const sumY = yValues.reduce((a, b) => a + b, 0);
    const sumXY = xValues.reduce((sum, x, i) => sum + x * yValues[i], 0);
    const sumXX = xValues.reduce((sum, x) => sum + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Generate future dates and projected values
    const projections = [];
    const lastDate = new Date(historicalData[historicalData.length - 1].period);

    for (let i = 1; i <= daysToProject; i++) {
      const futureDate = new Date(lastDate);
      futureDate.setDate(futureDate.getDate() + i);

      // Project using trend line, but don't go below 0
      const projectedValue = slope * (n + i - 1) + intercept;
      // Use average if trend gives negative or very low values
      const finalValue = projectedValue > 0 ? Math.max(projectedValue, average * 0.5) : average;

      projections.push({
        period: futureDate.toISOString(),
        total: finalValue,
        isProjected: true,
      });
    }

    return projections;
  };

  // Format date for chart (short format)
  const formatDateForChart = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "";
    }
  };

  // Prepare chart data with historical and projected values
  const chartData = useMemo(() => {
    if (!analytics?.spending_over_time || analytics.spending_over_time.length === 0) return [];

    const historical = analytics.spending_over_time.map((item) => ({
      date: formatDateForChart(item.period),
      dateFull: item.period,
      spending: item.total,
      projected: null,
      isProjected: false,
    }));

    const projections = calculateProjections(analytics.spending_over_time, 7);
    const projected = projections.map((item) => ({
      date: formatDateForChart(item.period),
      dateFull: item.period,
      spending: null,
      projected: item.total,
      isProjected: true,
    }));

    // Combine historical and projected data
    return [...historical, ...projected];
  }, [analytics]);

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <SPBox mb={6} sx={{ px: 3 }}>
        <SPBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <SPBox>
            <SPTypography variant="h4" fontWeight="bold" mb={1}>
              Transaction Analytics
            </SPTypography>
            <SPTypography variant="body2" color="text.secondary">
              Analyze your spending patterns and track your financial activity
            </SPTypography>
          </SPBox>
          <SPButton
            variant="gradient"
            color="info"
            size="small"
            onClick={handleRefresh}
            disabled={loading}
            startIcon={<RefreshIcon />}
          >
            Refresh
          </SPButton>
        </SPBox>
      </SPBox>

      {/* Date Range Selector */}
      <SPBox mb={4} sx={{ px: 3 }}>
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: ({ palette: { mode } }) =>
              mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
            background: ({ palette: { mode } }) =>
              mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
            border: ({ palette: { mode } }) =>
              mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <SPBox display="flex" alignItems="center" mb={2.5}>
            <CalendarTodayIcon sx={{ fontSize: 24, mr: 1.5, color: "primary.main" }} />
            <SPTypography variant="h6" fontWeight="bold">
              Select Date Range
            </SPTypography>
          </SPBox>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </SPBox>

      {/* Error State */}
      {error && (
        <SPBox sx={{ px: 3, mb: 4 }}>
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "error.lighter",
              border: "1px solid",
              borderColor: "error.main",
            }}
          >
            <SPTypography variant="body1" color="error">
              {error}
            </SPTypography>
          </Card>
        </SPBox>
      )}

      {/* Loading State */}
      {loading && (
        <SPBox sx={{ px: 3, mb: 4 }}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Card>
        </SPBox>
      )}

      {/* Analytics Content */}
      {!loading && analytics && (
        <>
          {/* Key Metrics Cards */}
          <SPBox mb={4} sx={{ px: 3 }}>
            <Grid container spacing={3}>
              {/* Total Spending Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    boxShadow: ({ palette: { mode } }) =>
                      mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                    background: ({ palette: { mode } }) =>
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(233, 30, 99, 0.05) 100%)"
                        : "linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(233, 30, 99, 0.03) 100%)",
                    border: ({ palette: { mode } }) =>
                      mode === "dark" ? "1px solid rgba(233, 30, 99, 0.2)" : "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: ({ palette: { mode } }) =>
                        mode === "dark"
                          ? "0 12px 40px rgba(0,0,0,0.4)"
                          : "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <SPBox display="flex" alignItems="center" mb={2}>
                    <SPBox
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: ({ palette: { mode } }) =>
                          mode === "dark" ? "rgba(233, 30, 99, 0.2)" : "rgba(233, 30, 99, 0.1)",
                        mr: 2,
                      }}
                    >
                      <AttachMoneyIcon sx={{ fontSize: 28, color: "error.main" }} />
                    </SPBox>
                    <SPBox>
                      <SPTypography variant="body2" color="text.secondary" fontWeight="medium">
                        Total Spending
                      </SPTypography>
                      <SPTypography variant="h4" fontWeight="bold" color="error.main">
                        {formatCurrency(totalSpending)}
                      </SPTypography>
                    </SPBox>
                  </SPBox>
                  {analytics.period && (
                    <SPTypography variant="caption" color="text.secondary">
                      {formatDate(analytics.period.start_date)} -{" "}
                      {formatDate(analytics.period.end_date)}
                    </SPTypography>
                  )}
                </Card>
              </Grid>

              {/* Average Spending Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    boxShadow: ({ palette: { mode } }) =>
                      mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                    background: ({ palette: { mode } }) =>
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.05) 100%)"
                        : "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.03) 100%)",
                    border: ({ palette: { mode } }) =>
                      mode === "dark" ? "1px solid rgba(33, 150, 243, 0.2)" : "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: ({ palette: { mode } }) =>
                        mode === "dark"
                          ? "0 12px 40px rgba(0,0,0,0.4)"
                          : "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <SPBox display="flex" alignItems="center" mb={2}>
                    <SPBox
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: ({ palette: { mode } }) =>
                          mode === "dark" ? "rgba(33, 150, 243, 0.2)" : "rgba(33, 150, 243, 0.1)",
                        mr: 2,
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: 28, color: "info.main" }} />
                    </SPBox>
                    <SPBox>
                      <SPTypography variant="body2" color="text.secondary" fontWeight="medium">
                        Average Daily
                      </SPTypography>
                      <SPTypography variant="h4" fontWeight="bold" color="info.main">
                        {formatCurrency(averageSpending)}
                      </SPTypography>
                    </SPBox>
                  </SPBox>
                  <SPTypography variant="caption" color="text.secondary">
                    Per time period
                  </SPTypography>
                </Card>
              </Grid>

              {/* Categories Count Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    boxShadow: ({ palette: { mode } }) =>
                      mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                    background: ({ palette: { mode } }) =>
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.05) 100%)"
                        : "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.03) 100%)",
                    border: ({ palette: { mode } }) =>
                      mode === "dark" ? "1px solid rgba(76, 175, 80, 0.2)" : "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: ({ palette: { mode } }) =>
                        mode === "dark"
                          ? "0 12px 40px rgba(0,0,0,0.4)"
                          : "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <SPBox display="flex" alignItems="center" mb={2}>
                    <SPBox
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: ({ palette: { mode } }) =>
                          mode === "dark" ? "rgba(76, 175, 80, 0.2)" : "rgba(76, 175, 80, 0.1)",
                        mr: 2,
                      }}
                    >
                      <CategoryIcon sx={{ fontSize: 28, color: "success.main" }} />
                    </SPBox>
                    <SPBox>
                      <SPTypography variant="body2" color="text.secondary" fontWeight="medium">
                        Categories
                      </SPTypography>
                      <SPTypography variant="h4" fontWeight="bold" color="success.main">
                        {categoryCount}
                      </SPTypography>
                    </SPBox>
                  </SPBox>
                  <SPTypography variant="caption" color="text.secondary">
                    Active categories
                  </SPTypography>
                </Card>
              </Grid>

              {/* Top Category Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    boxShadow: ({ palette: { mode } }) =>
                      mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                    background: ({ palette: { mode } }) =>
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.05) 100%)"
                        : "linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.03) 100%)",
                    border: ({ palette: { mode } }) =>
                      mode === "dark" ? "1px solid rgba(255, 152, 0, 0.2)" : "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: ({ palette: { mode } }) =>
                        mode === "dark"
                          ? "0 12px 40px rgba(0,0,0,0.4)"
                          : "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <SPBox display="flex" alignItems="center" mb={2}>
                    <SPBox
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: ({ palette: { mode } }) =>
                          mode === "dark" ? "rgba(255, 152, 0, 0.2)" : "rgba(255, 152, 0, 0.1)",
                        mr: 2,
                      }}
                    >
                      <ShoppingCartIcon sx={{ fontSize: 28, color: "warning.main" }} />
                    </SPBox>
                    <SPBox>
                      <SPTypography variant="body2" color="text.secondary" fontWeight="medium">
                        Top Category
                      </SPTypography>
                      <SPTypography
                        variant="h6"
                        fontWeight="bold"
                        color="warning.main"
                        textTransform="capitalize"
                      >
                        {topCategory ? topCategory.category : "N/A"}
                      </SPTypography>
                    </SPBox>
                  </SPBox>
                  <SPTypography variant="caption" color="text.secondary">
                    {topCategory ? formatCurrency(topCategory.total) : "No data"}
                  </SPTypography>
                </Card>
              </Grid>
            </Grid>
          </SPBox>

          {/* Daily Spending Graph with Projections */}
          <SPBox mb={4} sx={{ px: 3 }}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: ({ palette: { mode } }) =>
                  mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                background: ({ palette: { mode } }) =>
                  mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                border: ({ palette: { mode } }) =>
                  mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <SPBox display="flex" alignItems="center" mb={3}>
                <SPBox
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: ({ palette: { mode } }) =>
                      mode === "dark" ? "rgba(233, 30, 99, 0.2)" : "rgba(233, 30, 99, 0.1)",
                    mr: 1.5,
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 28, color: "error.main" }} />
                </SPBox>
                <SPTypography variant="h5" fontWeight="bold">
                  Daily Spending Trend & Projection
                </SPTypography>
              </SPBox>

              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                    />
                    <XAxis
                      dataKey="date"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fill: isDarkMode ? "#fff" : "#000" }}
                    />
                    <YAxis
                      tick={{ fill: isDarkMode ? "#fff" : "#000" }}
                      label={{
                        value: "Spending ($)",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          textAnchor: "middle",
                          fill: isDarkMode ? "#fff" : "#000",
                        },
                      }}
                    />
                    <Tooltip
                      formatter={(value, name) => {
                        if (value === null) return null;
                        return [
                          formatCurrency(value),
                          name === "spending" ? "Historical" : "Projected",
                        ];
                      }}
                      labelFormatter={(label) => `Date: ${label}`}
                      contentStyle={{
                        backgroundColor: isDarkMode
                          ? "rgba(30, 30, 30, 0.95)"
                          : "rgba(255, 255, 255, 0.95)",
                        border: isDarkMode
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "1px solid rgba(0,0,0,0.2)",
                        borderRadius: 8,
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        paddingTop: 20,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="spending"
                      stroke="#e91e63"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#e91e63" }}
                      activeDot={{ r: 6 }}
                      name="Historical Spending"
                      connectNulls={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="projected"
                      stroke="#2196f3"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ r: 4, fill: "#2196f3" }}
                      activeDot={{ r: 6 }}
                      name="Projected Spending"
                      connectNulls={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <SPBox
                  p={4}
                  textAlign="center"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: ({ palette: { mode } }) =>
                      mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                  }}
                >
                  <TrendingUpIcon
                    sx={{ fontSize: 48, color: "text.secondary", mb: 1, opacity: 0.5 }}
                  />
                  <SPTypography variant="body2" color="text.secondary">
                    No spending data available for chart
                  </SPTypography>
                </SPBox>
              )}
            </Card>
          </SPBox>

          <Grid container spacing={4} sx={{ px: 3 }}>
            {/* Spending by Category */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: ({ palette: { mode } }) =>
                    mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                  background: ({ palette: { mode } }) =>
                    mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  border: ({ palette: { mode } }) =>
                    mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <SPBox display="flex" alignItems="center" mb={3}>
                  <SPBox
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: ({ palette: { mode } }) =>
                        mode === "dark" ? "rgba(25, 118, 210, 0.2)" : "rgba(25, 118, 210, 0.1)",
                      mr: 1.5,
                    }}
                  >
                    <CategoryIcon sx={{ fontSize: 28, color: "primary.main" }} />
                  </SPBox>
                  <SPTypography variant="h5" fontWeight="bold">
                    Spending by Category
                  </SPTypography>
                </SPBox>

                {analytics.spending_by_category && analytics.spending_by_category.length > 0 ? (
                  <SPBox>
                    {analytics.spending_by_category
                      .sort((a, b) => b.total - a.total)
                      .map((item, index) => {
                        const percentage =
                          maxCategorySpending > 0 ? (item.total / maxCategorySpending) * 100 : 0;
                        const categoryPercentage =
                          totalSpending > 0 ? (item.total / totalSpending) * 100 : 0;
                        return (
                          <SPBox
                            key={index}
                            mb={3}
                            p={2}
                            sx={{
                              borderRadius: 2,
                              backgroundColor: ({ palette: { mode } }) =>
                                mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                              transition: "background-color 0.2s ease",
                              "&:hover": {
                                backgroundColor: ({ palette: { mode } }) =>
                                  mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                              },
                            }}
                          >
                            <SPBox
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              mb={1.5}
                            >
                              <SPBox display="flex" alignItems="center" gap={1.5}>
                                <SPTypography variant="h5">
                                  {getCategoryIcon(item.category)}
                                </SPTypography>
                                <SPBox>
                                  <SPTypography
                                    variant="body1"
                                    fontWeight="bold"
                                    textTransform="capitalize"
                                    mb={0.25}
                                  >
                                    {item.category}
                                  </SPTypography>
                                  <SPTypography variant="caption" color="text.secondary">
                                    {categoryPercentage.toFixed(1)}% of total
                                  </SPTypography>
                                </SPBox>
                              </SPBox>
                              <SPBox textAlign="right">
                                <SPTypography
                                  variant="h6"
                                  fontWeight="bold"
                                  color={getCategoryColor(item.category) + ".main"}
                                >
                                  {formatCurrency(item.total)}
                                </SPTypography>
                              </SPBox>
                            </SPBox>
                            <LinearProgress
                              variant="determinate"
                              value={percentage}
                              sx={{
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: ({ palette: { mode } }) =>
                                  mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 5,
                                  backgroundColor: ({ palette }) =>
                                    palette[getCategoryColor(item.category)]?.main ||
                                    palette.primary.main,
                                },
                              }}
                            />
                          </SPBox>
                        );
                      })}
                  </SPBox>
                ) : (
                  <SPBox
                    p={4}
                    textAlign="center"
                    sx={{
                      borderRadius: 2,
                      backgroundColor: ({ palette: { mode } }) =>
                        mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                    }}
                  >
                    <CategoryIcon
                      sx={{ fontSize: 48, color: "text.secondary", mb: 1, opacity: 0.5 }}
                    />
                    <SPTypography variant="body2" color="text.secondary">
                      No category data available
                    </SPTypography>
                  </SPBox>
                )}
              </Card>
            </Grid>

            {/* Spending Over Time */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: ({ palette: { mode } }) =>
                    mode === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                  background: ({ palette: { mode } }) =>
                    mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  border: ({ palette: { mode } }) =>
                    mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <SPBox display="flex" alignItems="center" mb={3}>
                  <SPBox
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: ({ palette: { mode } }) =>
                        mode === "dark" ? "rgba(33, 150, 243, 0.2)" : "rgba(33, 150, 243, 0.1)",
                      mr: 1.5,
                    }}
                  >
                    <TimelineIcon sx={{ fontSize: 28, color: "info.main" }} />
                  </SPBox>
                  <SPTypography variant="h5" fontWeight="bold">
                    Spending Over Time
                  </SPTypography>
                </SPBox>

                {analytics.spending_over_time && analytics.spending_over_time.length > 0 ? (
                  <SPBox>
                    {analytics.spending_over_time.map((item, index) => {
                      const percentage =
                        maxTimeSpending > 0 ? (item.total / maxTimeSpending) * 100 : 0;
                      return (
                        <SPBox
                          key={index}
                          mb={3}
                          p={2}
                          sx={{
                            borderRadius: 2,
                            backgroundColor: ({ palette: { mode } }) =>
                              mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                            transition: "background-color 0.2s ease",
                            "&:hover": {
                              backgroundColor: ({ palette: { mode } }) =>
                                mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                            },
                          }}
                        >
                          <SPBox
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={1.5}
                          >
                            <SPBox display="flex" alignItems="center" gap={1.5}>
                              <CalendarTodayIcon
                                sx={{ fontSize: 20, color: "info.main", opacity: 0.7 }}
                              />
                              <SPBox>
                                <SPTypography variant="body1" fontWeight="medium">
                                  {formatDate(item.period)}
                                </SPTypography>
                                <SPTypography variant="caption" color="text.secondary">
                                  {percentage.toFixed(1)}% of peak
                                </SPTypography>
                              </SPBox>
                            </SPBox>
                            <SPTypography variant="h6" fontWeight="bold" color="info.main">
                              {formatCurrency(item.total)}
                            </SPTypography>
                          </SPBox>
                          <Box
                            sx={{
                              height: 10,
                              borderRadius: 5,
                              backgroundColor: ({ palette: { mode } }) =>
                                mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                height: "100%",
                                width: `${percentage}%`,
                                background: ({ palette: { mode } }) =>
                                  mode === "dark"
                                    ? "linear-gradient(90deg, rgba(33, 150, 243, 0.8) 0%, rgba(33, 150, 243, 0.6) 100%)"
                                    : "linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(33, 150, 243, 0.8) 100%)",
                                borderRadius: 5,
                                transition: "width 0.5s ease",
                                boxShadow: "0 2px 8px rgba(33, 150, 243, 0.3)",
                              }}
                            />
                          </Box>
                        </SPBox>
                      );
                    })}
                  </SPBox>
                ) : (
                  <SPBox
                    p={4}
                    textAlign="center"
                    sx={{
                      borderRadius: 2,
                      backgroundColor: ({ palette: { mode } }) =>
                        mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                    }}
                  >
                    <TimelineIcon
                      sx={{ fontSize: 48, color: "text.secondary", mb: 1, opacity: 0.5 }}
                    />
                    <SPTypography variant="body2" color="text.secondary">
                      No time series data available
                    </SPTypography>
                  </SPBox>
                )}
              </Card>
            </Grid>
          </Grid>
        </>
      )}

      {/* Empty State */}
      {!loading && !error && !analytics && (
        <SPBox sx={{ px: 3 }}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <SPTypography variant="body1" color="text.secondary">
              Select a date range to view analytics
            </SPTypography>
          </Card>
        </SPBox>
      )}
    </Container>
  );
}

export default Analytics;
