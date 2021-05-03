import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import Work from "./Work";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px;
  list-style: none;
  overflow: hidden;
`;

const Works = () => {
  let [worksList, setWorkList] = useState([
    {
      name: "vibal",
      focus: false,
      opened: false,
    },
    {
      name: "superGood",
      focus: false,
      opened: false,
    },
    {
      name: "lets watch",
      focus: false,
      opened: false,
    },
    {
      name: "backend",
      focus: false,
      opened: false,
    },
    {
      name: "mergn",
      focus: false,
      opened: false,
    },
  ]);
  function focusing(e) {
    setWorkList((worksList) => {
      let index = [...document.querySelectorAll(".work")].indexOf(e.target);
      return worksList.map((workObj) => {
        if (workObj === worksList[index]) {
          return (workObj = { ...workObj, focus: true, opened: true });
        } else {
          if (worksList.indexOf(workObj) <= index) {
            return (workObj = { ...workObj, focus: false, opened: true });
          } else {
            return (workObj = { ...workObj, focus: false, opened: false });
          }
        }
      });
    });
  }
  let toRight = [];
  let toLeft = [];
  worksList.filter((el) => {
    if (el.opened) {
      return toRight.unshift(el);
    } else {
      return toLeft.push(el);
    }
  });
  console.log(toLeft, toRight);

  return (
    <Cards>
      {worksList.map((workObj) => {
        return <Work key={workObj.name} index={worksList.indexOf(workObj)} onClick={focusing} name={workObj.name} focus={workObj.focus} data={worksList}></Work>;
      })}
    </Cards>
  );
};

export default Works;
