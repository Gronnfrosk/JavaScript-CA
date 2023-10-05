import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";

export default function SeeCart() {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<div className="FixedCart mt-5">
			<div className="CartBlue bg-info rounded-start-pill">
				<Link ref={target} onClick={() => setShow(!show)}>
					<FaShoppingCart id="shopping-cart" className="fs-5 text-light" />
				</Link>
				<Overlay target={target.current} show={show} placement="right" className="z-4">
					{({ placement: _placement, arrowProps: _arrowProps, show: _show, popper: _popper, hasDoneInitialMeasure: _hasDoneInitialMeasure, ...props }) => (
						<div
							{...props}
							style={{
								zIndex: "4",
								backgroundColor: "Black",
								marginTop: "8px",
								fontSize: "12px",
								padding: "0 7px",
								color: "white",
								borderRadius: 50,
								...props.style,
							}}
						>
							<span className="">4</span>
						</div>
					)}
				</Overlay>
			</div>
		</div>
	);
}
