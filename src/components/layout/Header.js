import React from 'react';
import search from '../../assets/icons/126474.svg';

const Header = () => {
    return (
        <header className="header">
            {/* hamburguesa */}
            <p>--</p>
            {/* Logo */}
            <h1 className="logo">Chukwudi</h1>
            {/* Search */}
            <div className="search">
                <div className="logo-container">
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
