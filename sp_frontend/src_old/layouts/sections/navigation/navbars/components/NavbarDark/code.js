const navbarDarkCode = `// Scarlet Pay 2 PRO React components
import SPBox from "components/SPBox";

// Scarlet Pay 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <SPBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/scarlet-pay-pro-react",
          label: "buy now",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </SPBox>
  );
}

export default NavbarDark;`;

export default navbarDarkCode;
