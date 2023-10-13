import React from "react";
import notFoundImg from "../../Images/not-found.jpg";

function RouteNotFound() {
  return (
    <div className=" m-auto mt-5 text-center">
      <img
        src={notFoundImg}
        alt="Error! Page not found."
        style={{ maxWidth: "500px" }}
      />
    </div>
  );
}

export default RouteNotFound;
