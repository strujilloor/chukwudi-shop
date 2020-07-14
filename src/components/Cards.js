import React, { useState, useEffect } from 'react';
import Card from './Card';
import Products from "../products.json"

const Cards = () => {

    const [products, setProducts] = useState(Products);

    return (
        <div className="cards-container">
            {
                products.map(product => (
                    <Card product={product}/>
                ))
            }
        </div>
    );
};

export default Cards;
