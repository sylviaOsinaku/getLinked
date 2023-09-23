import React from "react";
import classes from "./FaqQuestions..module.css";
import { Container } from "react-bootstrap";
import purpleStar from "../../assets/star pu.svg";
import questionMark from "../../assets/_.png";
import questionMan from "../../assets/cwok_casual_21 1.png";
import plus from "../../assets/+.svg";
function FaqQuestions() {
  return (
    <div className={classes["faqs-wrapper"]} id="faq">
      <Container className="d-flex gap-md-3 py-5 flex-column flex-lg-row gap-1 align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
        <div className={classes["faq-img-wrapper"]}>
          <img src={purpleStar} alt="" />
          <h2>
            Frequently Ask <span>Questions.</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1. 0
          </p>
          <div className={classes["faq-wrapper"]}>
            <div className="d-flex justify-content-between align-items-center py-1">
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 ">
              <p>What happens if I need help during the hackathon?</p>
              <img src={plus} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 ">
              <p>What happens if I don't have an idea for a project?</p>
              <img src={plus} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 ">
              <p>Can I join a team or do I have to come with one?</p>
              <img src={plus} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 ">
              <p>What happens after the hackathon ends?</p>
              <img src={plus} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 ">
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} alt="" />
            </div>
          </div>
        </div>

        <div className="position-relative mt-4 mt-lg-0">
          <div
            className={`${classes["question-img-container"]} d-flex gap-5 position-relative justify-content-center align-items-center `}
          >
            <img src={questionMark} alt="" className="object-fit-contain" />

            <img
              src={questionMark}
              alt=""
              className="object-fit-contain shadow-lg p-lg-3 p-0"
            />

            <img src={questionMark} alt="" className="object-fit-contain" />
          </div>
          <img
            src={questionMan}
            alt=""
            className={classes["question-man-img"]}
          />
        </div>
      </Container>
    </div>
  );
}

export default FaqQuestions;
