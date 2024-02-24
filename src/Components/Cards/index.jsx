import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../Services';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Cards() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [apiData, setApiData] = useState([
        {
       id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  current_price: 50859,
  market_cap: 998169677914,
  market_cap_rank: 1,
  fully_diluted_valuation: 1067509884103,
  total_volume: 22732141083,
  high_24h: 51493,
  low_24h: 50660,
  price_change_24h: -442.5642460416784,
  price_change_percentage_24h: -0.86268,
  market_cap_change_24h: -9192686237.103027,
  market_cap_change_percentage_24h: -0.91255,
  circulating_supply: 19635943.0,
  total_supply: 21000000.0,
  max_supply: 21000000.0,
  ath: 69045,
  ath_change_percentage: -26.37654,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 67.81,
  atl_change_percentage: 74865.1887,
  atl_date: "2013-07-06T00:00:00.000Z",
  roi: null,
  last_updated: "2024-02-23T23:45:20.076Z"
    }
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
    //LoadingApi();
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
          <span><Link to={`/details/${data.name}`} className='link'>Ver detalhes</Link></span>
        </div>
      ))}
    </>
  );
}

export default Cards;
