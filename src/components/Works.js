import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import worksList from "./WorksIndex";
import Work from "./Work";
import Content from "./Content";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px;
  list-style: none;
  overflow: hidden;
`;

const Contents = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
  & > section {
    position: absolute;
    padding: 0 40px;
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
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

const Works = () => {
  const [activeWork, setActiveWork] = useState(-1);
  let positions = () => {
    switch (activeWork) {
      case -1:
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
  const explore = {
    name: "explore my work",
  };
  return (
    positions(),
    (
      <Cards>
        {worksList.map((workObj, index) => {
          return (
            <Work
              key={workObj.name}
              index={index}
              onClick={() => {
                setActiveWork(() => {
                  if (index === activeWork) {
                    return index > 0 ? index - 1 : -1;
                  } else {
                    return index;
                  }
                });
              }}
              name={workObj.name}
              focus={activeWork}
              pos={positions[index]}
            ></Work>
          );
        })}
        <Contents>
          {[explore, ...worksList].map((workCon, index) => {
            return <Content workCon={workCon} index={index} activeWork={activeWork} />;
          })}
        </Contents>
      </Cards>
    )
  );
};

export default Works;
