import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { SeeCart } from "../Component/Cart";

export function CollapsibleNavbar(props) {
  const { onRemove, onAdd, cartItems } = props;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">eCom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactUs">Contact</Nav.Link>
          </Nav>
          <SeeCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
