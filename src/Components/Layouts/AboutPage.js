import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
	return (
		<div className="pt-3 w-75 m-auto pb-5">
			<h1>About eCom</h1>
			<Image src="showing-cart-trolley-shopping-online-sign-graphic.jpg" alt="eCom about picture" style={{ maxWidth: "300px", width: "100%", display: "flex", margin: "auto"}} thumbnail />
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

export default About;
