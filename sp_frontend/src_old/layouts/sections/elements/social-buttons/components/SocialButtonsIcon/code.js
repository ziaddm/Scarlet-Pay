const socialButtonsIconCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPSocialButton from "components/SPSocialButton";

function SocialButtonsIcon() {
  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <SPBox display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
            <SPSocialButton color="facebook" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-facebook" />
            </SPSocialButton>
            <SPSocialButton color="twitter" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-twitter" />
            </SPSocialButton>
            <SPSocialButton color="instagram" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-instagram" />
            </SPSocialButton>
            <SPSocialButton color="github" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-github" />
            </SPSocialButton>
            <SPSocialButton color="pinterest" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-pinterest" />
            </SPSocialButton>
            <SPSocialButton color="youtube" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-youtube" />
            </SPSocialButton>
            <SPSocialButton color="vimeo" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-vimeo" />
            </SPSocialButton>
            <SPSocialButton color="slack" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-slack" />
            </SPSocialButton>
            <SPSocialButton color="dribbble" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-dribbble" />
            </SPSocialButton>
            <SPSocialButton color="reddit" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-reddit" />
            </SPSocialButton>
            <SPSocialButton color="tumblr" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-tumblr" />
            </SPSocialButton>
            <SPSocialButton color="linkedin" iconOnly>
              <SPBox component="i" color="inherit" className="fab fa-linkedin" />
            </SPSocialButton>
          </SPBox>
        </Grid>
      </Container>
    </SPBox>
  );
}

export default SocialButtonsIcon;`;

export default socialButtonsIconCode;
