import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../../Components/Layouts/CheckoutPages/CheckoutPage.scss";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

export default function ChartList(props) {
  const {
    cartItems,
    onAdd,
    onRemove,
    arrayItemCostCheckout,
    arrayItemsQtyCheckout,
  } = props;

  if (cartItems.length !== 0) {
    const itemsPriceSave = cartItems.reduce(
      (a, b) => a + b.qty * (b.price - b.discountedPrice),
      0,
    );

    return (
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Image src={item.imageUrl} alt="Image of product" thumbnail />
            </td>
            <td>{item.title}</td>
            <td className="text-center">
              <Button
                variant="light border border-dark"
                onClick={() => onAdd(item)}
              >
                +
              </Button>
              <Button variant="dark fw-bold" onClick={() => onRemove(item)}>
                -
              </Button>
            </td>
            <td>
              {item.qty} {"  x  "} {item.discountedPrice.toFixed(0)}
            </td>
            <td>${(item.qty * item.discountedPrice).toFixed(0)}</td>
          </tr>
        ))}
        <tr className="totalCart">
          <td>Total</td>
          <td></td>
          <td>{arrayItemsQtyCheckout}</td>
          <td className="text-success text-end">Save:</td>
          <td className="text-success">${itemsPriceSave.toFixed(0)}</td>
          <td>${arrayItemCostCheckout.toFixed(0)}</td>
        </tr>
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td style={{ position: "absolute" }}>No product in cart</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    );
  }
}

//{cartItems.map((item, index) => (
//					<tr key={index} className="d-flex align-item-baseline">
//						<td >{index + 1}</td>
//						<td ><Image src={item.imageUrl} alt="Image of product" thumbnail /></td>
//						<td >{item.title}</td>
//						<td><Button variant="light border border-dark" onClick={() => onAdd(item)} >+</Button><Button variant="dark fw-bold" onClick={() => onRemove(item)}>-</Button></td>
//						<td>{item.qty} {"  x  "} {(item.discountedPrice).toFixed(0)}</td>
//						<td >${(item.qty * item.discountedPrice).toFixed(0)}</td>
//					</tr>
//				))}
//				<tr style={{ borderTop: "double 3px black" }}>
//					<td style={{ paddingTop: "15px" }}>Total</td>
//					<td></td>
//					<td style={{ paddingTop: "15px", paddingLeft: "20px" }}>{arrayItemsQtyCheckout}</td>
//					<td style={{ paddingTop: "15px", textAlign: "center", fontWeight: "bold", color: "green" }}>Save Total:</td>
//					<td style={{ paddingTop: "15px", fontWeight: "bold", color: "green" }}> ${itemsPriceSave.toFixed(0)}</td>
//					<td style={{ paddingTop: "15px" }}>${arrayItemCostCheckout.toFixed(0)}</td>
//
//				</tr>
