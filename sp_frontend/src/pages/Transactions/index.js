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

import { useState, useMemo, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";
import SPButton from "components/base/SPButton";

// Features
import { useTransactions } from "features/transactions";

const CATEGORIES = [
  "All",
  "dining",
  "books",
  "transportation",
  "entertainment",
  "services",
  "other",
];

function Transactions() {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("transaction_date");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { transactions, loading, error, refetch } = useTransactions({});

  useEffect(() => {
    const filterObj = {
      skip: page * rowsPerPage,
      limit: rowsPerPage,
    };
    if (categoryFilter !== "All") {
      filterObj.category = categoryFilter;
    }
    if (startDate) {
      filterObj.start_date = new Date(startDate).toISOString();
    }
    if (endDate) {
      const endDateTime = new Date(endDate);
      endDateTime.setHours(23, 59, 59, 999);
      filterObj.end_date = endDateTime.toISOString();
    }
    refetch(filterObj);
  }, [page, rowsPerPage, categoryFilter, startDate, endDate, refetch]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = transactions.filter((row) => {
      const matchesSearch =
        row.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.payment_method?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });

    // Apply sorting
    if (orderBy) {
      filtered = [...filtered].sort((a, b) => {
        let aValue = a[orderBy];
        let bValue = b[orderBy];

        if (orderBy === "transaction_date" || orderBy === "created_at") {
          aValue = new Date(aValue).getTime();
          bValue = new Date(bValue).getTime();
        } else if (orderBy === "amount") {
          aValue = parseFloat(aValue);
          bValue = parseFloat(bValue);
        } else if (typeof aValue === "string") {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }

        if (order === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [transactions, searchQuery, orderBy, order]);

  // Pagination
  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredAndSortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredAndSortedData, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setStartDate("");
    setEndDate("");
    setPage(0);
  };

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
      if (isNaN(date.getTime())) {
        console.warn("Invalid date:", dateString);
        return "N/A";
      }
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Error formatting date:", dateString, error);
      return "N/A";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      dining: "primary",
      books: "info",
      transportation: "warning",
      entertainment: "success",
      services: "secondary",
      other: "default",
    };
    return colors[category] || "default";
  };

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <SPBox mb={6}>
        <SPBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <SPTypography variant="h4" fontWeight="bold">
            Transactions
          </SPTypography>
          <SPButton
            variant="outlined"
            color="info"
            size="medium"
            onClick={() => {
              const filterObj = {
                skip: page * rowsPerPage,
                limit: rowsPerPage,
              };
              if (categoryFilter !== "All") {
                filterObj.category = categoryFilter;
              }
              if (startDate) {
                filterObj.start_date = new Date(startDate).toISOString();
              }
              if (endDate) {
                const endDateTime = new Date(endDate);
                endDateTime.setHours(23, 59, 59, 999);
                filterObj.end_date = endDateTime.toISOString();
              }
              refetch(filterObj);
            }}
            startIcon={<RefreshIcon />}
            disabled={loading}
          >
            Refresh
          </SPButton>
        </SPBox>
        <SPTypography variant="body1" color="text">
          View and filter your transaction history. Transactions are automatically created when
          payments are completed.
        </SPTypography>
      </SPBox>

      {/* Error Message */}
      {error && (
        <SPBox mb={3} sx={{ px: 3 }}>
          <SPTypography variant="body2" color="error">
            Error: {error}
          </SPTypography>
        </SPBox>
      )}

      {/* Filters Section */}
      <Card
        sx={{
          mb: 3,
          mx: 3,
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <SPBox display="flex" flexWrap="wrap" gap={2} alignItems="center">
          {/* Search */}
          <TextField
            size="small"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchQuery("")}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 250 }}
          />

          {/* Category Filter */}
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setPage(0);
              }}
              label="Category"
            >
              {CATEGORIES.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Start Date */}
          <TextField
            size="small"
            type="date"
            label="Start Date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setPage(0);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ minWidth: 150 }}
          />

          {/* End Date */}
          <TextField
            size="small"
            type="date"
            label="End Date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setPage(0);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ minWidth: 150 }}
          />

          {/* Clear Filters */}
          <SPButton
            variant="outlined"
            color="secondary"
            size="small"
            onClick={clearFilters}
            sx={{ ml: "auto" }}
          >
            Clear Filters
          </SPButton>
        </SPBox>
      </Card>

      {/* Transactions Table */}
      <Card
        sx={{
          mx: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <TableContainer>
              <Table
                sx={{
                  tableLayout: "fixed",
                  width: "100%",
                  "& .MuiTableCell-root": {
                    padding: "12px 16px",
                    verticalAlign: "middle",
                  },
                  "& .MuiTableCell-head": {
                    backgroundColor: ({ palette: { grey } }) => grey[50],
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[2]} solid ${borderColor}`,
                    padding: "12px 16px",
                    fontWeight: 600,
                  },
                  "& .MuiTableCell-body": {
                    padding: "12px 16px",
                  },
                  "& .MuiTableSortLabel-root": {
                    "& .MuiTableSortLabel-icon": {
                      transition: "opacity 0.2s",
                    },
                  },
                }}
              >
                <colgroup>
                  <col style={{ width: "180px" }} />
                  <col style={{ width: "auto" }} />
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "150px" }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "transaction_date"}
                        direction={orderBy === "transaction_date" ? order : "asc"}
                        onClick={() => handleRequestSort("transaction_date")}
                      >
                        <SPTypography variant="caption" fontWeight="bold" color="secondary">
                          DATE
                        </SPTypography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "description"}
                        direction={orderBy === "description" ? order : "asc"}
                        onClick={() => handleRequestSort("description")}
                      >
                        <SPTypography variant="caption" fontWeight="bold" color="secondary">
                          DESCRIPTION
                        </SPTypography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="center">
                      <TableSortLabel
                        active={orderBy === "category"}
                        direction={orderBy === "category" ? order : "asc"}
                        onClick={() => handleRequestSort("category")}
                      >
                        <SPTypography variant="caption" fontWeight="bold" color="secondary">
                          CATEGORY
                        </SPTypography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        active={orderBy === "amount"}
                        direction={orderBy === "amount" ? order : "asc"}
                        onClick={() => handleRequestSort("amount")}
                      >
                        <SPTypography variant="caption" fontWeight="bold" color="secondary">
                          AMOUNT
                        </SPTypography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="center">
                      <SPTypography
                        variant="caption"
                        fontWeight="bold"
                        color="secondary"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        PAYMENT METHOD
                      </SPTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ py: 8 }}>
                        <SPTypography variant="body1" color="text.secondary">
                          {transactions.length === 0
                            ? "No transactions found"
                            : "No transactions match your filters"}
                        </SPTypography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedData.map((transaction) => {
                      // Debug: Log transaction data
                      if (process.env.NODE_ENV === "development") {
                        console.log("Transaction data:", transaction);
                      }
                      return (
                        <TableRow key={transaction.id} hover>
                          <TableCell>
                            <SPTypography variant="body2" color="text">
                              {formatDate(transaction.transaction_date || transaction.created_at)}
                            </SPTypography>
                          </TableCell>
                          <TableCell>
                            <SPTypography variant="body2" fontWeight="medium">
                              {transaction.description || "N/A"}
                            </SPTypography>
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={
                                transaction.category?.charAt(0).toUpperCase() +
                                  transaction.category?.slice(1) || "Other"
                              }
                              size="small"
                              color={getCategoryColor(transaction.category)}
                              sx={{ fontWeight: 500 }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <SPTypography variant="body2" fontWeight="bold" color="error">
                              {formatCurrency(transaction.amount)}
                            </SPTypography>
                          </TableCell>
                          <TableCell align="center">
                            <SPTypography variant="body2" color="text.secondary">
                              {transaction.payment_method?.charAt(0).toUpperCase() +
                                transaction.payment_method?.slice(1) || "N/A"}
                            </SPTypography>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              component="div"
              count={filteredAndSortedData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25, 50]}
            />
          </>
        )}
      </Card>
    </Container>
  );
}

export default Transactions;
