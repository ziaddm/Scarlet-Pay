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
import Icon from "@mui/material/Icon";

// Core config
import { ROUTES } from "core/config";

// Dashboard routes for sidebar navigation
export const dashboardRoutes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: ROUTES.HOME,
  },
  {
    name: "Dashboard",
    icon: <Icon>dashboard</Icon>,
    route: ROUTES.DASHBOARD,
  },
  {
    name: "Analytics",
    icon: <Icon>analytics</Icon>,
    route: ROUTES.ANALYTICS,
  },
  {
    name: "Budgets",
    icon: <Icon>account_balance_wallet</Icon>,
    route: ROUTES.BUDGETS,
  },
  {
    name: "Cards",
    icon: <Icon>credit_card</Icon>,
    route: ROUTES.CARDS,
  },
  {
    name: "Transactions",
    icon: <Icon>receipt_long</Icon>,
    route: ROUTES.TRANSACTIONS,
  },
  {
    name: "Marketplace",
    icon: <Icon>shopping_cart</Icon>,
    route: ROUTES.MARKETPLACE,
  },
  {
    name: "Events",
    icon: <Icon>events</Icon>,
    route: ROUTES.EVENTS,
  },
  {
    name: "Restaurants",
    icon: <Icon>restaurant</Icon>,
    route: ROUTES.RESTAURANTS,
  },
  {
    name: "Map",
    icon: <Icon>map</Icon>,
    route: ROUTES.MAP,
  },
];
