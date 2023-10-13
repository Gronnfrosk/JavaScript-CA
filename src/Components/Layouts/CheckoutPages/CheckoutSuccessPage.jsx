import React from "react";
import Alert from "react-bootstrap/Alert";
import successImg from "../../Images/SuccessImg.jpg";

function CheckoutSuccessLayout() {
  return (
    <div>
      <div className=" m-auto mt-5 text-center">
        <img
          src={successImg}
          alt="Purchase was successful."
          style={{ maxWidth: "400px" }}
        />
      </div>
      <Alert
        variant="info"
        className="mt-4 mx-auto text-center"
        style={{ maxWidth: "400px", marginBottom: "100px" }}
      >
        Your order is now placed in our systems!
        <br />
        <Alert.Link href="/">
          {" "}
          Click here if you want to get back to store
        </Alert.Link>
        .
      </Alert>
    </div>
  );
}

export default CheckoutSuccessLayout;
