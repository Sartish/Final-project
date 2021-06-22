import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";

const ConceptHeader = ({ inputValue, handleOnChange }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title>Find your techy word here</Title>
      <Border>.</Border>
      <Wrapper>
        <ContainerForSearch>
          <SearchField>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Search here..."
                variant="outlined"
                value={inputValue}
                onChange={handleOnChange}
              />
            </form>
          </SearchField>
        </ContainerForSearch>
      </Wrapper>
    </Container>
  );
};

export default ConceptHeader;

const HeaderFont = "'Manrope', sans-serif";
const LightPink = "#FFCFF1";
const Yellow = "#FFF5D1";
const DarkGray = "#282828";

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

export const ContainerForSearch = styled.section`
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

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${HeaderFont};
  padding: 0px;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  color: ${DarkGray};
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
const Border = styled.div`
  display: flex;
  text-align: center;
  width: 300px;
  height: 10px;
  margin-bottom: 15px;
  margin-top: 0px;
  padding: 0px;
  color: ${LightPink};
  border: ${LightPink};; 2px solid;
  background-color: ${LightPink};
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 10px;
  height: 300px;
  width: 300px;
  margin: 0px;
  padding: 20px;
  background-color: ${Yellow};

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0px;
    width: 800px;
  }
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
