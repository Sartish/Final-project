import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Navigation from "../components/Navigation";
import { Container, makeStyles } from "@material-ui/core";
import { CustomButton, SigninButton } from "../components/StyledComponents";
import CountUp from "react-countup";
import Footer from "../components/Footer";

const FrontPage = () => {
  const classes = useStyles();
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  return (
    <>
      <Container>
        <Navigation />
        <ContainerHeader role="main">
          <CountingConceptHeader>
            <CountText>Currently</CountText>
            <CountUp
              style={{
                fontSize: 60,
                marginBottom: 0,
                marginLeft: 20,
                color: "black",
              }}
              duration={10}
              end={allConcepts.data.length}
            />
            <CountText>Concepts</CountText>
          </CountingConceptHeader>
          <TitleContainer>
            <Title>TECHTIONARY</Title>
            <Border></Border>
            <Paragraph>
              An open source <Span>tech-concept library</Span>, with the aim to
              understand tech concepts in an easier and fun way!
            </Paragraph>
            <ButtonSection>
              <ShowMe>Show me!</ShowMe>
              <Link to="/concepts">
                <SigninButton>Concepts</SigninButton>
              </Link>
            </ButtonSection>
          </TitleContainer>
        </ContainerHeader>
        <Footer />
      </Container>
    </>
  );
};

export default FrontPage;

// Frontpage

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "200px",
    ["@media (min-width:780px)"]: {
      marginTop: "60px",
    },
  },
}));

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20px;

  @media (min-width: 768px) {
    position: relative;
    justify-content: space-around;
    margin-top: 50px;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    height: 400px;
    padding: 0;
    margin-bottom: 80px;
  }
`;

export const CountingConceptHeader = styled.div`
  font-size: 30px;
  border: solid #ffcff1 2px;
  padding: 30px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    @media (min-width: 768px) {
      width: 15%;
      position: absolute;
      top: 2%;
      left: 2%;
    }
  }
`;

export const CountText = styled.div`
  font-size: 40px;
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
position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: center;
  border: #fff5d1 solid 5px;
  padding: 5px;
  @media (min-width: 768px) {
    width: 50%;
    position: absolute;
    top: 20%;
    left: 25%;
  }
`;

export const Span = styled.span`
  border-bottom: #ff69b4 solid 2px;
`;

export const Title = styled.div`
  font-weight: 200;
  font-size: 40px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 120px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid #ffcff1;
  width: 170px;
  margin-top: 10px;
  @media (min-width: 768px) {
    position: absolute;
    top: 60%;
    left: 105%;
    margin-bottom: 50px;
    padding: 30px;
  }
`;

const ShowMe = styled.p`
  font-size: 28px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 40px;
    padding-bottom: 20px;
  }
`;
