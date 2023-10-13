import { CollapsibleNavbar } from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./GlobalLayout.css";
import { Outlet } from "react-router-dom";
import { SeeCart } from "../Component/Cart";
import React from "react";

function GlobalLayout(props) {
  const { onRemove, onAdd, cartItems } = props;

  return (
    <>
      <CollapsibleNavbar />
      <SeeCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Outlet />
      <Footer />
    </>
  );
}

export default GlobalLayout;
