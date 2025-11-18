const simpleModalCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function SimpleModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <SPButton variant="gradient" color="info" onClick={toggleModal}>
            Launch Demo Modal
          </SPButton>
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <SPBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <SPBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <SPTypography variant="h5">Your modal title</SPTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </SPBox>
              <Divider sx={{ my: 0 }} />
              <SPBox p={2}>
                <SPTypography variant="body2" color="secondary" fontWeight="regular">
                  Society has put up so many boundaries, so many limitations on what&apos;s right
                  and wrong that it&apos;s almost impossible to get a pure thought out.
                  <br />
                  <br />
                  It&apos;s like a little kid, a little boy, looking at colors, and no one told him
                  what colors are good, before somebody tells you you shouldn&apos;t like pink
                  because that&apos;s for girls, or you&apos;d instantly become a gay two-year-old.
                </SPTypography>
              </SPBox>
              <Divider sx={{ my: 0 }} />
              <SPBox display="flex" justifyContent="space-between" p={1.5}>
                <SPButton variant="gradient" color="dark" onClick={toggleModal}>
                  close
                </SPButton>
                <SPButton variant="gradient" color="info">
                  save changes
                </SPButton>
              </SPBox>
            </SPBox>
          </Slide>
        </Modal>
      </Container>
    </SPBox>
  );
}

export default SimpleModal;`;

export default simpleModalCode;
