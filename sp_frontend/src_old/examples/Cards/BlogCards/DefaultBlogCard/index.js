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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";
import SPAvatar from "components/SPAvatar";

function DefaultBlogCard({
  image,
  category = false,
  title,
  description,
  author = false,
  raised = true,
  action,
}) {
  const imageTemplate = (
    <>
      <SPBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        position="relative"
        zIndex={1}
      />
      <SPBox
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={
          raised
            ? {
                backgroundImage: `url(${image})`,
                transform: "scale(0.94)",
                filter: "blur(12px)",
                backgroundSize: "cover",
              }
            : {}
        }
      />
    </>
  );

  return (
    <Card>
      <SPBox position="relative" borderRadius="lg" mx={2} mt={raised ? -3 : 2}>
        {action.type === "internal" ? (
          <Link to={action.route}>{imageTemplate}</Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            {imageTemplate}
          </MuiLink>
        )}
      </SPBox>
      <SPBox p={3}>
        {category && (
          <SPTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
            sx={{ display: "block" }}
          >
            {category.label}
          </SPTypography>
        )}
        {action.type === "internal" ? (
          <Link to={action.route}>
            <SPTypography
              variant="h5"
              textTransform="capitalize"
              my={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </SPTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <SPTypography
              variant="h5"
              textTransform="capitalize"
              mt={2}
              mb={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </SPTypography>
          </MuiLink>
        )}
        <SPTypography variant="body2" component="p" color="text">
          {description}
        </SPTypography>
        {author && (
          <SPBox display="flex" alignItems="center" mt={3}>
            <SPAvatar
              src={author.image}
              alt={author.name}
              shadow="md"
              variant={raised ? "circular" : "rounded"}
            />
            <SPBox pl={2} lineHeight={0}>
              <SPTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </SPTypography>
              <SPTypography variant="caption" color="text">
                {author.date}
              </SPTypography>
            </SPBox>
          </SPBox>
        )}
      </SPBox>
    </Card>
  );
}

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  raised: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
