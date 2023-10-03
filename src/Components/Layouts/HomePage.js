import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

function Home() {
	const url = "https://api.noroff.dev/api/v1/online-shop";

	// State for holding Loaded products, search products, loading, error state.
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [search, setSearch] = useState("");

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
				setData(json);
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
							<Card style={{ width: "18rem", boxShadow: "5px 5px 5px rgba(155, 155, 155, 0.50)", border: "none" }} key={index}>
								<Card.Img variant="top" src={item.imageUrl} />
								<Card.Body>
									<Card.Title key={index}>{item.title}</Card.Title>
									<Card.Text>{item.description}</Card.Text>
									<Button variant="info" href={item.id}>
										View product
									</Button>
								</Card.Body>
							</Card>
						))}
				</div>
			</div>
		</div>
	);
}

export default Home;
