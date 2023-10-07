import React from "react";

export function Discount(props) {
	const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = props.data;

	const discount = (price - discountedPrice).toFixed(2);

	if (discountedPrice === price) {
		return <div className="fs-3">${price.toFixed(2)}</div>;
	} else {
		return (
			<div>
				<div className="fs-3">${discountedPrice.toFixed(2)}</div>
				<div className="text-success text-center fw-semibold">Save - ${discount}</div>
			</div>
		);
	}
}
