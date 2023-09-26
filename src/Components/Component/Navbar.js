import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" data-bs-theme="dark" bg={"dark"} className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">eCom</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/About">About</Nav.Link>
						<Nav.Link href="/ContactUs">Contact</Nav.Link>
						<NavDropdown title="Products" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="/Product1">Product type 1</NavDropdown.Item>
							<NavDropdown.Item href="/Product2">Product type 2</NavDropdown.Item>
							<NavDropdown.Item href="/Product3">Product type 3</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/All">All products</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Shop</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag text-success" viewBox="0 0 16 16">
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
							</svg>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleNavbar;
