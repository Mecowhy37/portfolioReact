import React from "react";
import styled from "styled-components";
import NavLink from "./Navlink";

const NavContainer = styled.nav`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid var(--color-prm);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

function Navbar(props) {
  return (
    <NavContainer>
      {props.links.map((link) => (
        <NavLink key={link}>{link}</NavLink>
      ))}
    </NavContainer>
  );
}

export default Navbar;
