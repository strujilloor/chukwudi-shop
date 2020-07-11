import React from 'react';
import search from '../../assets/icons/126474.svg';
import hb from '../../assets/icons/hamburger-button.png'

const Header = () => {
    return (
        <header className="header">
            {/* hamburguesa */}
            <img src={hb} alt=""/>
            {/* Logo */}
            <h1 className="logo">Chukwudi</h1>
            {/* Search */}
            <div className="search">
                <div className="icon-container">
                    <img src={search} alt="search-icon" />
                </div>
                
                <input 
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Search"
                    className="search-input"
                />
            </div>
        </header>
    );
};

export default Header;
