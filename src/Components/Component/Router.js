import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "../Layouts/GlobalLayout.js";
import Home from "../Layouts/HomePage";
import About from "../Layouts/AboutPage";
import ContactUs from "../Layouts/ContactPage";
import RouteNotFound from "../Layouts/NotFoundPage";
import Product from "../Layouts/ProductPage.js";
import Checkout from "../Layouts/CheckoutPage.js";
import Cart from "../Layouts/CartPage.js";
//import CheckoutSuccess from "../Layouts/CheckoutSuccessPage.js";

function Router() {
	const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
	const arrayItemsQty = cartItems.map((i) => i.qty)
	const arrayItemCost = cartItems.map((i) => [i.qty, i.discountedPrice].reduce((a, b) => a * b))

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );

	  localStorage.setItem('cartItems', JSON.stringify(cartItems))
	  localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty.reduce((a, b) => a + b, 0)))
	  localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost.reduce((a, b) => a + b, 0)))

		
	} else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);

	  localStorage.setItem('cartItems', JSON.stringify(cartItems))
	  localStorage.setItem('TotalCart', JSON.stringify(arrayItemsQty.reduce((a, b) => a + b, 0)))
	  localStorage.setItem('TotalCost', JSON.stringify(arrayItemCost.reduce((a, b) => a + b, 0)))
	  
	}
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
	  localStorage.setItem('cartItems', JSON.stringify(setCartItems))

    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
	  localStorage.setItem('cartItems', JSON.stringify(setCartItems))

    }
  };

  useEffect (() => {
	setCartItems(localStorage.getItem('cartItems')
	 ? JSON.parse(localStorage.getItem('cartItems'))
	 : []
	 )
  	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GlobalLayout onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}>
					<Route index element={<Home/>} />
					<Route path="about" element={<About />} />
					<Route path="contactUs" element={<ContactUs />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path=":id" element={<Product onAdd={onAdd}/>} />
					<Route path="*" element={<RouteNotFound />} />
					<Route path="cart" element={<Cart />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
