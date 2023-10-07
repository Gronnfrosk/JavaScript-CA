import React from "react";
import "./CheckoutPage.css"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ChartList from "../Component/CheckoutList"
import Table from 'react-bootstrap/Table';

function CheckoutLayout(props) {
	const { cartItems, onAdd, onRemove, arrayItemCostCheckout, arrayItemsQtyCheckout} = props;

	function buttonCheckoutCart() {
		if (cartItems.length === 0) {
			const checkoutbtn = <Button variant="success w-100 mb-5" onClick = {() => 
			localStorage.clear()} href="/CheckoutSuccess" disabled>Checkout</Button>
		
			return checkoutbtn
		} else {
			const checkoutbtn = <Button variant="success w-100 mb-5" onClick = {() => 
				localStorage.clear()} href="/CheckoutSuccess">Checkout</Button>
			
			return checkoutbtn
		}
		

	}

	return <>
	<div className="checkout pt-3 mb-5">
	<h1>Checkout</h1>
	<Alert variant="light w-75 mx-auto text-center py-1 pt-2 " >
          <p>Please take a look at your product list down below before completing the purchase. Click the checkout button if everthings ok.</p>
    </Alert>
	<Table responsive>
      <thead>
        <tr>
          	<th>#</th>
            <th>Image</th>
			<th>Product</th>
			<th></th>
            <th>item x price</th>
            <th> Total </th>
        </tr>
      </thead>
		<ChartList onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} arrayItemCostCheckout={arrayItemCostCheckout} arrayItemsQtyCheckout={arrayItemsQtyCheckout}/>
	  </Table>
	
	<div className= "mx-auto w-75">
	{buttonCheckoutCart()}
	</div>
	</div>
  </>

}

export default CheckoutLayout;

