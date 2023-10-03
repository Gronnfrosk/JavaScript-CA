import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
	const [search, setSearch] = useState("");

	const searBarInput = 

	return (
		<Form className="input-wrapper d-flex flex-column p-0">
			<InputGroup className="input-wrapper w-100 align-items-center">
				<FaSearch id="search-icon" />
				<Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search contacts" className="border-0" id="moreInputStyle" />
			</InputGroup>
		</Form>
	)
}

export default SearchBar;
