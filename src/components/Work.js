import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 90%;
  border-right: ${({ focus }) => (focus ? "1px solid red" : "1px solid var(--color-prm)")};
  transition: 1s cubic-bezier(0.25, 0.68, 0.21, 0.99);
  left: ${({ index }) => (4 - index) * 40}px;
  &:hover {
    margin-left: 3px;
  }
`;

function Work({ index, focus, onClick }) {
  return <Card index={index} className={`work`} focus={focus} onClick={onClick}></Card>;
}

export default Work;
