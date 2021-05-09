import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import worksList from "./WorksIndex";
import Work from "./Work";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px;
  list-style: none;
  overflow: hidden;
`;

const Content = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
  section {
    position: absolute;
    padding: 0 40px;
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    transition: clip-path 1s;
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
    &.closed {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
  }
`;

const lStart = "120px";
const l1 = "80px";
const l2 = "40px";
const lOut = "-60px";
const lOut2 = "-100px";
const r1 = "calc(100vw - 120px)";
const r2 = "calc(100vw - 80px)";
const rOut = "100vw";
const rOut2 = "calc(100vw + 40px)";
const rOut3 = "calc(100vw + 80px)";

let positions = [];
const Works = () => {
  const [activeWork, setActiveWork] = useState(null);
  const setting = () => {
    switch (activeWork) {
      case null:
        positions = [lStart, l1, l2, lOut, lOut2];
        break;
      case 0:
        positions = [r2, l1, l2, lOut, lOut2];
        break;
      case 1:
        positions = [r2, r1, l1, l2, lOut];
        break;
      case 2:
        positions = [rOut, r2, r1, l1, l2];
        break;
      case 3:
        positions = [rOut2, rOut, r2, r1, l2];
        break;
      case 4:
        positions = [rOut3, rOut2, rOut, r2, r1];
        break;
      default:
        console.log("unhandled");
        break;
    }
  };
  return (
    setting(),
    (
      <Cards>
        {worksList.map((workObj, index) => {
          return (
            <Work
              key={workObj.name}
              index={index}
              onClick={() => {
                if (index === activeWork) {
                  index > 0 ? setActiveWork(index - 1) : setActiveWork(null);
                } else {
                  setActiveWork(index);
                }
              }}
              name={workObj.name}
              focus={activeWork}
              pos={positions[index]}
            ></Work>
          );
        })}
        <Content>
          {worksList.map((workCon, index) => {
            return (
              <section key={workCon.name} focused={activeWork} indexed={index} className={index === activeWork ? "" : "closed"}>
                <div className="header">{workCon.name}</div>
              </section>
            );
          })}
        </Content>
      </Cards>
    )
  );
};

export default Works;
