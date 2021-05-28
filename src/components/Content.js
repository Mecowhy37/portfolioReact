import React from "react";
import styled from "styled-components";

const Slider = styled.section`
  position: absolute;
  padding: 0 40px;
  grid-row-start: 1;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  transition: clip-path 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
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

const Content = ({ workCon, index, activeWork }) => {
  return (
    <Slider key={workCon.name} index={index} className={index - 1 === activeWork ? "open" : index <= activeWork ? "closedR" : "closedL"}>
      <h1 className="header">{workCon.name}</h1>
    </Slider>
  );
};

export default Content;
