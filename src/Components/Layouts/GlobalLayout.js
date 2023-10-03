import CollapsibleNavbar from "../Component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Component/Footer.js";
import "./GlobalStyle.css";
import { Outlet } from "react-router-dom";

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
