import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ShopContext } from "./ShopContextProvider"

export const ProductCardHome = (props) => {
    const {id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = props.data

    return (
        <Card key={id} style={{ width: "18rem", boxShadow: "5px 5px 5px rgba(155, 155, 155, 0.50)", border: "none" }} >
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="info" href={id}>
                    View product
                </Button>
            </Card.Body>
        </Card>
    ) 
}


