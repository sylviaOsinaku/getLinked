import React from "react";
import classes from "./DetailedIntro.module.css";
import bigIdea from "../../assets/The big idea.png";
import purpleStar from "../../assets/star pu.svg";
import curvedArrow from "../../assets/arrow.svg";
import { Container } from "react-bootstrap";
function DetailedIntro() {
  return (
    <div className={classes["detailed-wrapper"]}>
      <Container className="d-flex py-4 align-items-center gap-5 flex-column flex-lg-row ">
        <div className="">
          <img src={purpleStar} alt="" />
          <img src={bigIdea} alt="" className={classes["bigidea-img"]} />

          <img src={curvedArrow} alt="" className="float-end" />
        </div>
        <div>
          <div className="d-flex justify-content-between mb-2 text-center text-md-start">
            <h2>
              Introduction to getlinked{" "}
              <span className={classes["text-hackathon"]}>
                tech Hackathon 1.0
              </span>
            </h2>
            <img src={purpleStar} alt="" />
          </div>
          <p className="lh-3 fs-6 text-center text-md-start">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </Container>
    </div>
  );
}

export default DetailedIntro;
