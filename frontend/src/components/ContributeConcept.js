import React, { useState, useEffect }  from "react";
import styled from "styled-components/macro";
import { Link, useHistory } from "react-router-dom";
import { TextField, makeStyles } from "@material-ui/core";

import Navigation from "../components/Navigation";
import { API_URL } from "../reusables/urls";
import { CustomButton } from "./StyledComponents";

const ContributeConcept = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [concept, setConcept] = useState("");
  const history = useHistory();
  const [conceptList, setConceptList] = useState({});


  //do a fetch to get concepts first?
  // useEffect(() => {
  //   fetch(API_URL("/concepts"))
  //     .then((res) => res.json())
  //     .then((data) => setConceptList(data));
  // });



  const onFormSubmit = (e) => {
    e.preventDefault();

   // Add authorization in header later..
  // No need for the user to be identified with the concept,
  // the user should be connected to the description
   const options = {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ description, concept }),
   };

   fetch(API_URL("/concepts"), options)
   .then((res) => res.json())
   .then(() => {
    history.push("/");
  });
  };

  return (
    <>
    <Navigation />
    <Container>
      <Wrapper>
        <WriteHere>Contribute with your concept</WriteHere>
        {/* <Form onSubmit={onFormSubmit}> */}
        <Form onSubmit={onFormSubmit}>
          <TextField
            className={classes.input}
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={1}
            columns={2}
            defaultValue="Default Value"
            variant="outlined"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />
          <TextCounter>{concept.length}/30</TextCounter>
{/*
          <ButtonSection>
            <Link to="/">
            </Link>
            <CustomButton
              type="submit"
              value="description"
              // onClick={onFormSubmit}
              disabled={
                !!(concept.length < 1 || concept.length > 30)
              }
            >
              Done!
            </CustomButton>
          </ButtonSection> */}

        {/* <Form onSubmit={onFormSubmit}> */}

          <TextField
            className={classes.input}
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            columns={8}
            defaultValue="Default Value"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextCounter>{description.length}/200</TextCounter>

          <ButtonSection>
            <Link to="/">
              <CustomButton>Back</CustomButton>
            </Link>
            <CustomButton
              type="submit"
              value="description"
              // onClick={onFormSubmit}
              disabled={
                !!(description.length < 5 || description.length > 200)
              }
            >
              Done!
            </CustomButton>
          </ButtonSection>
        </Form>
      </Wrapper>
    </Container>
  </>
  )
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

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
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