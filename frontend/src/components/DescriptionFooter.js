import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import {
  StartButtonContainer,
  Paragraph,
  CustomButton,
} from "components/StyledComponents";

const DescriptionFooter = () => {
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
                </Paragraph>
                <Link to={`/contribute/${location.pathname.substring(1)}`}>
                  <CustomButton variant="contained" color="secondary">
                    contribute
                  </CustomButton>
                </Link>
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
    padding: "10px",
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
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    width: 1200px;
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
