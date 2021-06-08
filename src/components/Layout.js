import bg from "../images/background.jpg";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px minmax(0, 1fr);
  grid-template-columns: 40px 1fr 40px;
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
