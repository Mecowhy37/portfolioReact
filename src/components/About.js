import React from "react";
import "../fonts/fonts.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const Slider = styled.div`
  scroll-snap-type: y mandatory;
  padding: 0 40px;
  grid-row-start: 1;
  width: 100%;
  height: 100%;
  transition: clip-path 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
  overflow-y: scroll;
  scroll-behavior: smooth;
  outline: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .section {
    height: 100%;
    display: grid;
    place-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  .textGroup {
    .header {
      line-height: 1.1em;
      font-size: 55px;
    }
    .copy {
      padding-top: 2.6em;
      margin-left: 1em;
      width: 35vw;
      font-size: 1.8em;
    }
  }
`;

function About() {
  let scrollBox = useRef();
  useEffect(() => {
    scrollBox.current.focus();
    console.log(document.activeElement);
  }, []);

  return (
    <Slider ref={scrollBox} tabIndex="-1">
      <div className="section">
        <Wrapper>
          <div className="textGroup">
            <div className="header">
              Hi! <br />
              my name is <br /> Mikolaj
            </div>
            <div className="copy">I'm polish frontend developer who started his journey in Copenhagen in Jan 2020 at multimedia design program at KEA.</div>
          </div>
          <div className="header">About</div>
        </Wrapper>
      </div>
      <div className="section">
        <Wrapper>
          <div className="textGroup">
            <div className="header">
              Hi! <br />
              my name is <br /> Mikolaj
            </div>
            <div className="copy">I'm polish frontend developer who started his journey in Copenhagen in Jan 2020 at multimedia design program at KEA.</div>
          </div>
          <div className="header">About</div>
        </Wrapper>
      </div>
    </Slider>
  );
}

export default About;

// <Wrapper>
// <div className="textGroup">
//   <div className="header">
//     Hi! <br />
//     my name is <br /> Mikolaj
//   </div>
//   <div className="copy">I'm polish frontend developer who started his journey in Copenhagen in Jan 2020 at multimedia design program at KEA.</div>
// </div>
// <div className="header">About</div>
// </Wrapper>
