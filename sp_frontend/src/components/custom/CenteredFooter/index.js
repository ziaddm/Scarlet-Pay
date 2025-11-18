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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

// Scarlet Pay 2 PRO React components
import SPBox from "components/base/SPBox";
import SPTypography from "components/base/SPTypography";

// Core
import { useTheme } from "core/context";

function CenteredFooter({
  company = { href: "https://www.scarlet-pay.com/", name: "Scarlet Pay Team" },
  links = [
    { href: "https://www.scarlet-pay.com/", name: "Company" },
    { href: "https://www.scarlet-pay.com/presentation", name: "About Us" },
    { href: "https://www.scarlet-pay.com/presentation", name: "Team" },
    { href: "https://www.scarlet-pay.com/templates/react", name: "Products" },
    { href: "https://www.scarlet-pay.com/blog", name: "Blog" },
    { href: "https://www.scarlet-pay.com/license", name: "License" },
  ],
  socials = [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/ScarletPay/" },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://twitter.com/scarletpay",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/scarletpay/",
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: "https://www.pinterest.com/scarletpay/",
    },
    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/scarlet-pay" },
  ],
  light = false,
}) {
  const { mode } = useTheme();
  const { href, name } = company;

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <SPTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      sx={{
        color: ({ palette: { mode, text } }) =>
          mode === "dark" ? text.main : text.secondary || "#7b809a",
        fontWeight: "regular",
        "&:hover": {
          color: ({ palette: { primary } }) => primary.main,
        },
      }}
    >
      {link.name}
    </SPTypography>
  ));

  const renderSocials = socials.map((social) => (
    <SPTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      sx={{
        color: ({ palette: { mode, text } }) =>
          mode === "dark" ? text.main : text.secondary || "#7b809a",
        fontWeight: "regular",
        "&:hover": {
          color: ({ palette: { primary } }) => primary.main,
        },
      }}
    >
      {social.icon}
    </SPTypography>
  ));

  return (
    <SPBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SPTypography
            variant="body2"
            sx={{
              color: ({ palette: { mode, text } }) =>
                mode === "dark" ? text.main : text.secondary || "#7b809a",
            }}
          >
            Copyright &copy; {year} Scarlet Pay by{" "}
            <SPTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{
                color: ({ palette: { mode, text } }) =>
                  mode === "dark" ? text.main : text.secondary || "#7b809a",
                "&:hover": {
                  color: ({ palette: { primary } }) => primary.main,
                },
              }}
            >
              {name}
            </SPTypography>
            .
          </SPTypography>
        </Grid>
      </Grid>
    </SPBox>
  );
}

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default CenteredFooter;
