import React from "react";

export function Discount(props) {
	const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = props.data;

	const discount = price - discountedPrice;

	if (discountedPrice === price) {
		return <div className="fs-3">${price}</div>;
	} else {
		return (
			<div>
				<div className="fs-3">${discountedPrice}</div>
				<div className="text-success text-center fw-semibold">Save - ${discount}</div>
			</div>
		);
	}
}
