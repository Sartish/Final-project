import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useHistory, Link } from "react-router-dom";
import { TextField, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
// import { CustomButton } from "./StyledComponents";
import { API_URL } from "../reusables/urls";
import Signin from "../pages/Signin";
import swal from "sweetalert";

const ContributeConcept = () => {
  const classes = useStyles();
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [concept, setConcept] = useState("");

  const [conceptList, setConceptList] = useState({});

  const accessToken = useSelector((store) => store.user.accessToken);

  const checkIfConceptExist = () => {
    return conceptList.data?.find(item => item.concept.toLowerCase()===concept.toLowerCase());
  };

  const handleClick = () => {
    if (description.length > 160) {
      swal({
        title: "Sorry",
        text: "Your description is to long!",
        icon: "error",
        button: "ok",
      });
    } else {
      if (accessToken) {
        swal({
          title: "Success!",
          text: "Your concept & description have been added",
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
          width: '50px'
        });
      }
    }

  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/concepts?searchText=${concept}`
    )
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  }, [concept]);

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
        handleClick();
      })
      .catch((error) => {
        // post failed, show error message to let user know
        console.log("Catch error:"+error)
        swal({
          title: "Failed to add concept",
          text: error.message,
          icon: "error",
          button: "OK!",
        });
      });
  };

  if(!accessToken) {
    // if not signedin then display signin/signup page
    return (
    <>
      <Signin />
    </>
    )
  }
  else
  {
    // user signedin let him/her contribute

    return (
      <>
        <Navigation />
        <Container>
          <Wrapper>
            <WriteHere>Contribute with your concept and description.</WriteHere>
            <Border></Border>
            <HowToText>Remember to keep it short and sweet, description is max 160 characters!</HowToText>
            <Form onSubmit={onFormSubmit}>
              <TextField
                className={classes.input}
                id="outlined-multiline-static"
                label={checkIfConceptExist() ? "Concept already exist, but feel free to add a description" : "Concept"}
                multiline
                rows={1}
                columns={2}
                // defaultValue="Type here"
                variant="outlined"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
              {checkIfConceptExist() ? "Concept already exist, but feel free to add a description" : ""}
              <TextField
                className={classes.input}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                columns={8}
                // defaultValue="Type here.."
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
               <TextCounter>{description.length}/160</TextCounter>
              <ButtonSection>
                <Link to ="/concepts">
                <CustomButton>Back</CustomButton>
                </Link>
                <CustomButton type="submit" value="description"
                //  disabled={
                //   !!(description.length < 1 || description.length > 160)
                // }
                >
                  Done!
                </CustomButton>
              </ButtonSection>
            </Form>
          </Wrapper>
        </Container>
      </>
    );
  }
};

export default ContributeConcept;

const useStyles = makeStyles(() => ({
  input: {
    marginTop: "50px",
    width: "250px",
    ["@media (min-width:768px)"]: {
      width: "600px",
    },
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  max-width: 370px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: 20%;
  }
`;

const Form = styled.form`
  text-align: center;
`;

const TextCounter = styled.p`
  text-align: right;
  margin-right: 20px;
`;

const HowToText = styled.p`
  text-align: center;
  margin-right: 15px;
  margin-left: 15px;
`;

const WriteHere = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 335px;
  // margin-top: 10px;
  margin: 0;
  margin-bottom: 15px;
  font-size: 24px;
  @media (min-width: 767px) {
    font-size: 40px;
    width: 500px;
  }
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
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

const Border = styled.div`
  display: flex;
  text-align: center;
  // width: 210px;
  width: 335px;
  // height: 60px;
  height: 10px;
  color: #ffcff1;
  border:  #ffcff1; 2px solid;
  background-color: #ffcff1;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;