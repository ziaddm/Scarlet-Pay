/*
=========================================================
* Scarlet Pay 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/scarlet-pay-pro-react
* Copyright 2024 Scarlet Pay Team (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
import post1 from "assets/images/examples/color2.jpg";
import post2 from "assets/images/examples/color3.jpg";
import post3 from "assets/images/examples/color1.jpg";
import author1 from "assets/images/team-2.jpg";
import author2 from "assets/images/ivana-squares.jpg";
import author3 from "assets/images/marie.jpg";

function Posts() {
  return (
    <SPBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9} textAlign="center" mx="auto">
            <SPTypography variant="h3" mb={0.5}>
              See other articles
            </SPTypography>
            <SPTypography variant="body2" color="text" px={{ xs: 0, md: 6 }} mb={4}>
              Create a unique and beautiful blog posts. You can also connect your blog directly to
              Google Analytics to have a more detailed look.
            </SPTypography>
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post1}
              category={{ color: "primary", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author1,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post2}
              category={{ color: "info", label: "house" }}
              title="Really Housekeeping"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author2,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post3}
              category={{ color: "warning", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author3,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default Posts;
