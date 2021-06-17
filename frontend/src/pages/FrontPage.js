import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { Container } from "@material-ui/core";

const FrontPage = () => {
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <ContainerHeader role="main">
          <CountingConceptHeader>
            Curently <p>{allConcepts.data.length}</p> <p>Concept</p>
          </CountingConceptHeader>
          <TitleContainer>
            <Title>TECHTIONARY</Title>
            <Border></Border>
            <Paragraph>
              Here you find difficult tech-concept explained as easy as
              possible! Have a look!
            </Paragraph>
          </TitleContainer>
        </ContainerHeader>
      </Container>
    </>
  );
};

export default FrontPage;

// Frontpage

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
    margin-top: 100px;
    flex-direction: row;
    width: 1200px;
    border: black solid 2px;
    box-sizing: border-box;
    height: 400px;
    padding: 0;
  }
`;

export const CountingConceptHeader = styled.div`
  font-size: 30px;
  border: solid #ffcff1 2px;
  padding: 30px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Border = styled.div`
  width: 210px;
  height: 20px;
  border: #ffcff1 2px solid;
  background-color: #ffcff1;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;
export const Paragraph = styled.p`
  font-size: 22px;
  padding: 10px;
  background-color: #fff5d1;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: center;
  border: black solid 1px;
  padding: 5px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const Title = styled.div`
  font-weight: 200;
  font-size: 40px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 80px;
  }
`;
