import React from "react";
import styled from "styled-components";
// import { useRef, useEffect, useState } from "react";
import { useRef, useEffect } from "react";
import { arrow } from "../images/index";
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
  outline: none;
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
    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3%;
      p {
        padding-top: 3%;
        font-size: 0.95em;
      }
      h1 {
        position: relative;
        img {
          display: block;
          position: absolute;
          transform: translate(100%, -50%) rotate(4deg);
          top: 50%;
          right: 0;
          height: 30px;
          padding-left: 15px;
        }
      }
    }
    &:not(#intro) {
      grid-template-rows: 10% 10% 60% 10% 10%;
      grid-template-columns: 1fr minmax(0, 25vw) 1fr;
      & > h1 {
        grid-row: 3/4;
        justify-self: flex-start;
        align-self: flex-start;
        margin-left: 17%;
        transform: translateY(-7%);
        text-transform: lowercase;
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
      &.wimg {
        .pitch {
          grid-column: 1/3;
          align-self: start;
          margin-left: 17%;
          padding: 0;
        }
        .links {
          grid-column: 1/3;
          grid-row: 3/4;
          margin-left: 25%;
          justify-self: start;
        }
      }
      .pitch {
        grid-row: 3/5;
        grid-column: 1/4;
        line-height: 120%;
        padding: 0 10%;
        text-transform: none;
        align-self: start;
        justify-self: center;
        max-width: 100%;
        white-space: normal !important;
      }
      .prntscr {
        grid-row: 3/4;
        grid-column: 3/4;
        width: 100%;
        height: 100%;
        position: relative;
        img {
          position: absolute;
          display: block;
          height: 130%;
          place-self: center;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
        }
        p {
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          top: 100%;
        }
      }
      .links {
        grid-column: 1/4;
        grid-row: 3/4;
        margin-right: 20%;
        align-self: end;
        justify-self: end;
        display: flex;
        flex-direction: column;
        h3 {
          margin-bottom: 6%;
        }
        a {
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
          margin-left: 1em;
          margin-bottom: 3%;
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
        position: relative;
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
        .arrow {
          height: 30px;
          position: absolute;
          display: block;
          object-fit: contain;
          transform: rotate(95deg);
          bottom: -5%;
        }
      }
    }
  }
`;

const SliderPages = ({ intro, worksList, active }) => {
  let parent = useRef();
  useEffect(() => {
    let scrollActive = parent.current.children[active + 1];
    [...parent.current.children].forEach((el) => {
      if (el === scrollActive) {
        el.focus();
        return;
      }
    });
    const press = (e) => {
      // setScrolled((prev) => {
      //   if (active === -1) {
      //     return prev;
      //   }
      //   let New = [...prev];
      //   if (e.keyCode === 38) {
      //     if (prev[active] > 0) {
      //       New.splice(active, 1, prev[active] - 1);
      //       return New;
      //     }
      //     return New;
      //   } else if (e.keyCode === 40) {
      //     New.splice(active, 1, prev[active] + 1);
      //     return New;
      //   } else {
      //     return New;
      //   }
      // });
      // [...scrollActive.children][scrolled[active]].scrollIntoView();
    };
    document.addEventListener("keydown", press);

    return () => {
      document.removeEventListener("keydown", press);
    };
    // }, [active, scrolled]);
  }, [active]);

  return (
    <Slides className="slides" ref={parent}>
      {/* {worksList.map((workCon, index) => {
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
      <Slider key={intro.name} className={`scroller ${-1 === active ? "open" : -1 <= active ? "closedR" : "closedL"}`} tabIndex="-1">
        <div className="section" id="intro">
          <div className="flex">
            <h1 className="header">
              {intro.name}
              <img className="arrow" src={arrow} alt="arrow" />
            </h1>
            <p className="copy">*please use arrow keys to navigate</p>
          </div>
        </div>
      </Slider>
      {worksList.map((work, index) => (
        <Slider key={work.name} className={`scroller ${index === active ? "open" : index <= active ? "closedR" : "closedL"}`} tabIndex="-1">
          <div className="section">
            <h1 className="header">
              <span className="index">{`0${index + 1}`}</span>
              <br />
              {work.name}
            </h1>
            <div className="coverImage">
              <h1 className="header">{work.coverDes}</h1>
              <img className="filter" src={work.cover} alt="foobar" />
              {index === 0 ? <img className="arrow" alt="arrow" src={arrow}></img> : null}
            </div>
            <div className="tech">
              {work.tech.map((e) => (
                <p key={e} className="copy">
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className={`section ${work.screen ? "wimg" : ""}`}>
            <p className="copy pitch">{work.descr}</p>
            {work.screen ? (
              <div className="prntscr">
                <img src={work.screen} alt="work screen" />
                <p className="copy">current frontend</p>
              </div>
            ) : null}
            <div className="links">
              <h3 className="copy">links</h3>
              {work.links.map((link) => (
                <a className="copy" href={link.a}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Slider>
      ))}
    </Slides>
  );
};

export default SliderPages;
