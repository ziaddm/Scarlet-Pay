const socialButtonsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPSocialButton from "components/SPSocialButton";

function SocialButtons() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <SPBox display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
            <SPSocialButton color="facebook">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-facebook" />
              facebook
            </SPSocialButton>
            <SPSocialButton color="twitter">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-twitter" />
              twitter
            </SPSocialButton>
            <SPSocialButton color="instagram">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-instagram" />
              instagram
            </SPSocialButton>
            <SPSocialButton color="github">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-github" />
              github
            </SPSocialButton>
            <SPSocialButton color="pinterest">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-pinterest" />
              pinterest
            </SPSocialButton>
            <SPSocialButton color="youtube">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-youtube" />
              youtube
            </SPSocialButton>
            <SPSocialButton color="vimeo">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-vimeo" />
              vimeo
            </SPSocialButton>
            <SPSocialButton color="slack">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-slack" />
              slack
            </SPSocialButton>
            <SPSocialButton color="dribbble">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-dribbble" />
              dribbble
            </SPSocialButton>
            <SPSocialButton color="reddit">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-reddit" />
              reddit
            </SPSocialButton>
            <SPSocialButton color="tumblr">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-tumblr" />
              tumblr
            </SPSocialButton>
            <SPSocialButton color="linkedin">
              <SPBox component="i" color="inherit" mr={0.5} className="fab fa-linkedin" />
              linkedin
            </SPSocialButton>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default SocialButtons;`;

export default socialButtonsCode;
