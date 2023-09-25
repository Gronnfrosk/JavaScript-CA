import Nav from "react-bootstrap/Nav";

function Footer() {
	return (
		<>
			<footer className="text-light bg-dark py-2 position-absolute bottom-0 w-100" data-bs-theme="dark">
				<Nav className="justify-content-center" bg={"dark"} activeKey="/home">
					<Nav.Item>
						<Nav.Link href="/home">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1">Contact</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link eventKey="disabled" disabled>
							Disabled
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<p className="text-center mt-4 mb-4">Or right-aligned eCom</p>
			</footer>
		</>
	);
}

export default Footer;
