import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";

import Navigation from "../components/Navigation";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
    <Container className={classes.container}>
      <Wrapper>
        <Title>ABOUT</Title>
        <ContainerHeader role="main">

            <div className={classes.contributeText}>
           <p>This site was created in Technigo Bootcamp as the final project. The idea came from our own experience, entering the tech-world and being exposed to A LOT of new words. If you are lucky are they quite self-explanatory for example "something here". But many of them are short for something such as "example", but and a lot of word might as well be greek!</p>
           <p>The purpose of this site is to be a friend in need when there is something you heard somewhere but maybe afraid to ask, or maybe just forgot. And if you feel like you have a good explanation for something, please add it! </p>
            </div>

        </ContainerHeader>
      </Wrapper>
    </Container>
  </div>
  );
};

export default About;




const useStyles = makeStyles((theme) => ({
  //   background: {
  //     backgroundColor: "#8CA2AB",
  //     width: "100%",
  //   },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "300px",
    marginTop: "35px",
  },

  filter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5px",
  },
  contribute: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contributeText: {
    fontSize: "16x",
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
  },
}));

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  border: 2px black;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    width: 1200px;
    border: black solid 2px;
    box-sizing: border-box;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border: solid 2px #ffcff1;
  padding: 10px;
  height: 400px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px #ffcff1;
  padding: 10px;
`;
