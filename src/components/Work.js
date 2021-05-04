import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 90%;
  border-right: ${({ focus }) => (focus ? "1px solid red" : "1px solid var(--color-prm)")};
  transition: 1s cubic-bezier(0.25, 0.68, 0.21, 0.99);
  /* left: ${({ index }) => (2 - index) * 40}px; */
  left: ${({ index }) => (4 - index) * 40}px;
  transform: ${({ open }) => (open ? "translateX(1200px)" : "")};
  &:hover {
    margin-left: 3px;
  }
`;

function Work({ index, focus, open, onClick }) {
  return <Card index={index} onClick={onClick} className={`work`} focus={focus} open={open}></Card>;
}

export default Work;
