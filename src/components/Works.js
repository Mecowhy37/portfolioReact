import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import Work from "./Work";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px 0px 0px;
  list-style: none;
  overflow: hidden;
`;

const initialState = [
  {
    name: "vibal",
    focus: false,
  },
  {
    name: "superGood",
    focus: false,
  },
  {
    name: "lets watch",
    focus: false,
  },
  {
    name: "backend",
    focus: false,
  },
  {
    name: "mergn",
    focus: false,
  },
];

const Works = () => {
  let [worksList, setWorkList] = useState(initialState);

  function focusing() {
    setWorkList((prevWorksList) => {
      let all = [...document.querySelectorAll(".work")];
      let open = [...document.querySelectorAll(".open")];
      let lastOpen = open[open.length - 1];
      let indexInState = all.indexOf(lastOpen);
      let newState = prevWorksList.map((workObj) => {
        if (indexInState > -1) {
          if (prevWorksList.indexOf(workObj) === indexInState) {
            return { ...workObj, focus: true };
          } else {
            return { ...workObj, focus: false };
          }
        } else {
          return { ...workObj, focus: false };
        }
      });
      console.log(newState);
      return newState;
    });
  }

  return (
    <Cards>
      {worksList.map((workObj) => (
        <Work key={workObj.name} focusHandler={focusing} index={worksList.indexOf(workObj)} name={workObj.name} focus={workObj.focus}></Work>
      ))}
    </Cards>
  );
};

export default Works;
