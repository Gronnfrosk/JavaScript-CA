import React from "react";
import Alert from 'react-bootstrap/Alert';

function CheckoutSuccessLayout() {
	return (
		<div className="">
			<div className=" m-auto mt-5 text-center">
				<img src="SuccessImg.jpg" alt="Purchase was successful." />
			</div>
			<Alert variant="info" className="mt-4 mx-auto text-center" style={{maxWidth: "400px"}}>
				Your order is now placed in our systems!<br/>
				<Alert.Link href="/"> Click here if you want to get back to store</Alert.Link>.
        	</Alert>
		</div>
	);
}

export default CheckoutSuccessLayout;