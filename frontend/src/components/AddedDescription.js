import React, { useState } from "react";
import styled from "styled-components/macro";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import { TextField, makeStyles } from "@material-ui/core";
// import { CustomButton } from "./StyledComponents";

const AddedDescription = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const { conceptId } = useParams();
  const history = useHistory();


  let idOfAConcept = conceptId;

  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  const handleClick = () => {
    if (accessToken) {
      swal({
        title: "Success!",
        text: "Your description have been added",
        icon: "success",
        button: "ok",
      });
      history.push("/concepts");
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
            <HiUser>
              Nice <strong>{username}</strong>, you want to contribute<span>🖤</span>
            </HiUser>
            <HowToAddDescription>
              Make sure you are signed in and then write you explanation, make
              it short and sweet, maximum 160 characters!
            </HowToAddDescription>
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
            <TextCounter>{description.length}/160</TextCounter>
            <ButtonSection>
              <Link to="/concepts">
                <CustomButton>Back</CustomButton>
              </Link>
              <CustomButton
                type="submit"
                value="description"
                onClick={onFormSubmit}
                disabled={
                  !!(description.length < 1 || description.length > 160)
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
`;

const ParagraphInstructions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30px;
  flex-direction: column;
  margin: 0px;
  width: 80%;
  @media (min-width: 767px) {
    width: 90%;
  }
`;

const HiUser = styled.p`
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
` ;

const HowToAddDescription = styled.p`
  font-size: 14px;
  margin: 0;
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
    // width: 50%;
    max-width:500px;
  }

  // @media (min-width: 1025px) {
  //   width: 20%;
  // }
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
  width: 250px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 5px;
  font-size: 24px;
  border-bottom: 5px #ffcff1 solid;
  @media (min-width: 767px) {
    font-size: 40px;
    width: 500px;
  }
`;


const CustomButton = styled.button`
display: inline-block;
  color: white;
  background-color: #ff69b4;
  width: 100px;
  border: 4px solid #ff69b4;
  text-align: center;
  font-weight: bold;
  padding: 15px;
  font-size: 15px;
  margin-bottom: 10px;

  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;