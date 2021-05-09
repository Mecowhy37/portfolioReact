import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 70%;
  border-right: 1px solid var(--color-prm);
  transition: 1s cubic-bezier(0.25, 0.68, 0.21, 0.99);
  left: ${({ pos }) => pos};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    transform: translateX(4px);
    /* height: 70.4%; */
  }
  & > p {
    height: 130px;
    font-size: 20px;
    padding-left: 4px;
    color: var(--color-prm);
    cursor: pointer;
    text-decoration: none;
    writing-mode: vertical-rl;
    transform: rotate(-180deg) translateY(80px);
    margin: 0;
    align-self: flex-end;
    white-space: nowrap;
  }
`;

function Work({ name, index, focus, onClick, pos }) {
  return (
    <Card index={index} className={`work`} focus={focus} onClick={onClick} pos={pos}>
      <p className="header">{name}</p>
    </Card>
  );
}

export default Work;
