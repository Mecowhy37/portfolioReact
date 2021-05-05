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
const worksList = [
  {
    name: "Vibal",
  },
  {
    name: "Lets watch",
  },
  {
    name: "Backend",
  },
  {
    name: "Mergn",
  },
  {
    name: "SuperGood",
  },
];

const Works = () => {
  const [activeWork, setActiveWork] = useState(null);
  return (
    <Cards>
      {worksList.map((workObj, index) => {
        return (
          <Work
            key={workObj.name}
            index={index}
            onClick={() => {
              if (worksList.indexOf(workObj) === 0) {
                activeWork === workObj.name ? setActiveWork(null) : setActiveWork(workObj.name);
              } else {
                setActiveWork(workObj.name);
              }
            }}
            name={workObj.name}
            focus={activeWork === workObj.name}
          ></Work>
        );
      })}
    </Cards>
  );
};

export default Works;

// let [worksList, setWorkList] = useState(initialList);
// function focusing(e) {
//   setWorkList((worksList) => {
//     let index = [...document.querySelectorAll(".work")].indexOf(e.target);
//     return worksList.map((workObj) => {
//       if (workObj === worksList[index]) {
//         if (workObj.focus && index === 0) {
//           return (workObj = { ...workObj, focus: false, opened: false });
//         } else {
//           return (workObj = { ...workObj, focus: true, opened: true });
//         }
//       } else {
//         if (worksList.indexOf(workObj) <= index) {
//           return (workObj = { ...workObj, focus: false, opened: true });
//         } else {
//           return (workObj = { ...workObj, focus: false, opened: false });
//         }
//       }
//     });
//   });
// }
