import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 70%;
  border-right: ${({ focus }) => (focus ? "1px solid red" : "1px solid var(--color-prm)")};
  transition: 1s cubic-bezier(0.25, 0.68, 0.21, 0.99);
  left: ${({ index }) => (4 - index) * 40}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    transform: translateX(4px);
  }
  & > p {
    height: 130px;
    font-size: 22px;
    padding-left: 4px;
    color: var(--color-prm);
    cursor: pointer;
    text-decoration: none;
    writing-mode: vertical-rl;
    transform: rotate(-180deg) translateY(90px);
    margin: 0;
    align-self: flex-end;
  }
`;

function Work({ name, index, focus, onClick }) {
  return (
    <Card index={index} className={`work`} focus={focus} onClick={onClick}>
      <p className="copy">{name}</p>
    </Card>
  );
}

export default Work;
