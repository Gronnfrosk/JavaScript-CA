import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";

export default function SeeCart() {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<div className="FixedCart mt-5">
			<div className="CartBlue bg-info rounded-start-pill">
				<Link ref={target} onClick={() => setShow(!show)}>
					<FaShoppingCart id="shopping-cart" className="fs-5 text-light" />
					<Overlay target={target.current} show={show} placement="right" className="z-4">
						{({ placement: _placement, arrowProps: _arrowProps, show: _show, popper: _popper, hasDoneInitialMeasure: _hasDoneInitialMeasure, ...props }) => (
							<div
								{...props}
								style={{
									zIndex: "4",
									backgroundColor: "Black",
									marginTop: "8px",

									padding: "0 7px",
									color: "white",

									borderRadius: 50,
									...props.style,
								}}
							>
								<span className="">4</span>
							</div>
						)}
					</Overlay>
				</Link>
			</div>
		</div>
	);
}

//export const ShopContext = createContext(null);
//
//const getDefaultCart = () => {
//	let cart = {};
//	for (let i = 1; i < PRODUCTS.length + 1; i++) {
//		cart[i] = 0;
//	}
//	return cart;
//};
//
//export const ShopContextProvider = (props) => {
//	const [cartItems, setCartItems] = useState(getDefaultCart());
//
//	const getTotalCartAmount = () => {
//		let totalAmount = 0;
//		for (const item in cartItems) {
//			if (cartItems[item] > 0) {
//				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//				totalAmount += cartItems[item] * itemInfo.price;
//			}
//		}
//		return totalAmount;
//	};
//
//	const addToCart = (itemId) => {
//		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//	};
//
//	const removeFromCart = (itemId) => {
//		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//	};
//
//	const updateCartItemCount = (newAmount, itemId) => {
//		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//	};
//
//	const checkout = () => {
//		setCartItems(getDefaultCart());
//	};
//
//	const contextValue = {
//		cartItems,
//		addToCart,
//		updateCartItemCount,
//		removeFromCart,
//		getTotalCartAmount,
//		checkout,
//	};
//
//	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
//};
