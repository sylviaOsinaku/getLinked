import React from "react";
import starPu from "../../assets/star pu.svg";
import star from "../../assets/star.svg";
import logo from "../../assets/getlinked.svg";
import { Container } from "react-bootstrap";
import twitter from "../../assets/Vector.svg";
import IconInstagram from "../../ui/Instagram";
import IconFacebook from "../../ui/Facebook";
import IconBxlLinkedin from "../../ui/Linkendin";
import IconBxsPhoneCall from "../../ui/Phone";
import IconLocationSharp from "../../ui/Location";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <Container className="py-5 d-flex justify-content-between gap-5 my-5 flex-column flex-lg-row  align-items-start">
        <div>
          <img src={starPu} alt="" />
        </div>
        <div className={classes["footer-text-wrapper"]}>
          <img src={logo} alt="" className="mb-3" />
          <p className="lh-5 fs-6">
            getlinked Terms of Use Privacy Policy Getlinked Tech Hackathon is a
            technology innovation program established by a group of
            organizations with the aim of showcasing young and talented
            individuals in the field of technology
          </p>
          <div className={classes["terms-privacy-wrapper"]}>
            <span className={classes["terms-privacy-term"]}>Terms</span>
            <span className="ps-4">Privacy</span>
          </div>
        </div>
        <ul className=" list-unstyled">
          <h4 className="fs-6">Useful Links</h4>
          <li>Overview</li>
          <li>Faqs</li>
          <li>Timeline</li>
          <li>Register</li>
          <li className="d-flex gap-2 justify-content-center align-items-center">
            <h4 className="fs-6">Follow us on</h4>
            <IconInstagram />
            <img src={twitter} alt="" />
            <IconFacebook />
            <IconBxlLinkedin />
          </li>
        </ul>
        <div>
          <img src={star} alt="" />
        </div>
        <div>
          <h4 className="fs-6">Contact Us</h4>
          <p>
            <IconBxsPhoneCall /> <span>+234 6707653444</span>
          </p>
          <p>
            <IconLocationSharp />
            <span>
              27,Alara Street <br />
              Yaba 100012
              <br /> Logoas State
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
