import React from 'react';
import img from '../assets/images/headerimage.png';
import icon from '../assets/images/d.png';

const Promo = () => {
    return (
        <div className="promo-container">
            <div className="img-container">
                <div className="container">
                    <img src={ img } alt="promo"/>
                </div>
            </div>
            <div className="info-container">
                <p>$0 delivery for 30 days! <span><img src={ icon } alt=""/></span></p>
                <p>$0 delivery fee for orders over $10 for 30 days</p>
            </div>
            <div className="more-container">
                <p>Learn more  &gt;</p>
            </div>
            <div className="background"></div>
        </div>
    );
};

export default Promo;
