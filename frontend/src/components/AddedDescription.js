import React, { useState } from "react";
import styled from "styled-components/macro";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import concepts from "../reducers/concepts";

const AddedDescription = () => {
  const [description, setDescription] = useState("");
  const [contributorName, setContributorName] = useState("");
  const { conceptId } = useParams();
  const dispatch = useDispatch();

  let idOfAConcept = conceptId;

  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  const onFormSubmit = (e) => {
    e.preventDefault();

    // dispatch our description to the store on click.
    dispatch(
      concepts.actions.addDescription({
        id: Date.now(),
        description: description,
        contributorName: contributorName,
      })
    );

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
      .then((data) => console.log(data));
  };
  // vill få att knappen gör submit, inte vid enter..
  //vill få med så det syns på sidan vilket concept som man gör add på
  //vad ska hända när man trycker på done? Konfettiregn? link tillbaka till concepts?
  //töm input efter submit
  return (
    <>
      <Navigation />
      <Wrapper>
        <Header>
          Welcome {username}! You want to contribute, awesome!{" "}
          <span role="img" aria-label="heart">
            {"✨"}
          </span>
        </Header>
        <HowToContribute>
          Write your description here, but keep it short and sweet, max 140
          characters.
        </HowToContribute>

        <h3>Your username</h3>
        <form onSubmit={onFormSubmit}>
          <TextArea
            type="text"
            rows="2"
            cols="50"
            maxLength="140"
            value={contributorName}
            onChange={(e) => setContributorName(e.target.value)}
          />
        </form>
        <h3>explanation here</h3>
        <form onSubmit={onFormSubmit}>
          <TextArea
            type="text"
            rows="4"
            cols="50"
            maxLength="140"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextCounter>{description.length}/140</TextCounter>
          <ButtonSection>
            <Link to="/concepts">
              <Button>Back to concepts</Button>
            </Link>
            <Button
              type="submit"
              value="description"
              onClick={onFormSubmit}
              disabled={!!(description.length < 5 || description.length > 140)}
            >
              Done!
            </Button>
          </ButtonSection>
        </form>
      </Wrapper>
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

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: 20%;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin-top: 15px;
`;

const HowToContribute = styled.h3`
  text-align: center;
  margin-top: 15px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
`;

const TextCounter = styled.p`
  text-align: right;
`;
