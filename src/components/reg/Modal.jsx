import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import successDone from "../../assets/successfully-done-5108472-4288033 1.png";
import successMan from "../../assets/successful-man-3025713-2526911 1.png";
import starPu from "../../assets/star pu.svg";
import classes from "./Register.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  innerHeight: "100px",
  bgcolor: "transparent",
  border: "2px solid #903AFF",
  boxShadow: 24,
  p: 4,
  backdropFilter: "blur(10px)",
};

export default function BasicModal({ handleClose, openModal }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign={"center"} className={classes["box-wrapper"]}>
          <img src={starPu} alt="" className="float-end" />
          <div className={`${classes["success-img-wrapper"]} `}>
            <img src={successDone} alt="" className="" />
            <img
              src={successMan}
              alt=""
              className="position-absolute start-50"
            />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bolder"}
          >
            Congratulations
            <br /> you have successfully Registered!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Yes, it was easy and you did it! check your mail box for next step
            😉😉
          </Typography>
          <button
            className={`${classes["read-btn"]} w-100 mt-3`}
            onClick={handleClose}
          >
            Back
          </button>
        </Box>
      </Modal>
    </div>
  );
}
