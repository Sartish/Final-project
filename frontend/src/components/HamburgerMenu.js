import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import styled from "styled-components";

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

export const HamburgerButton = styled.button`
  position: absolute;
  top: 20px;
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
    width: 50px;
    height: 7px;
    background-color: #f4a68c;
    margin: 5px;
    border-radius: 30px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(242, 237, 228, 0.9);
  position: absolute;
  top: 10px;
  width: 300px;
  height: 400px;
  z-index: 1;
`;

export const Link = styled.div`
  font-size: 30px;
  text-decoration: none;
  margin: 10px;
  color: #0b1d34;
  &visited {
    color: #0b1d34;
  }
`;
