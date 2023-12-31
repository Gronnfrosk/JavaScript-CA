import "./ProductPage.scss";
import { SpinnerLoad, ErrorLoad } from "../../Component/Spinner&error";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RouteNotFound from "../NotFoundPage/NotFoundPage";
import { ReviewsContent } from "../../Component/ReviewsProduct";
import { Discount } from "../../Component/DiscountPrize";
import { useGetProductApi } from "../../Component/ProductData";
import { useParams } from "react-router-dom";

function Product(props) {
  const params = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${params.id}`;
  const [data, isLoading, isError] = useGetProductApi(url);
  const { onAdd } = props;

  if (isLoading || !data) {
    return <SpinnerLoad />;
  }

  if (isError) {
    return <ErrorLoad />;
  }

  if (data.title !== undefined) {
    return (
      <div className="Product mt-3">
        <Card>
          <Card.Img
            variant="top"
            src={data.imageUrl}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <div className="mx-1 mb-4">
              <div className="d-flex justify-content-between align-items-baseline gap-3">
                <div className="d-flex align-items-baseline">
                  <div className="d-flex align-items-center">
                    <b className="border-bottom border-3 h-0 me-1">Price:</b>
                  </div>
                  <div className="text-center ms-2">
                    <Discount data={data} />
                  </div>
                </div>
                <Button
                  variant="info h-25"
                  className="addToCartBtn"
                  onClick={() => onAdd(data)}
                >
                  Add to cart
                </Button>
              </div>
              <Card.Title className="fs-2 fw-bold">{data.title}</Card.Title>
              <Card.Text className="description">
                <b>Description:</b>
              </Card.Text>
              <Card.Text>{data.description}</Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="mb-3 mx-1">
              <div className="text-muted mb-2 fw-bolder mx-1">Reviews:</div>
              <ReviewsContent data={data} />
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
