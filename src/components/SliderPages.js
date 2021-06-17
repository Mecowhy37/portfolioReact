import React from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";

const Slides = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Slider = styled.div`
  position: absolute;
  scroll-snap-type: y mandatory;
  padding: 0 40px;
  grid-row-start: 1;
  width: 100%;
  height: 100%;
  transition: clip-path 1.2s cubic-bezier(0.25, 0.68, 0.21, 1);
  overflow-y: scroll;
  scroll-behavior: smooth;
  &:focus {
    border: 50px solid red;
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

  .section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    height: 100%;
    display: grid;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    &:not(#intro) {
      grid-template-rows: 15% 5% 60% 5% 15%;
      grid-template-columns: 1fr minmax(0, 25vw) 1fr;
      & > h1 {
        grid-row: 3/4;
        justify-self: flex-start;
        align-self: flex-start;
        margin-left: 17%;
        text-transform: lowercase;
        transform: translateY(-7%);
        .index {
          color: transparent;
          -webkit-text-stroke: 0.5px white;
          transform: translateY(200px);
        }
      }
      .tech {
        grid-column: 3/4;
        grid-row: 3/4;
        align-self: flex-start;
        justify-self: flex-end;
        margin-right: 27%;
        p {
          text-align: end;
        }
      }
    }
    .coverImage {
      grid-row: 2/5;
      grid-column: 2/3;
      margin: 0 1em;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: repeat(4, minmax(0, 1fr));
      grid-template-columns: minmax(0, 1fr);
      img {
        grid-row: 1/-1;
        grid-column: 1/-1;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
        /* &.filter {
          filter: grayscale(1) brightness(1.5) contrast(0.8);
        } */
      }
      h1 {
        white-space: nowrap;
        grid-row: 3/4;
        grid-column: 1/-1;
        align-self: flex-end;
        justify-self: center;
      }
    }
  }
`;

const SliderPages = ({ content, active }) => {
  const parent = useRef();
  const foobar = useRef();
  const ezone = useRef();

  useEffect(() => {
    const press = (e) => {
      console.log(parent.current.children[active]);
      if (e.keyCode === 38) {
        e.preventDefault();
        parent.current.children[active + 1].focus();
        parent.current.children[active + 1].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
      } else if (e.keyCode === 40) {
        e.preventDefault();
        foobar.current.focus();
        foobar.current.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
      }
    };
    document.addEventListener("keydown", press);

    return () => {
      document.removeEventListener("keydown", press);
    };
  }, [active]);

  return (
    <Slides className="slides" ref={parent}>
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
      <Slider key={content[0].name} className={`scroller ${-1 === active ? "open" : -1 <= active ? "closedR" : "closedL"}`} tabindex="0">
        <div className="section" id="intro">
          <h1 className="header">{content[0].name}</h1>
        </div>
      </Slider>
      <Slider ref={foobar} key={content[1].name} className={`scroller ${0 === active ? "open" : 0 <= active ? "closedR" : "closedL"}`} tabindex="0">
        <div className="section">
          <h1 className="header">
            <span className="index">{`0${content[1].index}`}</span>
            <br />
            {content[1].name}
          </h1>
          <div className="coverImage">
            <h1 className="header">{content[1].coverDes}</h1>
            <img className="filter" src={content[1].cover} alt="foobar" />
          </div>
          <div className="tech">
            {content[1].tech.map((e) => (
              <p key={e} className="copy">
                {e}
              </p>
            ))}
          </div>
        </div>
        <div className="section">
          <h1 className="header">druga</h1>
        </div>
        <div className="section">
          <h1 className="header">trzecia</h1>
        </div>
      </Slider>
      <Slider ref={ezone} key={content[2].name} className={`scroller ${1 === active ? "open" : 1 <= active ? "closedR" : "closedL"}`} tabindex="0">
        <div className="section">
          <h1 className="header">
            <span className="index">{`0${content[2].index}`}</span>
            <br />
            {content[2].name}
          </h1>
          <div className="coverImage">
            <h1 className="header">{content[2].coverDes}</h1>
            <img className="filter" src={content[2].cover} alt="foobar" />
          </div>
          <div className="tech">
            {content[2].tech.map((e) => (
              <p key={e} className="copy">
                {e}
              </p>
            ))}
          </div>
        </div>
        <div className="section">
          <h1 className="header">druga</h1>
        </div>
        <div className="section">
          <h1 className="header">trzecia</h1>
        </div>
      </Slider>
    </Slides>
  );
};

export default SliderPages;
