import React from "react";
import styled from "styled-components";

const Card = styled.li`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 100%;
  border-right: ${({ focus }) => (focus ? "1px solid red" : "1px solid var(--color-prm)")};
  transition: 1s cubic-bezier(0.25, 0.68, 0.21, 0.99);
  /* left: ${({ index }) => (2 - index) * 40}px; */
  left: ${({ index }) => (3 - index) * 40}px;
  &:hover {
    transform: translateX(3px);
  }
  &.open {
    transform: translateX(1195px);
  }
`;

// function setPositions() {}

const Work = ({ index, handler }) => {
  // function clickAction(e) {
  //   console.log(e.target);
  //   let all = [...document.querySelectorAll(".work")];
  //   let opened = [...document.querySelectorAll(".open")];
  //   let index = all.indexOf(e.target);
  //   if (!e.target.classList.contains("open")) {
  //     all.forEach((el) => (all.indexOf(el) <= index ? el.classList.add("open") : el.classList.remove("open")));
  //   } else {
  //     all.forEach((el) => {
  //       if (opened.length > 1) {
  //         all.indexOf(el) > all.indexOf(e.target) && el.classList.remove("open");
  //       } else {
  //         e.target.classList.remove("open");
  //       }
  //     });
  //   }
  // }

  return <Card index={index} onClick={handler} className="work"></Card>;
};

export default Work;
