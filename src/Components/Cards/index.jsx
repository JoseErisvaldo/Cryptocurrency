import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../Services';
import { IoSearch } from "react-icons/io5";

function Cards() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [apiData, setApiData] = useState([
  ]);

  async function LoadingApi() {
    try {
      const response = await api.get('');
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LoadingApi();
  }, []);

  useEffect(() => {
    setList(apiData)
  }, [apiData]);

  function searchCrip() {
    const filterList = apiData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    if (filterList.length > 0) {
      setList(filterList);
    } else {
      console.log('Não encontrado');
    }
  }

  return (
    <>
      <div className='search'>
        <input placeholder='Pesquisar' onChange={e => setSearch(e.target.value)} />
        <IoSearch onClick={searchCrip} />
      </div>
      {list.map((data) => (
        <div className="crypto-card" key={data.symbol}>
          <img src={data.image} alt={data.name} />
          <span>{data.name}</span>
          <span>{data.symbol.toUpperCase()}</span>
          <span>Classificação da capitalização do mercado: {data.market_cap_rank}</span>
          <span>Preço Atual: ${data.current_price}</span>
          <span>% de alteração no preço 24H: <span  className={data.price_change_percentage_24h > 0 ? 'color-green' : 'color-red'}>{data.price_change_percentage_24h.toFixed(1)}% </span></span>
          <span>Capitalização de Mercado: ${data.market_cap}</span>
          <span>Volume Total nas Últimas 24 horas: ${data.total_volume}</span>
        </div>
      ))}
    </>
  );
}

export default Cards;
