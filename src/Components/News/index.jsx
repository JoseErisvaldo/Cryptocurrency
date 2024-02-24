import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function News() {
 
  return (
    <div class="container-news">
      <div class="card-news">
        <span>Aevo lança futuros no portal por US$ 2,53</span>
        <p>Queda de preço da experiência de tokens de protocolo DEX</p>
        <p>Endereço de baleia suspeita vende 40.317 tokens UNI, potencialmente perdendo US$ 380.000</p>
      </div>
      <div><Link className='link'><span className='view-more'>Ver todas a noticias</span></Link></div>
    </div>
  );
}

export default News;
