import React from "react";
import classes from "./Rules.module.css";
import { Container } from "react-bootstrap";
import star from "../../assets/star.svg";
import womanCheck from "../../assets/7450159 1.png";

function Rules() {
  return (
    <div className={classes["rules-container"]}>
      <Container className="d-flex gap-5 py-5 align-items-center flex-column-reverse flex-lg-row justify-content-center justify-content-md-start">
        <div className="text-center text-md-start">
          <img src={star} alt="" className="float-end " />
          <h2 className="mt-5 mb-4">
            Rules and <br />{" "}
            <span className={classes["guideline-text"]}>Guidelines</span>{" "}
          </h2>
          <p className="lh-3">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src={star} alt="" />
        </div>
        <div>
          <img src={womanCheck} alt="" className={classes["woman-check-img"]} />
        </div>
      </Container>
    </div>
  );
}

export default Rules;
