import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import logo from "../../assets/getlinked.svg";
function MyNav() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes["nav-container"]}>
      <Navbar expand="lg" className={classes["nav-wrapper"]}>
        <Container>
          <Link
            className="navbar-brand"
            onClick={refreshPage}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={logo} alt="" width={"50%"} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Link className={"nav-link"}>lokkee</Link> */}
              <Link
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={"nav-link me-lg-5"}
              >
                Timeline
              </Link>
              <Link
                className={"nav-link me-lg-5"}
                ctiveClass="active"
                to="overview"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Overview
              </Link>
              <Link
                className={"nav-link me-lg-5"}
                ctiveClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQS
              </Link>
              <NavLink className={"nav-link me-lg-5"} to={"/contact"}>
                Contact
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className={`${classes["register-btn"]} nav-link text-center`}
                to={"/register"}
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
