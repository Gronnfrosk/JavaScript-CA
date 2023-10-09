import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

export function SeeCart(props) {
	const productNumbers = localStorage.getItem("TotalCart");

	return (
		<div className="mt-5 " style={{ position: "fixed", top: "20px", right: "0", zIndex: "3" }}>
			<div className="bg-info rounded-start-pill cartBtn" style={{ padding: "12px 25px 12px 15px" }}>
				<Link to="/checkout">
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
				}}>
					{productNumbers}
				</Badge>
			</div>
		</div>
	);
}
