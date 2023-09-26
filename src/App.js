import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalLayout from "./Components/Layouts/GlobalLayout.js";
import { Routes, Route, useParams } from "react-router-dom";

function Home() {
	return <div>Home</div>;
}

function About() {
	return <div>About</div>;
}

function ContactUs() {
	return <div>Contact us</div>;
}

function Products() {
	return <div>Products</div>;
}

function Product() {
	let params = useParams();
	console.log(params);
	return <div>Individual product page: {params.id}</div>;
}

function RouteNotFound() {
	return <div>Page not found</div>;
}

function App() {
	return (
		<div className="App">
			<GlobalLayout />
			<Routes>
				<Route index element={<Home />} />
				<Route path="About" element={<About />} />
				<Route path="ContactUs" element={<ContactUs />} />
				<Route path="Products" element={<Products />} />
				<Route path="product/:id" element={<Product />} />
				<Route path="*" element={<RouteNotFound />} />
			</Routes>
			;
		</div>
	);
}

export default App;
