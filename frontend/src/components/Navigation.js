import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import HamburgerMenu from "./HamburgerMenu";
import ContributeConcept from "./ContributeConcept";


import { SigninButton } from "./StyledComponents";

const Navigation = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  return (
    <>
      <NavigationBar>
        <Hamburger>
          <HamburgerMenu />
        </Hamburger>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <Logo src={logo} alt="technigo logo" />
        </NavLink>
        <RightNav>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
            to="/concepts"
          >
            <Link>Concepts</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
            to="/Contribute"
          >
            <Link>Contribute</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 10, textDecoration: "none" }}
            to="/about"
          >
            <Link>about</Link>
          </NavLink>
          {accessToken ? (
            <>
            <SignOut />
            </>
          ) : (
            <NavLink
              style={{
                paddingLeft: 10,
                marginBottom: 10,
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

//To do:
// add styling features for letting user know what page we are on
// add hamburger menu

/*******DEFAULT SETTING*****/

export const NavigationBar = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.16em;
  margin: 2px 3%;
  @media (min-width: 1025px) {
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

export const Logo = styled.img`{
  height: 60px;
  justify-content: center;
  margin: 0;
`;
export const Link = styled.div`
  text-decoration: none;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  color: black;
  text-align: center;
  transition: all 0.2s;
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
