import React from "react";

export function ReviewsContent(props) {
	const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = props.data;

	if (reviews.length !== 0 && reviews !== undefined) {
		return (
			<div>
				{reviews.map((review, index) => (
					<div key={index} className="row g-5 py-2">
						<div className="col-4 text-center">
							<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-2 mb-2">
								<span className="badge text-light bg-dark" >{review.rating}</span>
							</div>
							<p>Rating score</p>
						</div>
						<div className="col-8">
							<h4 className="fw-semibold mb-0 text-body-emphasis">{review.username}</h4>
							<p className="text-body-secondary">{review.description}</p>
						</div>
					</div>
				))}
			</div>
		);
	} else {
		return (
			<div className="mb-2">
				<p>Currently no reviews yet on this product</p>
			</div>
		);
	}
}
