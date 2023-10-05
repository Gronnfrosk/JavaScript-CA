import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Components/Component/Router";

import { useSelector } from "react-redux";

function App() {
	const cart = useSelector((state) => state.cart.cart);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	localStorage.setItem("cart", JSON.stringify(cart));
	localStorage.setItem("totalAmount", totalAmount);
	localStorage.setItem("totalPrice", totalPrice);

	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;
