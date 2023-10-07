import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./Components/Layouts/GlobalLayout.js";
import Home from "./Components/Layouts/HomePage";
import About from "./Components/Layouts/AboutPage";
import ContactUs from "./Components/Layouts/ContactPage";
import RouteNotFound from "./Components/Layouts/NotFoundPage";
import Product from "./Components/Layouts/ProductPage.js";
import Checkout from "./Components/Layouts/CheckoutPage.js";
import Cart from "./Components/Layouts/CartPage.js";
import CheckoutSuccess from "./Components/Layouts/CheckoutSuccessPage.js";


function App() {
	const [cartItems, setCartItems] = useState([]);
	const arrayItemsQtyCheckout = (cartItems.map((i) => i.qty)).reduce((a, b) => a + b, 0)
	const arrayItemCostCheckout = (cartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))).reduce((a, b) => a + b, 0)

  	const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)

    if (exist) {
		const newCartItems = cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x);
		const arrayItemsQty = (newCartItems.map((i) => i.qty)).reduce((a, b) => a + b, 0)
		const arrayItemCost = (newCartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))).reduce((a, b) => a + b, 0)
		setCartItems(newCartItems)
		
		localStorage.setItem('cartItems', JSON.stringify(newCartItems))
		localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty))
		localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost))
	} else {
		const newCartItems = [...cartItems, { ...product, qty: 1 }];
		const arrayItemsQty = (newCartItems.map((i) => i.qty)).reduce((a, b) => a + b, 0)
		const arrayItemCost = (newCartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))).reduce((a, b) => a + b, 0)
		setCartItems(newCartItems);

		localStorage.setItem('cartItems', JSON.stringify(newCartItems))
		localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty))
		localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost))
	};
	}

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
		const newCartItems = cartItems.filter((x) => x.id !== product.id);
		const arrayItemsQty = (newCartItems.map((i) => i.qty)).reduce((a, b) => a + b, 0)
		const arrayItemCost = (newCartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))).reduce((a, b) => a + b, 0)
		setCartItems(newCartItems);
		localStorage.setItem('cartItems', JSON.stringify(newCartItems))
		localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty))
		localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost))
    } else {
		const newCartItems = cartItems.map((x) => 
		x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
		const arrayItemsQty = (newCartItems.map((i) => i.qty)).reduce((a, b) => a + b, 0)
		const arrayItemCost = (newCartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))).reduce((a, b) => a + b, 0)
		setCartItems(newCartItems);
        
	  localStorage.setItem('cartItems', JSON.stringify(newCartItems))
	  localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty))
	  localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost))
    }
  };

  useEffect (() => {
	setCartItems(localStorage.getItem('cartItems')
	 ? JSON.parse(localStorage.getItem('cartItems'))
	 : []
	 )
  	}, [])

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GlobalLayout onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}>
						<Route index element={<Home/>} />
						<Route path="about" element={<About />} />
						<Route path="contactUs" element={<ContactUs />} />
						<Route path="checkout" element={<Checkout arrayItemsQtyCheckout={arrayItemsQtyCheckout} arrayItemCostCheckout={arrayItemCostCheckout} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
						<Route path="checkoutSuccess" element={<CheckoutSuccess />} />
						<Route path=":id" element={<Product onAdd={onAdd}/>} />
						<Route path="*" element={<RouteNotFound />} />
						<Route path="cart" element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
