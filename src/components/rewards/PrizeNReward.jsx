import React from "react";
import classes from "./PrizeNReward.module.css";
import purpleStar from "../../assets/star pu.svg";
import star from "../../assets/star.svg";
import { Container } from "react-bootstrap";
import champ from "../../assets/9486889 1.png";
import goldMedal from "../../assets/gold_medal 1.png";
import silverMedal from "../../assets/silver_medal 1.png";
import bronzeMedal from "../../assets/bronze_medal 1.png";
function PrizeNReward() {
  return (
    <Container>
      <div className="d-flex justify-content-center justify-content-md-between mb-5 flex-column flex-md-row align-items-center align-items-md-start">
        <img src={purpleStar} alt="" />
        <div className="text-start">
          <h2>
            Prizes and <br />
            <span className={classes["reward-text"]}>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and <br />
            for participants
          </p>
        </div>
      </div>
      <div className="d-flex gap-3 mt-5 flex-column flex-lg-row justify-content-lg-center">
        <img src={champ} alt="" className={classes["champ-img"]} />
        <div>
          <div className="d-flex gap-3 justify-content-between align-items-center mt-4">
            <div className={classes["medal-wrapper"]}>
              <img src={silverMedal} alt="" />
              <div className={classes["award-text-wrapper"]}>
                <p>2nd</p>
                <p>Runner</p>
              </div>
              <p className={classes["money-text"]}>N300,000</p>
            </div>
            <div className={classes["gold-wrapper"]}>
              <img src={goldMedal} alt="" />
              <div className={classes["award-text-wrapper"]}>
                <p>1st</p>
                <p>Winner</p>
              </div>
              <p className={classes["money-gold-text"]}>N400,000</p>
            </div>
            <div className={classes["medal-wrapper"]}>
              <img src={bronzeMedal} alt="" />
              <div className={classes["award-text-wrapper"]}>
                <p>3nd</p>
                <p>Runner</p>
              </div>
              <p className={classes["money-text"]}>N150,000</p>
            </div>
          </div>
          <img src={star} alt="" className="float-end" />
        </div>
      </div>
    </Container>
  );
}

export default PrizeNReward;
