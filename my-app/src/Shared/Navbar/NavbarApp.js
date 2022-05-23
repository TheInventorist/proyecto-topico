import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';

const NavbarApp = () => {
    return(
        <div>
            <Navbar bg="dark" variant='danger' expand="lg">
            <Container>
                <Navbar.Brand href="#home">MY Super APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contactanos</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cartas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Servicios medicos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bots</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Actividades</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavbarApp;