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

const Works = () => {
  let [worksList, setWorkList] = useState([
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
  ]);

  function focusing() {
    setWorkList((worksList) => {
      let lastOpened = [...document.querySelectorAll(".open")].length - 1;
      return worksList.map((workObj) => {
        if (workObj === worksList[lastOpened]) {
          console.log("set to true");
          return (workObj = { ...workObj, focus: true });
        } else {
          console.log("set to false");
          return (workObj = { ...workObj, focus: false });
        }
      });
    });
  }
  console.log(worksList);
  return (
    <Cards>
      {worksList.map((workObj) => (
        <Work key={workObj.name} handler={focusing} index={worksList.indexOf(workObj)} name={workObj.name} focus={workObj.focus}></Work>
      ))}
    </Cards>
  );
};

export default Works;
