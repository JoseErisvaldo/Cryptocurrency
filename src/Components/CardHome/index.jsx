import React from 'react';
import './style.css';
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"




function CardHome() {
 
  return (
    <div className='card-home'>
      <h1 className='title-card-home'>COMPRAR CRIPTO 
<br></br> NUNCA FOI TÃO FÁCIL</h1>
      <div className='you-money'>
        <p>
          <span>Seu saldo estimado</span>
          <span><FaEye/></span>
        </p>
        <div className='dados-criptomoeda'>
          <span className='card-home-balance'>0,00098263</span>
          <span>BTC</span>
          <span>≈ R$250.75</span>
        </div>
        <div>
          <span>PNL de hoje R$0.37 </span>
          <span className='color-green'> (+0.15%) </span> 
        </div>
      </div>
    </div>
  );
}

export default CardHome
