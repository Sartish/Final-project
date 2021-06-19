import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import HamburgerMenu from "./HamburgerMenu";
import "@lottiefiles/lottie-player";
import lottiePlayer from "@lottiefiles/lottie-player";

import { SigninButton } from "./StyledComponents";

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
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets10.lottiefiles.com/private_files/lf30_pcBP5A.json"
              style={{
                display: "flex",
                justifyContent: "center",
                width: 200,
                height: 120,
                marginLeft: 0,
              }}
            ></lottie-player>
          </NavLink>
        </Logo>
        <RightNav>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
            to="/concepts"
          >
            <Link>Concepts</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
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
              <SigninButton>Signin</SigninButton>
            </NavLink>
          )}
        </RightNav>
      </NavigationBar>
    </>
  );
};

export default Navigation;

/*******DEFAULT SETTING*****/

export const NavigationBar = styled.div`
  display: flex;
  padding: 2px 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.16em;
  margin: 2px 3%;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Hamburger = styled.div`
  width: 35px;
  height: 5px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
`;
export const RightNav = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  margin-left: 120px;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin-left: 0px;
  }
`;
export const Link = styled.div`
  text-decoration: none;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  color: black;
  text-align: center;
  transition: all 0.2s;
  :hover {
    text-decoration: underline;
    text-decoration-color: #ff69b4;
  }
`;

export const Button = styled.div`
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border: 0.16em solid black;
  background: #ffcff1;
  color: black;
  text-align: center;
  transition: all 0.2s;
  font-size: 17px;
`;
