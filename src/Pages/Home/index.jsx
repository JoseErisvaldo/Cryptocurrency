import React from 'react';
import './style.css'
import CardHome from '../../Components/CardHome';
import Cards from '../../Components/Card';

function Home () {
  return (
    <div className="container-home">
      <CardHome/>
      <Cards/>
    </div>
  );
}

export default Home
