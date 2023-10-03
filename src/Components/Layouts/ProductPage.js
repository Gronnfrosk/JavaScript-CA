import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import RouteNotFound from "./NotFoundPage";
import { ReviewsContent } from "../Component/ReviewsProduct.js";
import { Discount } from "../Component/DiscountPrize";

function Product() {
	let params = useParams();
	const url = `https://api.noroff.dev/api/v1/online-shop/${params.id}`;
	//return <div>Individual Post ID: {params.id}</div>;

	const [data, setData] = useState([]);
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

	if (isLoading || !data) {
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

	if (data.title !== undefined) {
		return (
			<div className="Product">
				<Card>
					<Card.Img variant="top" src={data.imageUrl} />
					<Card.Body>
						<div className="mx-1 mb-4">
							<div className="d-flex justify-content-end align-items-baseline gap-3">
								<Card.Text className="d-flex align-items-baseline">
									<div className="d-flex align-items-center">
										<b className="border-bottom border-3 h-0 me-1">Price:</b>
									</div>
									<div className="text-center ms-2">{Discount(data)}</div>
								</Card.Text>
								<Button variant="info h-25">Add to cart</Button>
							</div>
							<Card.Title>{data.title}</Card.Title>
							<Card.Text>
								<b>Product description:</b>
								<br /> {data.description}
							</Card.Text>
						</div>
					</Card.Body>
					<Card.Footer>
						<div className="mb-3 mx-1">
							<div className="text-muted mb-2 fw-bolder mx-1">Reviews:</div>
							{ReviewsContent(data)}
						</div>
					</Card.Footer>
				</Card>
			</div>
		);
	} else {
		return <RouteNotFound />;
	}
}

export default Product;
