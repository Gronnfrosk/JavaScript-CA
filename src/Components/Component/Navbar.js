import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

export function CollapsibleNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" data-bs-theme="dark" bg={"dark"} className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">eCom</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/contactUs">Contact</Nav.Link>
						<NavDropdown title="Products" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="/Product1">Product type 1</NavDropdown.Item>
							<NavDropdown.Item href="/Product2">Product type 2</NavDropdown.Item>
							<NavDropdown.Item href="/Product3">Product type 3</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
