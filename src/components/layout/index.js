import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Promo from '../Promo';

const index = ({ children }) => {
    return (
        <div className="app">
            <section>
                {/* Header here */}
                <Header/>
                {/* Content here */}
                <main>
                    {/* Promo here */}
                    <Promo/>
                    { children }
                </main>
            </section>
            {/* Sidebar here */}
            <Sidebar/>
        </div>
    );
};

export default index;
