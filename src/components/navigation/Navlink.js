import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../fonts/fonts.css";

const Anchor = styled(Link)`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--color-prm);
  cursor: pointer;
  text-decoration: none;
`;

function Navlink({ children }) {
  return (
    <Anchor to={`/${children.toLowerCase()}`} className="copy">
      {children}
    </Anchor>
  );
}

export default Navlink;
