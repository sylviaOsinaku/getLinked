import React from "react";
import classes from "./JudgingCriteria.module.css";
import purpleStar from "../../assets/star pu.svg";
import judgePeps from "../../assets/8046554 1.png";
import { Container } from "react-bootstrap";
function JudgingCriteria() {
  return (
    <div className={classes["judge-criteria-wrapper"]} id="overview">
      <Container className="d-flex justify-content-between gap-4 py-5 flex-column flex-lg-row">
        <div className={classes["judging-img-wrapper"]}>
          <img src={purpleStar} alt="" />
          <img src={judgePeps} alt="" className={classes["judging-img-peps"]} />
        </div>
        <div>
          <h2 className="fs-3 mb-3 text-center text-lg-start">
            Judging Criteria <br />
            <span className={classes["key-text"]}>Key attributes</span>{" "}
          </h2>
          <ul className={classes["judging-list-wrapper"]}>
            <li className="mb-3">
              <span>Innovation and Creativity: </span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </li>
            <li className="mb-3">
              <span>Functionality: </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </li>
            <li className="mb-3">
              <span>Impact and Relevance: </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </li>
            <li className="mb-3">
              <span>Technical Complexity: </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </li>
            <li className="mb-3">
              <span>Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </li>
          </ul>
          <button className={classes["read-btn"]}> Read More</button>
        </div>
      </Container>
    </div>
  );
}

export default JudgingCriteria;
