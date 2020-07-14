import React from 'react';
import user from '../../assets/icons/747376.svg';
import clock from '../../assets/icons/149316.svg';
import Product from '../Product';
import Products from '../../products.json';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="user">
                <p>3</p>
                <img src={user} alt="user"/>
            </div>
            <div className="order">
                <h1>My Order</h1>
                <div className="info">
                    <div className="direction">
                        <p>625 St Marks Ave</p>
                        <button>Edit</button>
                    </div>
                    <div className="time">
                        <div className="value">
                            <div className="container-clock">
                                <img src={clock} alt="clock"/>
                            </div>
                            <p>35 min</p>
                        </div>
                        <button>Choose time</button>
                    </div>
                </div>
            </div>
            <div className="products-list">
                <Product product={ Products[0] }/>
                <Product product={ Products[5] }/>
            </div>
        </aside>
    );
};

export default Sidebar;
