import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleNavbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

function App() {
	return (
		<div className="App">
			<CollapsibleNavbar />
			<Footer />
		</div>
	);
}

export default App;
