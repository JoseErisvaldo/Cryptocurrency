import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import News from '../News';


function Card() {
 
  return (
    <div className='container-crypto'>
      <div class="cryptocard">
        <div class="crypto-item">
          <span>BTC</span>
          <p>Bitcoin</p>
          <p>$51,140.01</p>
          <p class="green">+0.36%</p>
        </div>

        <div class="crypto-item">
          <span>ETH</span>
          <p>Ethereum</p>
          <p>$2,960.05</p>
          <p class="green">+1.22%</p>
        </div>

        <div class="crypto-item">
          <span>BNB</span>
          <p>BNB</p>
          <p>$379.80</p>
          <p class="green">+1.55%</p>
        </div>

        <div class="crypto-item">
          <span>XRP</span>
          <p>Ripple</p>
          <p>$0.5438</p>
          <p class="green">+1.95%</p>
        </div>
        <div>
        <Link to={'/marketplace'} className='link'><h4 className='view-more'>Ver todas as moedas</h4></Link>
        </div>
        
      </div>
    <News/>
    </div>

  );
}

export default Card;
