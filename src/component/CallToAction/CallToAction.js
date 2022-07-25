import React from 'react'
import actionImage from '../../assets/img/actionBg.png'
import shape from '../../assets/img/actionShape.svg'
import {Nav} from 'react-bootstrap'
import './CallToAction.scss'

const CallToAction = () => {
  return (
      <div className="actionWrapper " style={{ backgroundImage: `url(${actionImage})` }}>
          <div className="container2">
              <div className="actionContent">
                  <h2 className="text-white d-flex justify-content-center  fs-52 font-recoleta mb-5">
                      How fast can your business grow <br /> with dedicated funding?
                  </h2>
                  <Nav.Link to="/" className="actionBtn py-2 px-4 border rounded-pill text-clr-dark fs-18 fw-bold font-geometric text-center">
                      Get Funded
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                              stroke="#272830"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          />
                      </svg>
                  </Nav.Link>
              </div>
              <div className="actionshape d-lg-block d-none">
                  <img src={shape} alt="" />
              </div>
          </div>
      </div>
  );
}

export default CallToAction