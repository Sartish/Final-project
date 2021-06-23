import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import styled from "styled-components/macro";

const HamburgerMenu = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <HamburgerButton onClick={() => setActiveMenu(!activeMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      {activeMenu && (
        <MenuContainer>
          <NavLink
            style={{ paddingLeft: 13, textDecoration: "none" }}
            to="/concepts"
          >
            <Link>Concepts</Link>
          </NavLink>

          <NavLink
            style={{ paddingLeft: 13, textDecoration: "none" }}
            to="/newconcept"
          >
            <Link>Add concept</Link>
          </NavLink>
          <NavLink
            style={{ paddingLeft: 13, textDecoration: "none" }}
            to="/About"
          >
            <Link>About</Link>
          </NavLink>

          {accessToken ? (
            <SignOut />
          ) : (
            <NavLink
              style={{ paddingLeft: 13, textDecoration: "none" }}
              to="/signin"
            >
              <Link>Signin</Link>
            </NavLink>
          )}
        </MenuContainer>
      )}
    </>
  );
};

export default HamburgerMenu;

const ParagraphFont = "'Roboto', sans-serif;";
const LightPink = "#FFCFF1";
const DarkGray = "#282828";

const HamburgerButton = styled.button`
  position: absolute;
  top: 10px;
  background-color: transparent;
  border: none;
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  div {
    width: 40px;
    height: 3px;
    background-color: ${DarkGray};
    margin: 4px;
    border-radius: 30px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${LightPink};
  position: absolute;
  top: 20px;
  width: 200px;
  height: 280px;
  z-index: 1;
`;

const Link = styled.div`
  font-size: 16px;
  font-family: ${ParagraphFont}
  text-decoration: none;
  margin: 10px;
  color: ${DarkGray};
  &visited {
    color: #0b1d34;
  }
`;
