import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Row, Col } from "react-bootstrap";
import footerLogo from "../../assets/img/footerlogo.svg";
import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import instragram from "../../assets/img/instagram.svg";
import linkdin from "../../assets/img/linkedin.svg";
import location from "../../assets/img/location.svg";
import mail from "../../assets/img/mail.svg";
import './Footer.scss'

const Footer = () => {
      const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
      } = useForm();

       const onSubmit = (data) => {console.log(data);
    reset()
    };
    return (
        <div>
            <div className="footer-wrapper  bg-light-green">
                <div className="container2 ">
                    <Row className="footer-paddimg">
                        <Col xl={3} md={4} className="mb-xl-0 mb-5">
                            <div className="footer">
                                <img src={footerLogo} className="img-fluid" alt="" />
                                <p className="fs-18 fw-600 text-clr-lightDark my-4">Fund your upcoming marketing and growth expenses without the hassle.</p>
                                <div className="social-link">
                                    <ul className="social-wrapper d-flex align-items-center list-unstyled">
                                        <li>
                                            <a href="" className="text-decoration-none me-3">
                                                {" "}
                                                <img src={twitter} className="img-fluid" alt="" />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-decoration-none me-3">
                                                {" "}
                                                <img src={facebook} className="img-fluid" alt="" />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-decoration-none me-3">
                                                {" "}
                                                <img src={instragram} className="img-fluid" alt="" />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-decoration-none me-3">
                                                {" "}
                                                <img src={linkdin} className="img-fluid" alt="" />{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} md={4} className="mb-md-0 mb-5">
                            <div className="footer-item ">
                                <div className="footerTitle">
                                    <p className="text-clr-gray fs-18 mb-4">Contact</p>
                                </div>
                                <div className="jenfi-info ">
                                    <div className="location-wrapper d-flex align-items-start my-3">
                                        <img src={location} className="img-fluid  me-2" alt="" />
                                        <p className="mb-0 fs-18 text-clr-dark">32 Pekin St #05-01 Singapore 048762</p>
                                    </div>
                                    <div className="mail-wrapper d-flex align-items-center">
                                        <img src={mail} className="img-fluid me-2" alt="" />
                                        <p className="mb-0 fs-18 text-clr-dark">hello@jenfi.com</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} md={4} className="mb-md-0 mb-5">
                            <div className="footer-item ">
                                <div className="footerTitle">
                                    <p className="text-clr-gray fs-18 mb-4">Navigation</p>
                                </div>
                                <div className="navigation-info">
                                    <a href="" className="text-decoration-none mb-2 fs-18 text-clr-dark d-block">
                                        Home
                                    </a>
                                    <a href="" className="text-decoration-none mb-0 fs-18 text-clr-dark">
                                        Jenfi Blog
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} md={4} className="mb-md-0 mb-5">
                            <div className="footerTitle ">
                                <p className="text-clr-gray fs-18 mb-4">Join Our Newsletter</p>
                            </div>
                            <div className="inputFooter">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("email", {
                                            required: "This is required *",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Please enter a valid email",
                                            },
                                        })}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="text-warning fw-bold">{message}</p>} />
                                    <button type="submit" className="footerBtn mt-3">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>

                    <div className="footer-bottom ">
                        <div className="footerBottomWrapper d-flex justify-content-between py-4">
                            <p className="mb-0 text-clr-lightDark fs-16">Jenfi © 2021 All rights reserved</p>
                            <div className="foooterLink">
                                <a href="" className="text-decoration-none text-clr-lightDark fs-16 me-md-5 me-2">
                                    Privacy
                                </a>
                                <a href="" className="text-decoration-none text-clr-lightDark fs-16">
                                    Terms
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
