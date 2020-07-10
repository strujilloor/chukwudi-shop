import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const index = ({ children }) => {
    return (
        <div className="app">
            <section>
                {/* Header here */}
                <Header/>
                {/* Content here */}
                <main>
                    { children }
                </main>
            </section>
            {/* Sidebar here */}
            <Sidebar/>
        </div>
    );
};

export default index;
