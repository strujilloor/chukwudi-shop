import React from 'react';
import img from '../assets/images/pexels-photo-156114.jpeg';
import star from '../assets/icons/149220.svg';

const Card = () => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={ img } alt="product"/>
                <div>
                    25-30 <span>min</span>
                </div>
            </div>
            <p className="name">Bagel Story</p>
            <div className="details">
                <div>
                    <img src={ star } alt="star"/>
                    <p>
                        4,7
                    </p>
                </div>
                <p>Deli</p>
                <p>Bagels</p>
                <p>$$</p>
            </div>
        </div>
    );
};

export default Card;
