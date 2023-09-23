import React, { useState } from "react";
import classes from "./Register.module.css";
import star from "../../assets/star.svg";
import purpleStar from "../../assets/star pu.svg";
import { Container } from "react-bootstrap";
import manImage from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import move1 from "../../assets/image_processing20200511-10310-13mnlsx.svg";
import move2 from "../../assets/1f6b6-2640.svg";
import BasicModal from "./Modal";
function Register() {
  const [open, setOpen] = React.useState(false);

  const [teamName, setTeamName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [projectTopic, setProjectTopic] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const categoryOptions = [1, 2, 3, 4, 5];
  const groupOptions = [5, 10, 20, 30, 40];

  const handleClose = () => setOpen(false);
  const teamNameHandler = (e) => {
    setTeamName(e.target.value);
  };
  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const projectTopicHandler = (e) => {
    setProjectTopic(e.target.value);
  };
  const groupSizeHandler = (e) => {
    setGroupSize(e.target.value);
  };
  const catergoryHandler = (e) => {
    setUserCategory(e.target.value);
  };
  const policyHandler = (e) => {
    setPolicy(e.target.checked);
  };
  const resetForm = function () {
    setUserEmail("");
    setTeamName("");
    setPhoneNumber("");
    setUserCategory("");
    setGroupSize("");
    setProjectTopic("");
    setIsLoading(false);
  };

  const baseUrl = "https://backend.getlinked.ai";

  const SubmitFormHandler = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      team_name: teamName,
      project_topic: `${projectTopic}`,
      email: userEmail,
      phone_number: phoneNumber,
      category: +userCategory,
      privacy_poclicy_accepted: policy,
      group_size: +groupSize,
    };

    try {
      const response = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsLoading(false);
      console.log(formData);
      if (response.ok) {
        console.log("message successful");
        setOpen(true);
      } else {
        console.error("message failed");
      }
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  return (
    <Container className="pb-5">
      <div className="mt-5 d-flex justify-content-between ">
        <img src={star} alt="" />
        <img src={purpleStar} alt="" />
      </div>

      <div className="d-flex mt-5 flex-column flex-md-row justify-content-between align-items-md-start align-items-center">
        <div>
          <img src={manImage} alt="" className="w-100" />
        </div>

        <div className={classes["sub-form-wrapper"]}>
          <h3 className={`${classes["contact-text"]} mb-3 mb-md-5 fs-4 lh-3`}>
            Register
          </h3>
          <div className="d-flex mb-3 align-items-center">
            Be part of this movement!{" "}
            <div className={classes["movement-wrapper-img"]}>
              <img src={move1} alt="" />
              <img src={move2} alt="" />
            </div>{" "}
          </div>
          <h3 className="mb-3">CREATE YOUR ACCOUNT</h3>
          <form
            className={classes["form-wrapper"]}
            onSubmit={SubmitFormHandler}
          >
            <div className="d-flex flex-column flex-md-row gap-3">
              <div className="w-100">
                <label htmlFor="TeamName" className="mb-1">
                  Team's Name
                </label>

                <input
                  type="text"
                  name="full-name"
                  placeholder="Enter the name of your group"
                  onChange={teamNameHandler}
                  value={teamName}
                  className="d-block w-100"
                />
              </div>
              <div className="w-100">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Enter your phone number"
                  onChange={phoneNumberHandler}
                  value={phoneNumber}
                  className="d-block w-100"
                />
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3">
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Mail"
                  onChange={userEmailHandler}
                  value={userEmail}
                  className="d-block w-100"
                />
              </div>
              <div>
                <label htmlFor="ProjectTopic">Project Topic</label>
                <input
                  onChange={projectTopicHandler}
                  value={projectTopic}
                  type="text"
                  name="project-topic"
                  id="project-topic"
                  placeholder="what is your project topic"
                  className="d-block w-100"
                />
              </div>
            </div>

            <div className="d-flex  gap-3 mb-2">
              <select
                name="category"
                onChange={catergoryHandler}
                value={userCategory}
                className="p-2 w-100"
              >
                <option>Select your Category</option>
                {categoryOptions.map((opt, index) => (
                  <option
                    value={opt}
                    key={opt + index}
                    className="bg-transparent text-white"
                  >
                    {opt}
                  </option>
                ))}
              </select>

              <select
                name="group-size"
                className="p-2 w-100"
                onChange={groupSizeHandler}
                value={groupSize}
              >
                <option value="">Group Size</option>
                {groupOptions.map((opt, index) => (
                  <option
                    value={opt}
                    key={opt + index}
                    className="bg-transparent text-black p-2"
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <p className={classes["review-text"]}>
              <i>Please review your registration details before submitting</i>
            </p>
            <div className="">
              <input
                type="checkbox"
                name="policy"
                onChange={policyHandler}
                value={policy}
                className=" d-inline-block"
              />
              <span>
                I agree with the event terms and conditions and privacy policy
              </span>
            </div>

            <div className="text-center">
              <button className={classes["read-btn"]}>
                {isLoading ? "Registering" : "Register Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {open && <BasicModal handleClose={handleClose} openModal={open} />}
    </Container>
  );
}

export default Register;
