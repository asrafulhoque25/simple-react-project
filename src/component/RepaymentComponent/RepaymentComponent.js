import React from 'react';
import { Row, Col } from "react-bootstrap";
import repaymentImage from '../../assets/img/repayment.png'
import repaymentLogo1 from '../../assets/img/repaymentLogo.png'
import repaymentLogo2 from "../../assets/img/repaymentLogo2.png";
import repaymentLogo3 from "../../assets/img/repaymentLogo3.png";
import repaymentpoint from "../../assets/img/repaymentPoint.png";

const RepaymentComponent = () => {
  return (
      <div>
          <div className="repaymanet-wrapper section-padding">
              <div className="container2">
                  <Row className='flex-xl-row flex-column flex-column-reverse'>
                      <Col xl={5}>
                          <div className="repayment-left">
                              <img src={repaymentImage} className="img-fluid" alt="" />
                              <p className="font-recoleta fs-20 text-clr-lightDark py-3 mb-0">Thousands of digitally-enabled businesses in Asia serviced by Jenfi</p>
                              <div className="repaymentLogoWrapper d-flex align-items-center ">
                                  <img src={repaymentLogo1} className="img-fluid me-3" alt="" />
                                  <img src={repaymentLogo2} className="img-fluid me-3" alt="" />
                                  <img src={repaymentLogo3} className="img-fluid me-3" alt="" />
                              </div>
                          </div>
                      </Col>
                      <Col xl={7}>
                          <div className="repayment-right ps-xl-5 ps-0 mb-4 mb-xl-0">
                              <h2 className="fs-52 text-clr-dark font-recoleta mb-3">Flexible Repayments</h2>
                              <p className="fs-20 text-clr-dark py-3">
                                  Companies we back, grow an average of <span className="fw-600 text-clr-blue ">+8.1% per month (that's 156% annualised)</span>
                              </p>

                              <div className="repaymentContentWrapper">
                                  <div className="repaymentContentItem d-flex align-items-start mb-3">
                                      <img src={repaymentpoint} className="img-fluid mt-1" alt="" />
                                      <p className="mb-0 ps-3 text-clr-lightDark fs-20">Our financing model is 100% flexible to your sales and growth potential.</p>
                                  </div>
                                  <div className="repaymentContentItem d-flex align-items-start mb-3">
                                      <img src={repaymentpoint} className="img-fluid mt-1" alt="" />
                                      <p className="mb-0 ps-3 text-clr-lightDark fs-20">
                                          We'll recoup our investment by taking a fixed % of your sales. This is much simpler than repaying a lump sum.
                                      </p>
                                  </div>
                                  <div className="repaymentContentItem d-flex align-items-start mb-3">
                                      <img src={repaymentpoint} className="img-fluid mt-1" alt="" />
                                      <p className="mb-0 ps-3 text-clr-lightDark fs-20">Know the full cost up-front with a flexible repayment date.</p>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </div>
          </div>
      </div>
  );
};

export default RepaymentComponent;
