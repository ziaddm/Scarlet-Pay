const tableOneCode = `// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";
import SPBadge from "components/SPBadge";
import SPAvatar from "components/SPAvatar";
import SPTypography from "components/SPTypography";

// Scarlet Pay 2 PRO React examples
import Table from "examples/Tables/Table";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Components
function Author({ image, name, email }) {
  return (
    <SPBox display="flex" alignItems="center" px={1} py={0.5}>
      <SPBox mr={2}>
        <SPAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SPBox>
      <SPBox display="flex" flexDirection="column">
        <SPTypography variant="button" fontWeight="medium">
          {name}
        </SPTypography>
        <SPTypography variant="caption" color="secondary">
          {email}
        </SPTypography>
      </SPBox>
    </SPBox>
  );
}

// Typechecking props for the Author
Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function Role({ job, org }) {
  return (
    <SPBox display="flex" flexDirection="column">
      <SPTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SPTypography>
      <SPTypography variant="caption" color="secondary">
        {org}
      </SPTypography>
    </SPBox>
  );
}

// Typechecking props for the Role
Role.propTypes = {
  job: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
};

function TableOne() {
  const { columns, rows } = {
    columns: [
      { name: "author", align: "left" },
      { name: "function", align: "left" },
      { name: "status", align: "center" },
      { name: "employed", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Role job="Manager" org="Organization" />,
        status: (
          <SPBadge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Role job="Programator" org="Developer" />,
        status: (
          <SPBadge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            11/01/19
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Role job="Executive" org="Projects" />,
        status: (
          <SPBadge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            19/09/17
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Role job="Programator" org="Developer" />,
        status: (
          <SPBadge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            24/12/08
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
      {
        author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Role job="Manager" org="Executive" />,
        status: (
          <SPBadge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            04/10/21
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Role job="Programtor" org="Developer" />,
        status: (
          <SPBadge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <SPTypography variant="caption" color="secondary" fontWeight="medium">
            14/09/20
          </SPTypography>
        ),
        action: (
          <SPTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SPTypography>
        ),
      },
    ],
  };

  return (
    <SPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Table columns={columns} rows={rows} />
        </Grid>
      </Container>
    </SPBox>
  );
}

export default TableOne;`;

export default tableOneCode;
