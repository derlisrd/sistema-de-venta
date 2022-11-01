import { Navbar, Button, Link, Text } from "@nextui-org/react";

function NavbarMenu() {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Sistema de venta
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Inicio</Navbar.Link>
        <Navbar.Link isActive href="#">
          Clientes
        </Navbar.Link>
        <Navbar.Link href="#">Precios</Navbar.Link>
        <Navbar.Link href="#">Nosotros</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Contacto
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Whatsapp
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
export default NavbarMenu;
