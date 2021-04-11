import bg from "../images/background.jpg";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 60px 1fr 60px;
`;
const Bg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("${bg}");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <Bg />
      {children}
    </Wrapper>
  );
}

export default Layout;
