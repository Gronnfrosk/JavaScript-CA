import { CollapsibleNavbar } from "../Component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Component/Footer.js";
import "./GlobalStyle.css";
import { Outlet } from "react-router-dom";
import { SeeCart } from "../Component/Cart.js";
import React, { useState, useRef } from "react";


function GlobalLayout(props) {
	const { onRemove, onAdd, cartItems } = props;

	return (
		<>
			<CollapsibleNavbar />
			<SeeCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> 
			<Outlet />
			<Footer />
		</>
	);
}

export default GlobalLayout;
