import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import Badge from 'react-bootstrap/Badge';

export function SeeCart(props) {
	const { onRemove, onAdd, cartItems } = props 
	const [show, setShow] = useState(false);
	const target = useRef(null);
	const countCartItems = cartItems.length;
	const productNumbers = localStorage.getItem("TotalCart");
	console.log(cartItems);
	console.log(countCartItems)

	return (
		<div className="FixedCart mt-5">
			<div className="CartBlue bg-info rounded-start-pill">
			<Link ref={target} onClick={() => setShow(!show)}>
				<FaShoppingCart id="shopping-cart" className="fs-5 text-light" />
			</Link>
			<Badge bg="dark" style={{
					position: "absolute",
					right: "3px",
					zIndex: "4",
					backgroundColor: "Black",
					marginTop: "8px",
					fontSize: "11px",
					padding: "5px 7px",
					color: "white",
					borderRadius: 50,
					...props.style,
				}}>{productNumbers}
			</Badge>
			</div>
		</div>
	);
}
