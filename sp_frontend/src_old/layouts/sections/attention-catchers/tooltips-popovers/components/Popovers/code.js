const popoversCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPButton from "components/SPButton";
import SPTypography from "components/SPTypography";

function Popovers() {
  const [popover, setPopover] = useState(null);
  const [popoverOrigin, setPopoverOrigin] = useState({
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });

  const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
  const closePopover = () => setPopover(null);

  const popoverTemplate = (
    <Popover open={Boolean(popover)} anchorEl={popover} onClose={closePopover} {...popoverOrigin}>
      <SPBox bgColor="white" py={1.5} px={2} lineHeight={0.8}>
        <SPTypography variant="caption" color="text">
          That&apos;s the main thing people are controlled
          <br /> by! Thoughts- their perception of themselves!
        </SPTypography>
      </SPBox>
    </Popover>
  );

  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <SPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on top
            </SPButton>
            <SPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                });
              }}
            >
              popover on right
            </SPButton>
            <SPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                });
              }}
            >
              popover on left
            </SPButton>
            <SPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on bottom
            </SPButton>
          </Stack>
        </Grid>
        {popoverTemplate}
      </Container>
    </SPBox>
  );
}

export default Popovers;`;

export default popoversCode;
