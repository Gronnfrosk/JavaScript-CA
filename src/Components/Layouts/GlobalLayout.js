import CollapsibleNavbar from "../Component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Component/Footer.js";

function GlobalLayout() {
	return (
		<div className="App">
			<CollapsibleNavbar />
			<Footer />
		</div>
	);
}

export default GlobalLayout;
