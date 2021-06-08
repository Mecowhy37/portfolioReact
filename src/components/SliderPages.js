import React from "react";
import styled from "styled-components";
// import Scroll, { animateScroll } from "react-scroll";
import { useState } from "react";

const Slides = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Slider = styled.section`
  position: absolute;
  padding: 0 40px;
  grid-row-start: 1;
  width: 100%;
  height: 100%;
  transition: clip-path 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  &.open {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%) !important;
  }
  &.closedL {
    clip-path: polygon(0% 0, 0 0, 0 100%, 0% 100%);
  }
  &.closedR {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  .section {
    height: 100%;
    display: grid;
    place-items: center;
    /* &:nth-of-type(1) {
      background-color: red;
    }
    &:nth-of-type(2) {
      background-color: blue;
    } */
  }
`;
const scrollHandler = (e) => {
  let maxDown = [...e.target.parentElement.children].length - 1;
  console.log(maxDown);
  if (e.deltaY > 0) {
    console.log("dół");
  } else {
    console.log("góra");
  }
};

// Scroll.Events.scrollEvent.register("begin", function (to, element) {
//   console.log("begin", to, element);
// });
const SliderPages = ({ content, active }) => {
  const [vibal, setVibal] = useState(0);
  return (
    <Slides className="slides">
      {/* {content.map((workCon, index) => {
        console.log(workCon, index);
        return (
          <Slider key={workCon.name} index={index} className={index - 1 === active ? "open" : index <= active ? "closedR" : "closedL"}>
            <div className="section">
              <h1 className="header">{workCon.name}</h1>
            </div>
            <div className="section">
              <h1 className="header">druga</h1>
            </div>
          </Slider>
        );
      })} */}
      <Slider key={content[0].name} className={-1 === active ? "open" : -1 <= active ? "closedR" : "closedL"}>
        <div className="section">
          <h1 className="header">{content[0].name}</h1>
        </div>
      </Slider>
      <Slider key={content[1].name} onWheel={scrollHandler} className={0 === active ? "open" : 0 <= active ? "closedR" : "closedL"}>
        <div className="section">
          <h1 className="header">{content[1].name}</h1>
        </div>
        <div className="section">
          <h1 className="header">druga</h1>
        </div>
        <div className="section">
          <h1 className="header">trzecia</h1>
        </div>
      </Slider>
      <Slider key={content[2].name} onWheel={scrollHandler} className={1 === active ? "open" : 1 <= active ? "closedR" : "closedL"}>
        <div className="section">
          <h1 className="header">{content[2].name}</h1>
        </div>
        <div className="section">
          <h1 className="header">druga</h1>
        </div>
      </Slider>
    </Slides>
  );
};

export default SliderPages;
