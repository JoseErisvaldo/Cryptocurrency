// JSX no arquivo CardCustom.js
import React from 'react';
import './style.css';

function CardCustom({title,sigla,name,custo,porcentagem}) {
  return (
    <div className='container-custom'>
      <div className="card-custom">
        <h5>{title}</h5>
        <div className="item-custom">
          <span>{sigla}</span>
          <p>{name}</p>
          <p>{custo}</p>
          <p className="green-text">{porcentagem}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCustom;
