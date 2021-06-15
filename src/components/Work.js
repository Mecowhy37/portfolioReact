import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 80%;
  border-right: 1px solid var(--color-prm);
  transition: 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
  /* transition: 1s cubic-bezier(0.33, 0.74, 0.34, 1); */
  left: ${({ pos }) => pos};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    transform: translateX(4px);
  }
  & > p {
    height: 130px;
    font-size: 23px;
    /* font-size: 20px; */
    padding-left: 2px;
    color: var(--color-prm);
    cursor: pointer;
    text-decoration: none;
    writing-mode: vertical-rl;
    transform: rotate(-180deg) translateY(20px);
    margin: 0;
    align-self: flex-end;
    white-space: nowrap;
    text-align: end;
  }
`;

function Work({ name, index, focus, onClick, pos }) {
  return (
    <Card index={index} className={`work`} focus={focus} onClick={onClick} pos={pos}>
      <p className="copy">{name}</p>
    </Card>
  );
}

export default Work;
