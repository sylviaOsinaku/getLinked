import React, { useEffect } from "react";
import classes from "./Timeline.module.css";
import { Container } from "react-bootstrap";
import starPurple from "../../assets/star pu.svg";
// importing aos

function TimelineFile() {
  
  return (
    <div id="timeline" data-aos="fade-in">
      <Container className="py-5">
        <center className="mb-3">
          {" "}
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </center>

        <div className="d-block d-md-none">
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>1</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>
                Hackathon Announcement
              </h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register.
              </p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>2</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>
                Teams Registration begin
              </h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register.
              </p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>3</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>
                Teams Registration end
              </h2>
              <p>Interested Participants are no longer Allowed to register.</p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>4</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>
                Announcement of the accepted teams and ideas
              </h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced.
              </p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>5</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>
                Getlinked Hackathon 1.0 Offically Begins.
              </h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions.
              </p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>6</span>
            </div>
            <div className="text-start">
              <h2 className={classes["timeline-heading-text"]}>Demo Day.</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day.
              </p>

              <h3 className={classes["timeline-date-text"]}>
                November 18, 2023
              </h3>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block">
          <div className="row align-items-center  row-cols-md-3 ">
            <div className="text-end">
              <h2 className={classes["timeline-heading-text"]}>
                Hackathon Announcement
              </h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes["vertical-line"]} custom-vertical-line`}
              ></div>

              <span className={classes["timeline-number"]}>1</span>
            </div>
            <h3 className={classes["timeline-date-text"]}>November 18, 2023</h3>
          </div>

          <div className="row align-items-center  row-cols-md-3">
            <h3 className={classes["timeline-date-text"]}>November 18, 2023</h3>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={classes["vertical-line"]}></div>
              <span className={classes["timeline-number"]}>2</span>
            </div>

            <div className="text-end">
              <h2 className={classes["timeline-heading-text"]}>
                Teams Registration begin
              </h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register.
              </p>
            </div>
          </div>

          <div className="row row-cols-3 align-items-center">
            <div className="text-end">
              <h2 className={classes["timeline-heading-text"]}>
                Teams Registration ends
              </h2>
              <p>Interested Participants are no longer Allowed to register.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={classes["vertical-line"]}></div>
              <span className={classes["timeline-number"]}>3</span>
            </div>
            <h3 className={classes["timeline-date-text"]}>November 18, 2023</h3>
          </div>

          <div className="row row-cols-3 align-items-center">
            <h3 className={classes["timeline-date-text"]}>November 18, 2023</h3>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={classes["vertical-line"]}></div>
              <span className={classes["timeline-number"]}>4</span>
            </div>
            <div className="text-end">
              <h2 className={classes["timeline-heading-text"]}>
                Announcement of the accepted teams and ideas
              </h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced.
              </p>
            </div>
          </div>

          <div className="row row-cols-3 align-items-center">
            <div className="text-end">
              <h2 className={classes["timeline-heading-text"]}>
                Getlinked Hackathon 1.0 Offically Begins
              </h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={classes["vertical-line"]}></div>
              <span className={classes["timeline-number"]}>5</span>
            </div>
            <h3 className={classes["timeline-heading-text"]}>
              November 18, 2023
            </h3>
          </div>

          <div className="row row-cols-3 align-items-center">
            <h3 className={classes["timeline-heading-text"]}>
              November 18, 2023
            </h3>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={classes["vertical-line"]}></div>
              <span className={classes["timeline-number"]}>6</span>
            </div>
            <div className="text-end">
              <h2 className={classes["timeline-date-text"]}>Demo Day</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TimelineFile;
