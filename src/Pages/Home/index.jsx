import React from 'react';
import './style.css'
import Cards from '../../Components/Cards';

function Home () {
  return (
    <div className="container-home">
      <h1>Cryptocurrency</h1>
      <h3>Esteja atualizado com as top 100 criptomoedas</h3>
      <Cards/>
    </div>
  );
}

export default Home
