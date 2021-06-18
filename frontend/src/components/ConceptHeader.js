import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";

import { StartButtonContainer, Paragraph } from "components/StyledComponents";

const ConceptHeader = ({ inputValue, handleOnChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Title>Find your techy word here</Title>
        <Wrapper>
          <ContainerHeader role="main">
            <StartButtonContainer>
              <div className={classes.filter}>
                <Paragraph>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Search here..."
                      variant="outlined"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </form>
                </Paragraph>
              </div>
            </StartButtonContainer>
          </ContainerHeader>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ConceptHeader;

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
    height: "200px",

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
  border-radius: 10px;

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
  font-size: 50px;
`;
