const notificationModalCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import Icon from "@mui/material/Icon";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function NotificationModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <SPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <SPButton variant="gradient" color="error" onClick={toggleModal}>
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
              variant="gradient"
              bgColor="error"
              shadow="sm"
            >
              <SPBox
                display="flex"
                alginItems="center"
                justifyContent="space-between"
                py={3}
                px={2}
              >
                <SPTypography variant="h6" color="white">
                  Your attention is required
                </SPTypography>
                <CloseIcon
                  color="white"
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  onClick={toggleModal}
                />
              </SPBox>
              <Divider light sx={{ my: 0 }} />
              <SPBox p={6} textAlign="center" color="white">
                <Icon fontSize="large" color="inherit">
                  notifications_active
                </Icon>
                <SPTypography variant="h4" color="white" mt={3} mb={1}>
                  You should read this!
                </SPTypography>
                <SPTypography variant="body2" color="white" opacity={0.8} mb={2}>
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </SPTypography>
              </SPBox>
              <Divider light sx={{ my: 0 }} />
              <SPBox display="flex" justifyContent="space-between" py={2} px={1.5}>
                <SPButton color="white">ok, got it</SPButton>
                <SPButton variant="text" color="white" onClick={toggleModal}>
                  close
                </SPButton>
              </SPBox>
            </SPBox>
          </Slide>
        </Modal>
      </Container>
    </SPBox>
  );
}

export default NotificationModal;`;

export default notificationModalCode;
