export function Discount(data) {
	const discount = data.price - data.discountedPrice;

	if (data.discountedPrice === data.price) {
		return <div className="fs-3">${data.price}</div>;
	} else {
		return (
			<>
				<div className="fs-3">${data.discountedPrice}</div>
				<div className="text-success text-center fw-semibold">Save - ${discount}</div>
			</>
		);
	}
}
