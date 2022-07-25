import React from 'react';
import BannerPage from '../component/Banner/BannerComponent';
import HowToWorkPage from "../component/HowWork/HowWorkComponent";
import FounderCommentPage from "../component/FounderComment/FounderComponent";
import RepaymentComponent from '../component/RepaymentComponent/RepaymentComponent';
import WhyChooseComponent from '../component/WhyChooseComponent/WhyChooseComponent';
import CallToAction from '../component/CallToAction/CallToAction';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';
const Home = () => {
  return <div>
    <Navbar />
            <BannerPage />
            <HowToWorkPage />
            <FounderCommentPage />
            <RepaymentComponent />
            <WhyChooseComponent />
            <CallToAction />
            <Footer />
  </div>;
};

export default Home;
