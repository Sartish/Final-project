import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";

import { StartButtonContainer } from "components/StyledComponents";

const ConceptHeader = ({ inputValue, handleOnChange }) => {
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Title>Find your techy word here</Title>
        <Border>.</Border>
        <Wrapper>
          <ContainerHeader>
              <Filter>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Search here..."
                      variant="outlined"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </form>
              </Filter>
          </ContainerHeader>
        </Wrapper>
      </Container>
  );
};

export default ConceptHeader;


const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif;"
const HotPink = "#FF69B4"
const LightPink = "#FFCFF1"
const Yellow = "#FFF5D1"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "85% ",
    height: "200px",
    marginTop: "35px",
  },
}));

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 20px;
  border-radius: 10px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 10px;
  height: 400px;
  // width: 200px;
  width: 320px;
  background-color: #fff5d1;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0px;
    width: 800px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-radius: 50%;
  padding: 10px;
  font-size: 35px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
const Border = styled.div`
  display: flex;
  text-align: center;
  // width: 210px;
  width: 335px;
  height: 10px;
  margin-bottom: 15px;
  color: #ffcff1;
  border:  #ffcff1; 2px solid;
  background-color: #ffcff1;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ConceptButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 30px 80px;
  padding: 20px;
`;

const Filter = styled.div`
  display: flex;
`