import React from 'react';
import review from '../../assets/img/review.svg'
import founder from '../../assets/img/founder.png'
const FounderComponent = () => {
  return (
      <div>
          <div className="founderComments bg-blue section-padding">
              <div className="container2">
                  <div className="row flex-xl-row flex-column flex-column-reverse">
                      <div className="col-xl-7">
                          <div className="comment-wrapper">
                              <h2 className="fs-52 font-recoleta text-white mb-5">We're reinventing growth capital</h2>
                              <div className="d-flex align-items-start">
                                  <div className="comment-image d-flex flex-shrink-0 me-4">
                                      <img src={review} className="img-fluid" alt="" />
                                  </div>
                                  <div className="comment-content">
                                      <p className="text-clr-lightSky fs-36">
                                          Jenfi offers companies an unfair advantage by funding their most productive growth activities while offering more flexibility than other options.
                                      </p>
                                      <div className="founder-hints d-flex align-items-center">
                                          <svg width="4" height="32" viewBox="0 0 4 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <rect width="4" height="32" fill="#96E7E5" />
                                          </svg>
                                          <div className="founderinfo d-flex align-items-center mt-2">
                                              <p className="mb-0 fs-36 text-white mx-3">Jeffrey</p>
                                              <p className="mb-0 fs-18 text-clr-lightSky">Jenfi Founder</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-5">
                          <div className="founder-img ps-5 mb-5 mb-xl-0">
                              <img src={founder} className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default FounderComponent;
