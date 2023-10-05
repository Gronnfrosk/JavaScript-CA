import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import SeeCart from "../Component/Cart";
import { ProductCardHome } from "../Component/ProductCardHome.jsx";
import { AllProducts } from "../Component/ProductData.js";

function Home() {
	const [search, setSearch] = useState("");
	const [data, isLoading, isError] = AllProducts();

	if (isLoading) {
		return (
			<Spinner animation="border" role="status" variant="info">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	if (isError) {
		return (
			<Alert variant="danger">
				<Alert.Heading>Oh snap! Error loading data!</Alert.Heading>
				<p>Try refreshing the page. If that does not work try again later.</p>
			</Alert>
		);
	}

	return (
		<div>
			<SeeCart />
			<div className="pt-3 pb-3">
				<h1>Welcome to eCom</h1>
			</div>
			<div className="search-bar-container">
				<Form className="input-wrapper d-flex flex-column p-0">
					<InputGroup className="input-wrapper w-100 align-items-center">
						<FaSearch id="search-icon" />
						<Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search contacts" className="border-0" id="moreInputStyle" />
					</InputGroup>
				</Form>
				<Alert variant="info position-absolute searchAlert">
					<Alert.Heading>No Products found...</Alert.Heading>
				</Alert>
				<div className="d-flex flex-wrap justify-content-center gap-3 p-5 mt-4 mb-5 w-100" id="Results">
					{data
						.filter((item) => {
							return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search);
						})
						.map((item, index) => (
							<ProductCardHome key={index} data={item} />
						))}
				</div>
			</div>
		</div>
	);
}

export default Home;
