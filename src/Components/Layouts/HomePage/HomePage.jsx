import React, { useState } from "react";
import { useGetProductApi } from "../../Component/ProductData";
import { SpinnerLoad, ErrorLoad } from "../../Component/Spinner&error";
import { ProductCardHome } from "../../Component/ProductCardHome";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

const url = "https://api.noroff.dev/api/v1/online-shop";

function Home() {
  const [search, setSearch] = useState("");
  const [data, isLoading, isError] = useGetProductApi(url);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  if (isLoading) {
    return <SpinnerLoad />;
  }

  if (isError) {
    return <ErrorLoad />;
  }

  return (
    <div>
      <div className="pt-3 pb-3">
        <h1>Welcome to eCom</h1>
      </div>
      <div className="search-bar-container">
        <Form
          onSubmit={submitHandler}
          className="input-wrapper d-flex flex-column p-0"
        >
          <InputGroup className="input-wrapper w-100 align-items-center">
            <FaSearch className="search-icon" />
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products"
              className="border-0"
              id="moreInputStyle"
            />
          </InputGroup>
        </Form>
        <Alert variant="info position-absolute searchAlert">
          <Alert.Heading>No Products found...</Alert.Heading>
        </Alert>
        <div
          className="d-flex flex-wrap justify-content-center gap-3 p-5 mt-4 mb-5 w-100"
          id="Results"
        >
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <ProductCardHome key={index} data={item} />
            ))}
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default Home;
