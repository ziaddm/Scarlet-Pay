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
import Stack from "@mui/material/Stack";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPAvatar from "components/SPAvatar";
import SPTypography from "components/SPTypography";

function TransparentTeamCard({ image, name, position, description = "", socials = "" }) {
  return (
    <SPBox display="flex" flexDirection="column">
      <SPBox position="relative" width="max-content">
        <SPAvatar
          variant="rounded"
          size="xxl"
          src={image}
          alt={name}
          sx={{
            borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
            position: "relative",
            zIndex: 2,
          }}
        />
        <SPBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          zIndex={1}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.87)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </SPBox>
      <SPBox py={2}>
        <SPTypography variant="h5">{name}</SPTypography>
        <SPTypography variant="body2" color="text" mb={2}>
          {position}
        </SPTypography>
        <SPTypography variant="body2" color="text" mb={2}>
          {description}
        </SPTypography>
        <Stack direction="row" spacing={4} mt={3}>
          {socials}
        </Stack>
      </SPBox>
    </SPBox>
  );
}

// Typechecking props for the TransparentTeamCard
TransparentTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  socials: PropTypes.node,
};

export default TransparentTeamCard;
