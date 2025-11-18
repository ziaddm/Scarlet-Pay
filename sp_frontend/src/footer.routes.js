// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Scarlet Pay 2 PRO React components
import SPTypography from "components/base/SPTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Scarlet Pay 2 PRO",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ScarletPay/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.scarlet-pay.com/presentation" },
        { name: "freebies", href: "https://www.scarlet-pay.com/templates/free" },
        { name: "premium tools", href: "https://www.scarlet-pay.com/templates/premium" },
        { name: "blog", href: "https://www.scarlet-pay.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.scarlet-pay.com/bits" },
        { name: "affiliate program", href: "https://www.scarlet-pay.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.scarlet-pay.com/contact-us" },
        { name: "knowledge center", href: "https://www.scarlet-pay.com/knowledge-center" },
        { name: "custom development", href: "https://services.scarlet-pay.com/" },
        { name: "sponsorships", href: "https://www.scarlet-pay.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.scarlet-pay.com/terms" },
        { name: "privacy policy", href: "https://www.scarlet-pay.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.scarlet-pay.com/license" },
      ],
    },
  ],
  copyright: (
    <SPTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Scarlet Pay by{" "}
      <SPTypography
        component="a"
        href="https://www.scarlet-pay.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Scarlet Pay Team
      </SPTypography>
      .
    </SPTypography>
  ),
};
