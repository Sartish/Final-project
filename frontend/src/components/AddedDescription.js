import React, { useState } from "react";
import styled from "styled-components/macro";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import { TextField, makeStyles } from "@material-ui/core";
import { CustomButton } from "./StyledComponents";

const AddedDescription = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const { conceptId } = useParams();
  const history = useHistory();

  let idOfAConcept = conceptId;

  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  const handleClick = () => {
    console.log("hej");
    if (accessToken) {
      history.push("/");
    } else {
      swal({
        title: "Not yet!",
        text: "You have to sign in to contribute!",
        icon: "error",
        button: "Ah ok!",
      });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("test");

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },

      body: JSON.stringify({ description, idOfAConcept }),
    };

    fetch(API_URL("concepts"), options)
      .then((res) => res.json())
      .then(() => {
        handleClick();
      });
  };

  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <WriteHere>Contribute with your explanation</WriteHere>
          <ParagraphInstructions>
            <p>
              Nice{username}, you want to contribute<span>🖤</span>
            </p>
            <p>
              Make sure you are signed in and then write you explanation, make
              it short and sweet, maximum 200 characters
            </p>
          </ParagraphInstructions>
          <Form onSubmit={onFormSubmit}>
            <TextField
              className={classes.input}
              id="outlined-multiline-static"
              label="Description"
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
                onClick={onFormSubmit}
                disabled={
                  !!(description.length < 1 || description.length > 140)
                }
              >
                Done!
              </CustomButton>
            </ButtonSection>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default AddedDescription;

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
const ParagraphInstructions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30px;
  flex-direction: column;
  margin: 0px;
  width: 50%;
  @media (min-width: 767px) {
    width: 90%;
  }
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
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 24px;
  border-bottom: 5px #ffcff1 solid;
  @media (min-width: 767px) {
    font-size: 30px;
    width: 500px;
  }
`;
