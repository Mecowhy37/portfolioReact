import React from "react";
import styled from "styled-components";

const Slides = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Slider = styled.section`
  position: absolute;
  scroll-snap-type: y mandatory;

  padding: 0 40px;
  grid-row-start: 1;
  width: 100%;
  height: 100%;
  transition: clip-path 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
  overflow-y: scroll;
  scroll-behavior: smooth;
  .section {
    height: 100%;
    display: grid;
    place-items: center;
    scroll-snap-align: start;
  }
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
`;

const SliderPages = ({ content, active }) => {
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
      <Slider key={content[1].name} className={0 === active ? "open" : 0 <= active ? "closedR" : "closedL"}>
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
      <Slider key={content[2].name} className={1 === active ? "open" : 1 <= active ? "closedR" : "closedL"}>
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
