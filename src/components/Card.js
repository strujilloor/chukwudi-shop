import React from 'react';
import img from '../assets/images/pexels-photo-156114.jpeg';
import star from '../assets/icons/149220.svg';

const Card = ({ product }) => {

    const { name, qualification, time, price, image } = product;

    return (
        <div className="card">
            <div className="image-container">
                <img src={ image } alt="product"/>
                <div>
                    { time }
                </div>
            </div>
            <p className="name">{ name }</p>
            <div className="details">
                <div>
                    <img src={ star } alt="star"/>
                    <p>
                        { qualification }
                    </p>
                </div>
                <p>${ price } </p>
            </div>
        </div>
    );
};

export default Card;
