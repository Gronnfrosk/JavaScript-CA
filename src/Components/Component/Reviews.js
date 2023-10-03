export function ReviewsContent(data) {
	const dataReviews = data.reviews;

	if (dataReviews.length !== 0) {
		return (
			<div>
				{dataReviews.map((review, index) => (
					<div className="row g-5 py-2">
						<div className="col-4 text-center">
							<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-2 mb-2">
								<span class="badge">{review.rating}</span>
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
				<div>Currently no reviews yet on this product</div>
			</div>
		);
	}
}
