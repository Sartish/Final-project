import React from "react";
import styled from "styled-components/macro";

const SearchConcept = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>hej</div>
    </>
  );
};

export default SearchConcept;

const Form = styled.form`
  background-color: #668479;
  width: 80%;
  margin: 20px auto 45px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
