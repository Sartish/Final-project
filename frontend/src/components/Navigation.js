import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import "@lottiefiles/lottie-player";

import SignOut from "./SignOut";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  return (
    <>
      <NavigationBar>
        <Hamburger>
          <HamburgerMenu />
        </Hamburger>
        <Logo>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <LottieWrapper>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/private_files/lf30_pcBP5A.json"
                style={{
                  display: "flex",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  resizeMode: "contain",
                }}
              ></lottie-player>
            </LottieWrapper>
          </NavLink>
        </Logo>
        <RightNav>
          <NavLink
            style={{ paddingLeft: 5, textDecoration: "none" }}
            to="/concepts"
          >
            <Link>Concepts</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 5, textDecoration: "none" }}
            to="/newconcept"
          >
            <Link>Add concept</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
            to="/about"
          >
            <Link>About us</Link>
          </NavLink>
          {accessToken ? (
            <SignOut />
          ) : (
            <NavLink
              style={{
                paddingLeft: 15,
                marginBottom: 12,
                textDecoration: "none",
              }}
              to="/signin"
            >
              <SigninButton>Sign in</SigninButton>
            </NavLink>
          )}
        </RightNav>
      </NavigationBar>
    </>
  );
};

export default Navigation;

const ParagraphFont = "'Roboto', sans-serif;";
const HotPink = "#FF69B4";
const DarkGray = "#282828";

const NavigationBar = styled.div`
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  margin: 2px 3%;
  align-items: center;
  border-bottom: ${DarkGray} solid 1.8px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Hamburger = styled.div`
  display: flex;
  width: 35px;
  height: 5px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const RightNav = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: flex;
  }
`;

const Logo = styled.div`
  justify-content: flex-end;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin-left: 0px;
  }
`;

const Link = styled.div`
  text-decoration: none;
  font-size: 17px;
  font-family: ${ParagraphFont}
  padding: 10px;
  margin: 10px;
  color: black;
  text-align: center;
  transition: all 0.2s;
  :hover {
    text-decoration: underline;
    text-decoration-color: ${HotPink};
  }
`;

const SigninButton = styled.button`
  display: inline-block;
  color: white;
  background-color: ${HotPink};
  width: 100px;
  border: 4px solid ${HotPink};
  text-align: center;
  font-weight: bold;
  padding: 13px;
  cursor: pointer;
  font-family: ${ParagraphFont};
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;

const LottieWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: "flex-end";

  @media (min-width: 768px) {
    width: 180px;
    margin-right: 0px;
  }
`;
