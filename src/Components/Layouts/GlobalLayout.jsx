import { CollapsibleNavbar } from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./GlobalLayout.css";
import { Outlet } from "react-router-dom";
import React from "react";

function GlobalLayout() {
  return (
    <>
      <CollapsibleNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default GlobalLayout;
