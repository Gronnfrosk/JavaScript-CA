import Nav from "react-bootstrap/Nav";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import aboutImg from "../Images/shopping-online.PNG";

function Footer() {
  return (
    <>
      <footer
        className="text-light bg-dark fs-6 w-100"
        data-bs-theme="dark"
      >
        <div className="d-flex flex-wrap justify-content-between py-5 justify-content-end flex-row-reverse mx-auto" style={{maxWidth: "1200px"}}>
        <div className="d-flex flex-row mb-5">
        <Nav className="d-flex flex-column text-end me-3" bg={"dark"} activeKey="/home">
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
        <div className="d-flex flex-column text-info align-items-center me-3">
          <FaYoutube className="fs-2 m-1 p-1"/>
          <FaTwitter className="fs-2 m-1 p-1"/>
          <FaInstagram className="fs-2 m-1 p-1"/>
          <FaFacebook className="fs-2 m-1 p-1"/>
        </div></div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
        <Image
            src={aboutImg}
            alt="eCom about picture"
            style={{
              maxWidth: "200px",
              borderRadius: "100px",
              width: "100%",
              display: "flex",
              marginLeft: "20px",
              aspectRatio: "1/1", 
              objectFit: "cover"
            }}
            thumbnail
          />
        <div style={{width: "200px"}}>
          <b><u>Something Random:</u></b> Quickly change the font-size of tedsadsaxt. While our heading classes apply font-size, font-weight, and line-height, these utilities only apply font-size. Sizing for these utilities matches HTMl heading element.
        </div>
        </div>
        </div>
        <p className="text-center mb-0 pb-1">&copy; 2023 eCom, Inc</p>
      </footer>
    </>
  );
}

export default Footer;
