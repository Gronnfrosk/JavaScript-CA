import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Components/Component/Router";

//import GlobalLayout from "./Components/Layouts/GlobalLayout.js";
//import { useParams } from "react-router-dom";
//import AboutLayout from "./Components/Layouts/AboutPage.js";
//import ContactLayout from "./Components/Layouts/ContactPage.js";
//import ProductLayout from "./Components/Layouts/ProductPage.js";
//import CheckoutLayout from "./Components/Layouts/CheckoutPage.js";
//import CheckoutSuccessLayout from "./Components/Layouts/CheckoutSuccessPage.js";
//import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
//import Alert from "react-bootstrap/Alert";
//import Spinner from "react-bootstrap/Spinner";
//import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
//import { FaSearch } from "react-icons/fa";

function App() {
	return (
		<div>
			<div className="App">
				<Router />
			</div>
		</div>
	);
}

export default App;
