import React from 'react';
import brand1 from '../../assets/img/brand-1.png';
import brand2 from "../../assets/img/brand-2.png";
import brand3 from '../../assets/img/brand-3.png';
import brand4 from "../../assets/img/brand-4.png";
import brand5 from '../../assets/img/brand-5.png';
import brand6 from "../../assets/img/brand-6.png";

const BannerBrandComponent = () => {
    const brand = [ brand1, brand2, brand3,brand4,brand5,brand6 ];
  return (
      <div className="bannerBrandWrapper pt-5">
          <div className="container2">
              <div className="brandHints text-center mt-5">
                  <h4 className="fs-16 text-clr-lightDark brandHintsHeading fw-600">As featired on</h4>
              </div>
              <div className="brand-wrapper d-flex flex-wrap justify-content-xl-between justify-content-center ">
                  {brand.map((brandItem,index)=>{
                      return (
                          <div className="brand-item mx-4 mt-5" key={index}>
                              <img src={brandItem} className="img-fluid" alt="" />
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>
  );
};

export default BannerBrandComponent;
