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
import Card from "@mui/material/Card";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Privacy() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
          label: "buy now",
          color: "dark",
        }}
        sticky
      />
      <SPBox component="section" pt={20} pb={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <SPBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <SPTypography variant="h3" color="white">
                    Privacy & Policy
                  </SPTypography>
                  <SPTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: Sept 07 2021
                  </SPTypography>
                </SPBox>
                <SPBox pb={6} px={6}>
                  <SPTypography variant="h5" mt={6} mb={3}>
                    Introduction
                  </SPTypography>
                  <SPTypography variant="body2" color="text">
                    At Scarlet Pay Team, accessible{" "}
                    <SPTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href="https://www.creative-tim.com"
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      here
                    </SPTypography>
                    , one of our main priorities is the privacy of our visitors. This Privacy Policy
                    document contains types of information that is collected and recorded by Website
                    Name and how we use it.
                    <br />
                    <br />
                    If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us through email at hello@creative-tim.com
                    <br />
                    <br />
                    This privacy policy applies only to our online activities and is valid for
                    visitors to our website with regards to the information that they shared and/or
                    collect in{" "}
                    <SPTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href="https://www.creative-tim.com"
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      Scarlet Pay Team
                    </SPTypography>
                    . This policy is not applicable to any information collected offline or via
                    channels other than this website.
                  </SPTypography>
                  <SPTypography variant="h5" mt={6} mb={3}>
                    Managing Your Information
                  </SPTypography>
                  <SPTypography variant="body2" color="text">
                    Unless otherwise stated, Scarlet Pay Team and/or its licensors own the intellectual
                    property rights for all material on Scarlet Pay Team. All intellectual property
                    rights are reserved. You may access this from Scarlet Pay Team for your own personal
                    use subjected to restrictions set in these terms and conditions.
                  </SPTypography>
                  <SPTypography variant="body2" color="text">
                    You must not:
                  </SPTypography>
                  <SPBox component="ul" my={3} ml={6}>
                    <SPBox component="li">
                      <SPTypography variant="body2" color="text" fontWeight="regular">
                        Republish material from Scarlet Pay Team
                      </SPTypography>
                    </SPBox>
                    <SPBox component="li">
                      <SPTypography variant="body2" color="text" fontWeight="regular">
                        Sell, rent or sub-license material from Scarlet Pay Team
                      </SPTypography>
                    </SPBox>
                    <SPBox component="li">
                      <SPTypography variant="body2" color="text" fontWeight="regular">
                        Reproduce, duplicate or copy material from Scarlet Pay Team
                      </SPTypography>
                    </SPBox>
                    <SPBox component="li">
                      <SPTypography variant="body2" color="text" fontWeight="regular">
                        Redistribute content from Scarlet Pay Team
                      </SPTypography>
                    </SPBox>
                  </SPBox>
                  <SPTypography variant="body2" color="text">
                    This Agreement shall begin on the date hereof. Our Terms and Conditions were
                    created with the help of the{" "}
                    <SPTypography
                      variant="body2"
                      color="text"
                      component="a"
                      href="https://www.creative-tim.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms And Conditions Generator
                    </SPTypography>{" "}
                    and the{" "}
                    <SPTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href="https://www.creative-tim.com"
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      Privacy Policy Generator
                    </SPTypography>
                    .
                  </SPTypography>
                  <SPTypography variant="body2" color="text">
                    Parts of this website offer an opportunity for users to post and exchange
                    opinions and information in certain areas of the website. Scarlet Pay Team does not
                    filter, edit, publish or review Comments prior to their presence on the website.
                    Comments do not reflect the views and opinions of Scarlet Pay Team,its agents and/or
                    affiliates. Comments reflect the views and opinions of the person who post their
                    views and opinions. To the extent permitted by applicable laws, Scarlet Pay Team
                    shall not be liable for the Comments or for any liability, damages or expenses
                    caused and/or suffered as a result of any use of and/or posting of and/or
                    appearance of the Comments on this website.
                  </SPTypography>
                  <SPTypography variant="body2" color="text">
                    Scarlet Pay Team reserves the right to monitor all Comments and to remove any
                    Comments which can be considered inappropriate, offensive or causes breach of
                    these Terms and Conditions.
                  </SPTypography>
                  <SPTypography variant="h5" mt={6} mb={3}>
                    Security
                  </SPTypography>
                  <SPTypography variant="body2" color="text" fontWeight="regular">
                    We shall not be hold responsible for any content that appears on your Website.
                    You agree to protect and defend us against all claims that is rising on your
                    Website. No link(s) should appear on any Website that may be interpreted as
                    libelous, obscene or criminal, or which infringes, otherwise violates, or
                    advocates the infringement or other violation of, any third party rights.
                  </SPTypography>
                </SPBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SPBox>
      <SPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </SPBox>
    </>
  );
}

export default Privacy;
