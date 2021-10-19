import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../../fonts/fonts.css";

const Anchor = styled(NavLink)`
  font-size: 22px;
  margin-bottom: 10px;
  color: var(--color-prm);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  &.active {
    &::before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border: 1px solid white;
      transform: translateX(-50%);
      left: 50%;
      top: 240%;
      border-radius: 50%;
    }
  }
`;

function Navlink({ children }) {
  return (
    // <Anchor to={`/${children.toLowerCase()}`} exact className="copy" activeClassName="active">
    <Anchor to={`/`} exact className="copy" activeClassName="active">
      {children}
    </Anchor>
  );
}

export default Navlink;
