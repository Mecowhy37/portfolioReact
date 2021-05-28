import React from "react";
import styled from "styled-components";

import Content from "./Content";

const Slides = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SliderPages = ({ content, active }) => {
  return (
    <Slides>
      {content.map((workCon, index) => {
        return <Content key={index} workCon={workCon} index={index} activeWork={active} />;
      })}
    </Slides>
  );
};

export default SliderPages;
