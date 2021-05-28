import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import worksList from "./WorksIndex";
import Work from "./Work";
import SliderPages from "./SliderPages";
import { useEffect } from "react";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px;
  list-style: none;
  overflow: hidden;
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
  const press = (e) => {
    if (e.keyCode === 37) {
      activeWork > -1 ? setActiveWork((prev) => prev - 1) : setActiveWork(-1);
    } else if (e.keyCode === 39) {
      activeWork < worksList.length - 1 ? setActiveWork((prev) => prev + 1) : setActiveWork(worksList.length - 1);
    } else if (e.keyCode === 16) {
      console.log("L shift");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", press);

    return () => {
      document.removeEventListener("keydown", press);
    };
  }, [activeWork]);
  const explore = {
    name: "explore my work",
  };
  console.log(activeWork);
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
        <SliderPages content={[explore, ...worksList]} active={activeWork} />
      </Cards>
    )
  );
};

export default Works;
