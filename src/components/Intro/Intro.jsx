import React from "react";
import classes from "./Intro.module.css";
import { Container } from "react-bootstrap";
import fire from "../../assets/1f4a5.svg";
import lightBulb from "../../assets/Creative 1.svg";
import globe from "../../assets/Image 1.png";
import man from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import stroke from "../../assets/Vector 4.svg";
import star from "../../assets/star.svg";
import chain from "../../assets/chain-9365116-7621444.svg";

function Intro() {
  return (
    <Container className={classes["intro-wrapper"]}>
      <div className="mt-5 d-flex flex-column-reverse flex-md-row justify-content-start justify-content-md-between align-items-md-center  align-items-start">
        <img src={star} alt="" />
        <div>
          <h2>
            {" "}
            <i>Igniting a Revolution in HR Innovation</i>
          </h2>

          <img src={stroke} alt="" className={classes["stroke-img"]} />
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
        <div className="text-center text-md-start">
          <img src={lightBulb} alt="" className={classes["light-bulb"]} />
          <h1 className="mt-5 mb-2 display-3">
            getlinked Tech Hackathon{" "}
            <span className={classes["number-1"]}>1.0</span>{" "}
            <img src={chain} alt="" className={classes["getlinkedtext-img"]} />
            <img src={fire} alt="" className={classes["getlinkedtext-img"]} />
          </h1>
          <p className="mb-4">
            Participate in getlinked tech Hackathon 2023 stand
            <br /> a chance to win a Big prize
          </p>
          <button className={classes["register-btn"]}>Register</button>
          <div className="d-flex gap-2 justify-content-center justify-content-lg-start align-items-center align-items-md-start">
            <div style={{ fontFamily: "cursive" }}>
              <span className="fs-1">00</span>
              <small>H</small>
            </div>
            <div>
              <span className="fs-1">00</span>
              <small>M</small>
            </div>
            <div>
              <span className="fs-1">00</span>
              <small>S</small>
            </div>
          </div>
        </div>

        <div className={`${classes["globe-img-wrapper"]} position-relative`}>
          <div className={classes["man-container"]}>
            <img src={man} alt="Man" className={classes["man-wrapper"]} />
          </div>

          <div className="position-absolute w-100 h-100 top-0">
            <img src={globe} alt="" className={classes["globe-image"]} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Intro;
