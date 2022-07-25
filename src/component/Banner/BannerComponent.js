import React from 'react';
import './BannerComponent.scss'
import {Nav} from 'react-bootstrap'
import bannerImg from '../../assets/img/bannerImage.png'
import BannerBrandComponent from './BannerBrandComponent';
const BannerComponent = () => {
  return (
      <div className="banner-section banner-padding">
          <div className="container">
              <div className="row align-items-center justify-content-xl-start justify-content-center mt-xl-5 mt-0 pt-5">
                  <div className="col-xl-6 offset-xl-1 offset-0  ">
                      <div className="banner-content px-5 text-center text-xl-start">
                          <h1 className="banerTitle font-recoleta ">Asia’s most flexible growth capital.</h1>
                          <p className="fs-24 text-clr-lightDark my-4">Fund marketing, inventory, and more, on your terms.</p>
                          <button type='button' className="banner-btn py-2 px-4 border rounded-pill fw-bold font-geometric text-center mx-xl-0 mx-auto">
                              Get Funded
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47499 12.8581 8.83333L7.4248 3.39999" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                              </svg>
                          </button>
                      </div>
                  </div>
                  <div className="col-xl-5">
                      <div className="bannerImage mt-5 mt-xl-0 text-center text-xl-start">
                          <img src={bannerImg} className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
          <BannerBrandComponent />
      </div>
  );
};

export default BannerComponent;
