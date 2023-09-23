import React from "react";
import classes from "./Privacy.module.css";
import LockMan from "../../assets/08 1.png";
import lock from "../../assets/Vector.png";
import star from "../../assets/star.svg";

import listTrem from "../../assets/list terms.svg";
import { Container } from "react-bootstrap";
function Privacy() {
  return (
    <Container className="d-flex flex-column flex-lg-row gap-5 my-5">
      <div className="text-center text-md-start">
        <div className=" d-flex">
          <h2 className="mb-3">
            Privacy Policy and <br />{" "}
            <span className={classes["term-text"]}>Terms</span>
          </h2>
          <img src={star} alt="" />
        </div>
        <p className="text-white-50 mb-5">
          Last updated on September 12, 2023{" "}
        </p>
        <p className="mb-5">
          Below are our privacy & policy, which outline a lot of goodies. it s
          our aim to always take of our participant
        </p>
        <div className={classes["privacy-wrapper"]}>
          <p className="lh-4">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <ul className=" list-unstyled">
            <h3 className={classes["license-text"]}>Licensing Policy</h3>
            <h4 className="fs-6 mb-4">
              Here are terms of our Standard License:
            </h4>
            <li className="mb-3 lh-4">
              <img src={listTrem} alt="" className="me-2" />
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </li>
            <li className="lh-4">
              {" "}
              <img src={listTrem} alt="" className="me-2" />
              <span>
                You are licensed to use the item available at any free source
                sites, for your project developemen t.
              </span>
            </li>
          </ul>
          <div className="text-center">
            <button className={classes["read-more"]}>Read More</button>
          </div>
        </div>
      </div>
      <div className={classes["lock-img-wrapper"]}>
        <img src={lock} alt="" className={classes["lock-img"]} />
        <div>
          <img src={LockMan} alt="" className={classes["lock-man-img"]} />
        </div>
      </div>
    </Container>
  );
}

export default Privacy;
