import React from "react";
import { whyChoose } from "./WhyChooseContent";
import { Row, Col } from "react-bootstrap";
const WhyChooseComponent = () => {
    return (
        <div>
            <div className="whyChooseSection section-padding" style={{ background: "linear-gradient(360deg, #F2F6FA -1.59%, #FFFFFF 100%)" }}>
                <div className="container2">
                    <div className="whyChooseTitle text-center">
                        <h2 className="font-recoleta fs-52">Why founders choose Jenfi</h2>
                        <p className="fs-20 text-clr-lightDark my-3 mb-4">Businesses today are built differently. They should be funded differently.</p>
                    </div>
                    <div className="whyChooseWrapper mt-5">
                        <Row>
                            {whyChoose.map((items) => {
                                return (
                                    <Col xl={4} md={6}  className=" mb-4" key={items.id}>
                                        <div className="h-100 bg-white px-4 py-4 is-radius-12">
                                            <div className="whyChooseItem ">
                                                <img src={items.chooseLogo} className="img-fluid" alt="" />
                                                <h3 className="chooseTitle fs-20 font-recoleta text-clr-dark my-4">{items.chooseTitle}</h3>
                                                <p className="choosepra fs-16 text-clr-lightDark">{items.choosePra}</p>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseComponent;
