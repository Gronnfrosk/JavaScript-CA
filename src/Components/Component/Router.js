import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "../Layouts/GlobalLayout.js";

import Home from "../Layouts/HomePage";
import About from "../Layouts/AboutPage";
import ContactUs from "../Layouts/ContactPage";
import RouteNotFound from "../Layouts/NotFoundPage";
import Product from "../Layouts/ProductPage.js";
import Checkout from "../Layouts/CheckoutPage.js";
//import CheckoutSuccess from "../Layouts/CheckoutSuccessPage.js";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GlobalLayout />}>
					<Route index element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="ContactUs" element={<ContactUs />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path=":id" element={<Product />} />
					<Route path="*" element={<RouteNotFound />} />
					<Route path="online-shop/:id" element={<Product />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
