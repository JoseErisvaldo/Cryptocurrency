import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../Services';
import { IoSearch } from "react-icons/io5";

function Cards() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]); // Inicializado como uma array vazia
  const [apiData, setApiData] = useState([]);

  async function LoadingApi() {
    try {
      const response = await api.get('');
      console.log(response.data);
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
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
          <span>Preço Atual: ${data.current_price}</span>
          <span>Capitalização de Mercado: ${data.market_cap}</span>
          <span>Volume Total nas Últimas 24 horas: ${data.total_volume}</span>
        </div>
      ))}
    </>
  );
}

export default Cards;
