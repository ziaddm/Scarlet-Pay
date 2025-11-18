const cardWithColoredShadowCode = `// @mui material components
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";

// Scarlet Pay 2 PRO React examples
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import image from "assets/images/products/product-1-min.jpg";

function CardWithColoredShadow() {
  return (
    <SPBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <TransparentBlogCard
          image={image}
          title="MateLabs mixes machine learning with IFTTT"
          description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          action={{
            type: "internal",
            route: "/sections/page-sections/general-cards",
            color: "info",
            label: "Read More",
          }}
        />
      </Grid>
    </SPBox>
  );
}

export default CardWithColoredShadow;`;

export default cardWithColoredShadowCode;
