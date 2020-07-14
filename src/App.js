import React from 'react';
import Layout from './components/layout';
import Cards from './components/Cards';
import hamburger from './assets/icons/1046784.svg';

function App() {
  return (
    <Layout>
      <h1 
        style={{width: "90%", margin: "3rem auto"}}
      >
        Restaurants
        <img 
          src={hamburger} 
          alt="hamburger"
          style={{width: "2.5rem", marginLeft: "1.4rem"}}
        />
      </h1>
      <Cards/>
    </Layout>
  );
}

export default App;
