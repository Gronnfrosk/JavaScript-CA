import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <footer
        className="text-light bg-dark fs-6 fixed-bottom w-100"
        data-bs-theme="dark"
      >
        <Nav className="justify-content-center" bg={"dark"} activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ContactUs">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center mt-1 mb-1">eCom</p>
      </footer>
    </>
  );
}

export default Footer;
