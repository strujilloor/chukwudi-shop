import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="image-container">
                <img src={ product.image } alt="product"/>
            </div>
            <p className="name">1  x  { product.name }</p>
            <p className="price">${ product.price }</p>
        </div>
    );
};

export default Product;
