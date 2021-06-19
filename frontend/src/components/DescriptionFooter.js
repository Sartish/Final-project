import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import {
  StartButtonContainer,
  Paragraph,
  CustomButton,
} from "components/StyledComponents";

const DescriptionFooter = ({ heading }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Wrapper>
          <ContainerHeader role="main">
            <StartButtonContainer>
              <div className={classes.filter}>
                <Paragraph>
                  Do you have a nice explanation to this concept?
                  <Link
                    to={`/contribute/${location.pathname.substring(1)}`}
                  ></Link>
                </Paragraph>
                <CustomButton variant="contained" color="secondary">
                  contribute
                </CustomButton>
              </div>
            </StartButtonContainer>
          </ContainerHeader>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DescriptionFooter;

const useStyles = makeStyles((theme) => ({
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
