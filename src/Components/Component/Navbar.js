import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

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
						<Nav.Link eventKey={2} href="/checkout">
							<FaShoppingCart id="shopping-cart" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleNavbar;
