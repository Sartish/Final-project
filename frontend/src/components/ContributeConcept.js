import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link, useHistory } from "react-router-dom";
import { TextField, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

import Navigation from "../components/Navigation";
import { CustomButton } from "./StyledComponents";
import { API_URL } from "../reusables/urls";

const ContributeConcept = () => {
  const classes = useStyles();
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [concept, setConcept] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const accessToken = useSelector((store) => store.user.accessToken);

const handleClick = () => {
    setErrorMessage("Example error message!")

    // if concepts exist, send error message, else continue
    console.log("error")
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ description, concept }),
    };

    fetch(API_URL("concepts"), options)
      .then((res) => res.json())
      .then(() => {
        history.push("/concepts");
      });
  };

  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <WriteHere>Contribute with your concept</WriteHere>
          <Form onSubmit={onFormSubmit}>
            <TextField
              className={classes.input}
              id="outlined-multiline-static"
              label="Concept"
              multiline
              rows={1}
              columns={2}
              defaultValue="Type here"
              variant="outlined"
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
            />
            <TextField
              className={classes.input}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              columns={8}
              defaultValue="Type here.."
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <ButtonSection>
              <Link to="/concepts">
                <CustomButton>Back</CustomButton>
              </Link>
              <CustomButton onClick={handleClick} type="submit" value="description">
                Done!
              </CustomButton>
              {errorMessage && <div> {errorMessage} </div>}
            </ButtonSection>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContributeConcept;

const useStyles = makeStyles(() => ({
  input: {
    marginTop: "50px",
    width: "250px",
    ["@media (min-width:780px)"]: {
      width: "600px",
    },
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  max-width: 370px;

  @media (min-width: 767px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: 20%;
  }
`;

const TextCounter = styled.p`
  text-align: right;
  margin-right: 5px;
`;

const Form = styled.form`
  text-align: center;
`;

const WriteHere = styled.h3`
  display: flex;
  justify-content: center;
  align-text: center;
  width: 200px;
  margin-top: 70px;
  font-size: 24px;
  border: 2px black solid;
  @media (min-width: 767px) {
    font-size: 30px;
    width: 500px;
  }
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
`;
