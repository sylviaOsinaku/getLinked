import React from "react";
import classes from "./LinkedPartner.module.css";
import { Container } from "react-bootstrap";
import winWise from "../../assets/Winwise logo White colour 1.svg";
import payBox from "../../assets/Paybox.svg";
import vusal from "../../assets/Vizual Plus.svg";
import libertyPay from "../../assets/Liberty company logo white.svg";
import libertyAssured from "../../assets/Liberty company logo white colour.svg";
import PurpleStar from "../../assets/star pu.svg";
import wisPer from "../../assets/wisper logo white.svg";
function LinkedPartner() {
  return (
    <Container className="my-5">
      <center>
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </center>
      <img src={PurpleStar} alt="" className="my-2" />

      <div className={classes["partner-images-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={libertyAssured} alt="" className={classes["partner-img"]} />
          <img src={wisPer} alt="" />
        </div>

        <div className={classes["partner-vertical-line-wrap"]}>
          <span></span>
          <span></span>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={libertyPay} alt="" className={classes["partner-img"]} />
          <img src={payBox} alt="" />
        </div>
        <div className={classes["partner-vertical-line-wrap"]}>
          <span></span>
          <span></span>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={winWise} alt="" className={classes["partner-img"]} />
          <img src={vusal} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default LinkedPartner;
