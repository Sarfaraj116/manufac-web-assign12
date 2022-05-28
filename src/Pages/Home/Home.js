import React from 'react';
import Footer from '../Shared/Footer';
import Tools from '../Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurService from './OurService';
import OurWerehouseTools from './OurWerehouseTools';
import Review from './Review';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <Tools></Tools>
            <Review></Review>
            <OurWerehouseTools></OurWerehouseTools>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;