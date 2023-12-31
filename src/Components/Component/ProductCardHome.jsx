import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const ProductCardHome = (props) => {
  const {
    id,
    title,
    description,
    imageUrl,
  } = props.data;

  return (
    <Card
      key={id}
      style={{
        width: "18rem",
        boxShadow: "5px 5px 5px rgba(155, 155, 155, 0.50)",
        border: "none",
      }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "1/1",
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </div>
        <Button variant="info mt-3" href={id}>
          View product
        </Button>
      </Card.Body>
    </Card>
  );
};
