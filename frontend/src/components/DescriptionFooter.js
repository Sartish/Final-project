import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const DescriptionFooter = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Container className={classes.container}>
      <Wrapper>
        <ContainerHeader>
          <ContributeButtonContainer>
            <div className={classes.filter}>
              <Paragraph>
                Do you have a nice explanation to this concept?
              </Paragraph>
              <Link to={`/contribute/${location.pathname.substring(1)}`}>
                <CustomButton variant="contained" color="secondary">
                  contribute
                </CustomButton>
              </Link>
            </div>
          </ContributeButtonContainer>
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
};

export default DescriptionFooter;

const HeaderFont = "'Manrope', sans-serif";
const DarkGray = "#282828";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "90%",
    height: "300px",
  },

  filter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5px",
    backgroundColor: "#FFF5D1",
    padding: "20px",
    ["@media (min-width:768px)"]: {
      width: "800px",
    },
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

const Paragraph = styled.p`
  text-align: center;
  color: black;
  font-size: 24px;
  width: 300px;
  padding: 20px;
  margin: 0;
  font-family: ${HeaderFont};
  color: ${DarkGray};
  @media (min-width: 768px) {
    flex-direction: row;
    width: 800px;
  }
`;

const ContributeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 800px;
  }
`;
const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    width: 1200px;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 10px;
  height: 400px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px #ffcff1;
  padding: 10px;
  font-size: 50px;
`;

const CustomButton = styled.button`
display: inline-block;
  color: white;
  background-color: #ff69b4;
  width: 150px;
  border: 4px solid #ff69b4;
  text-align: center;
  font-weight: bold;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
