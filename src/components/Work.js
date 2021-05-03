import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: calc(100% - 60px);
  border-right: ${({ focus }) => (focus ? "1px solid red" : "1px solid var(--color-prm)")};
  transition: 0.2s ease-in-out;
  /* left: ${({ index }) => (2 - index) * 40}px; */
  left: ${({ index }) => (3 - index) * 40}px;
  &:hover {
    transform: translateX(3px);
  }
`;
const Work = ({ index, onClick, focus }) => {
  return <Card index={index} className="work" onClick={onClick} focus={focus}></Card>;
};

export default Work;
