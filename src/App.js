import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalLayout from "./Components/Layouts/GlobalLayout.js";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function Home() {
	const url = "https://api.noroff.dev/api/v1/online-shop";

	// State for holding Loaded, Loading, Error state.
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		// Function that gets our products
		async function getData() {
			try {
				// Reset the error state in case there is an error previously
				setIsError(false);
				// Turn on the loading state each time we do an API call
				setIsLoading(true);
				const response = await fetch(url);
				const json = await response.json();
				setPosts(json);
				// Clear the loading state once we've successfully got our data
				setIsLoading(false);
			} catch (error) {
				// Clear the loading state if we get an error and then
				// set our error state to true
				setIsLoading(false);
				setIsError(true);
			}
		}

		getData();
	}, []);

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
			<div className="pt-3 ">
				<h1>Welcome to eCom</h1>
			</div>
			<div className="d-flex flex-wrap justify-content-center gap-3 m-5 p-5">
				{posts.map((post) => (
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={post.imageUrl} />
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>{post.description}</Card.Text>
							<Button variant="primary">View product</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="pt-3 w-75 m-auto pb-5">
			<h1>About eCom</h1>
			<Image src="showing-cart-trolley-shopping-online-sign-graphic.jpg" alt="eCom about picture" Style="max-width: 300px; width: 100%" thumbnail />
			<Card border="info" style={{ width: "100%", margin: "40px 0" }}>
				<Card.Header>Established in 2023</Card.Header>
				<Card.Body>
					<Card.Title>Who are we?</Card.Title>
					<div className="text-start">
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title
							and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some
							quick example text to build on the card title and make up the bulk of the card's content.
							<br />
							<br />
							Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title
							and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some
							quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and
							make up the bulk of the card's content.
						</Card.Text>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

function ContactUs() {
	return <div>Contact us</div>;
}

function Products() {
	return <div>Products</div>;
}

function Product() {
	let params = useParams();
	console.log(params);
	return <div>Individual product page: {params.id}</div>;
}

function RouteNotFound() {
	return (
		<div className=" m-auto mt-5">
			<img src="ORFI0N0.jpg" alt="Error! Page not found." Style="max-width: 500px; width: 100%" />
		</div>
	);
}

function App() {
	return (
		<div>
			<div className="App">
				<GlobalLayout />
				<Routes>
					<Route index element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="ContactUs" element={<ContactUs />} />
					<Route path="Products" element={<Products />} />
					<Route path="product/:id" element={<Product />} />
					<Route path="*" element={<RouteNotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
