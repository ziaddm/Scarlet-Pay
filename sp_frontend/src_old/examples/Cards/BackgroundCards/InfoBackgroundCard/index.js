/**
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

function InfoBackgroundCard({ image, icon, title, label = "" }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { gradients },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.8),
          rgba(gradients.dark.state, 0.8)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      })}
    >
      <SPBox width="100%" p={3}>
        <SPTypography variant="h3" color="white">
          {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
        </SPTypography>
      </SPBox>
      <SPBox width="100%" pt={1} pb={2} px={3} lineHeight={1}>
        <SPTypography variant="h4" color="white">
          {title}
        </SPTypography>
        {label && (
          <SPTypography
            variant="caption"
            textTransform="uppercase"
            fontWeight="bold"
            color="white"
            opacity={0.7}
          >
            {label}
          </SPTypography>
        )}
      </SPBox>
    </Card>
  );
}

// Typechecking props for the InfoBackgroundCard
InfoBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InfoBackgroundCard;
