import React, { useState } from "react";

function PraiseSignUp() {
  const [fullName, setFullName] = useState("");
  const [jobApplication, setJobApplication] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({});

  const locationOptions = ["Nigeria", "Ghana", "Kenya"];
  const JobOptions = ["Developer", "Designer", "Analyst"];
  const locationOptionsHandler = (e) => {
    setUserLocation(e.target.value);
  };
  const jobOptionsHandler = (e) => {
    setJobApplication(e.target.value);
  };

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  };

  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const resetForm = function () {
    setConfirmPassword("");
    setFullName("");
    setJobApplication("");
    setUserEmail("");
    setUserLocation("");
  };

  const submitFormHandler = function (e) {
    e.preventDefault();
    setFormData({
      fullName: fullName,
      email: userEmail,
      location: userLocation,
      jobApplication: jobApplication,
    });
    console.log(formData);
    resetForm();
  };
  return (
    <form className="container mx-auto my-10 px-4" onSubmit={submitFormHandler}>
      <div className="md:flex justify-between gap-10 mb-3 flex-column">
        <div className="w-full">
          <select
            className="block px-5 py-2 mb-5 w-full shadow-lg bg-white border border-gray-400 text-black  hover:border-gray-500  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            name="location"
            id="location"
            onChange={locationOptionsHandler}
            value={userLocation}
          >
            <option value="">Location</option>
            {locationOptions.map((location, index) => (
              <option value={location} key={location + index}>
                {location}
              </option>
            ))}
          </select>
          <select
            name="job"
            id="job"
            className="block px-5 py-2 mb-5 w-full shadow-lg bg-white border border-gray-400 text-black  hover:border-gray-500  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={jobOptionsHandler}
            value={jobApplication}
          >
            <option value="">I am applying as </option>
            {JobOptions.map((job, index) => (
              <option value={job} key={job + index}>
                {job}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={fullNameHandler}
            className="block px-5 py-2 mb-5 w-full shadow-lg bg-white border border-gray-400
          text-black hover:border-gray-500 rounded shadow leading-tight placeholder-black
          focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={userEmail}
            placeholder="E-mail"
            onChange={emailHandler}
            className="block px-5 py-2 mb-5 shadow-lg placeholder-black w-full  bg-white border border-gray-400 text-black  hover:border-gray-500  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />

          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={confirmPasswordHandler}
            placeholder="Confirm Password"
            value={confirmPassword}
            className="block px-5 py-2 shadow-lg mb-5 w-full placeholder-black bg-white border border-gray-400 text-black  hover:border-gray-500  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-sky-700 text-white rounded px-5 py-3"
        >
          Apply to Join talentYard
        </button>
      </div>
    </form>
  );
}

export default PraiseSignUp;
