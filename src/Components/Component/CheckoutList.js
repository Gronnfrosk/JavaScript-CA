import React, { useState, useRef } from "react";
import Image from "react-bootstrap/Image";

import Button from 'react-bootstrap/Button';

export default function ChartList(props) {
	const { cartItems, onAdd, onRemove, arrayItemCostCheckout, arrayItemsQtyCheckout} = props;
	const itemsPriceSave = cartItems.reduce((a, b) => a + b.qty * b.discountPrice, 0);

	if (cartItems.length !== 0) {
		return ( 
		<tbody>
			{cartItems.map((item, index) => (
				<tr key={index}>
					<td style={{ paddingTop: "20px"}}>{index + 1}</td>
					<td><Image src={item.imageUrl}  alt="Image of product" style={{ maxHeight: "50px", width: "auto"}} thumbnail /></td>
					<td style={{ paddingTop: "20px"}}>{item.title}</td>
					<td style={{ paddingTop: "10px", textAlign: "center"}}><Button variant="light border border-dark" onClick={() => onAdd(item)} style={{ height: "fit-content", width: "35px", margin: "5px"}}>+</Button><Button variant="dark fw-bold" onClick={() => onRemove(item)} style={{ height: "fit-content", width: "35px", margin: "5px"}}>-</Button></td>
					<td style={{ paddingTop: "20px"}}>{item.qty} {"  x  "} {(item.discountedPrice).toFixed(0)}</td>
					<td style={{ paddingTop: "20px"}}>{(item.qty * item.discountedPrice).toFixed(0)}</td>
				</tr>
			))}
			<tr style={{borderTop: "double 3px black"}}>
				<td style={{ paddingTop: "20px"}}>Total</td>
				<td></td>
				<td style={{ paddingTop: "20px", paddingLeft: "20px"}}>{arrayItemsQtyCheckout}</td>
				<td style={{ paddingTop: "10px", textAlign: "center"}}><Button variant="dark" onClick = {() => localStorage.clear()} style={{ height: "fit-content", width: "35px", margin: "5px"}}>X</Button><Button variant="light border border-dark" style={{ height: "fit-content", width: "35px", margin: "5px", visibility: "hidden"}}>+</Button></td>
				<td style={{ paddingTop: "20px"}}>Clear cart</td>
				<td style={{ paddingTop: "20px"}}>{arrayItemCostCheckout.toFixed(0)}</td>
				
        	</tr>
		</tbody>
		)
	} else {
		return (
      <tbody>
        <tr>
			<td>1</td>
			<td></td>
			<td></td>
			<td style={{ position: "absolute"}}>No product in cart</td>
			<td></td>
			<td></td>
		</tr>
		</tbody>
	)}
}