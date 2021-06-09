import React, { useState } from "react";
import styled from "styled-components/macro";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

const AddedDescription = () => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // idofaconcept should be after the description
      body: JSON.stringify({ description }),
    };

    fetch(API_URL("concepts"), options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
    <Navigation />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Done!</Button>
      </form>
    </>
  );
};

export default AddedDescription;

const Button = styled.button`
  border-radius: 8px;
  background-color: #006cde;
  background-image: linear-gradient(90deg, #006cde 0%, #fc00ff 100%);
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;

  :hover {
    background-color: #fc00ff;
    background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  }

  @media (min-width: 767px) {
    font-size: 19px;
  }
`;