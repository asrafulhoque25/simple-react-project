import React from 'react';
import {worklist} from "./WorkItem";
import {Nav} from 'react-bootstrap'
import './HowWork.scss'
import line from '../../assets/img/lineShap.svg'
const HowWorkComponent = () => {
  return (
      <div className="work-wrapper ">
          <div className="container  section-padding is-radius-40 bg-white work-process">
              <div className="container2">
                  <div className="workHeading text-center">
                      <h2 className="font-recoleta fs-52">How It Works</h2>
                      <p className="fs-20 text-clr-lightDark my-3 mb-4">Four easy steps to unlock your growth potential.</p>

                      <div className="work-wrapper row pt-60 mb-5 position-relative">
                        
                          {worklist.map((worksList, index) => {
                              return (
                                  <div className="col-xl-3 col-md-6" key={index}>
                                      <div className="workItem px-5 px-xl-0 mb-5 mb-xl-0">
                                          <img src={worksList.img} className="img-fluid mb-4" alt="" />
                                          <div className="work-body">
                                              <h4 className="work-title pb-3 pt-2 font-recoleta fs-20 text-clr-dark">{worksList.workTitle}</h4>
                                              <p className="work-pra text-clr-lightDark fs-16">{worksList.workPra}</p>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })}

                        
                          <div className="shape position-absolute d-xl-block d-none">
                              <img src={line} className="img-fluid" alt="" />
                          </div>
                      </div>
                      <Nav.Link href="#" className="banner-btn py-2 px-4 border rounded-pill mx-3 fw-bold font-geometric text-center mt-5 mx-auto">
                          Get Funded
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47499 12.8581 8.83333L7.4248 3.39999" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                          </svg>
                      </Nav.Link>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default HowWorkComponent;
