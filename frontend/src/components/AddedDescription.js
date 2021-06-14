import React, { useState } from "react";
import styled from "styled-components/macro";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import concepts from "../reducers/concepts";
import ContributeHeader from "../components/ContributeHeader";
// import { Divider } from "@material-ui/core";

const AddedDescription = () => {
  const [description, setDescription] = useState("");
  const { conceptId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  let idOfAConcept = conceptId;

  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  const onFormSubmit = (e) => {
    e.preventDefault();

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
      // .then((data) => console.log(data));
      .then(() => {
        history.push("/");
      });
  };

  // vill få att knappen gör submit, inte vid enter..
  //vill få med så det syns på sidan vilket concept som man gör add på
  //vad ska hända när man trycker på done? Konfettiregn? link tillbaka till concepts?
  //töm input efter submit
  return (
    <>
      <Navigation />
      <ContributeHeader />
      <Container>
        <Wrapper>
          <WriteHere>Write here:</WriteHere>
          <Form onSubmit={onFormSubmit}>
            <TextArea
              type="text"
              rows="4"
              cols="48"
              maxLength="140"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextCounter>{description.length}/200</TextCounter>
            {/* <TextCounter>Number of characters:{description.length}</TextCounter> */}
            <ButtonSection>
              <Link to="/">
                <Button>Back to concepts</Button>
              </Link>
              <Button
                type="submit"
                value="description"
                onClick={onFormSubmit}
                disabled={
                  !!(description.length < 5 || description.length > 140)
                }
              >
                Done!
              </Button>
            </ButtonSection>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default AddedDescription;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #8ca2ab;
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;

  // :hover {
  //   background-color: #fc00ff;
  //   background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  // }

  @media (min-width: 767px) {
    font-size: 19px;
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

const TextArea = styled.textarea`
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
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
  margin-left: 8px;
`;
