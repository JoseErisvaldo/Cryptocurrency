import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../Services';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ErroRequisicao from '../ErroRequisicao';

function CardsMktp() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [apiData, setApiData] = useState([]);

  async function LoadingApi() {
    try {
      const response = await api.get('');
      setApiData(response.data);
      console.log(response.data)
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
    <div className='container-crypto-table'>
      <div className='search'>
        <input placeholder='Pesquisar' value={search} onChange={e => setSearch(e.target.value)} />
        <IoSearch onClick={searchCrip} />
      </div>

      <table className="crypto-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Símbolo</th>
            <th>Rank da Capi. Mercado</th>
            <th>Preço Atual</th>
            <th>Mudança de preço 24H</th>
            <th>Capitalização de Mercado</th>
            <th>Volume Total nas Últimas 24 Horas</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? 
          <>
          {list.map((data) => (
            <tr key={data.symbol}>
              <td className='img-mktp'><img src={data.image}/></td>
              <td>{data.name}</td>
              <td>{data.symbol.toUpperCase()}</td>
              <td>{data.market_cap_rank}</td>
              <td>${data.current_price}</td>
              <td className={data.price_change_percentage_24h > 0 ? 'color-green' : 'color-red'}>
                {data.price_change_percentage_24h.toFixed(1)}%
              </td>
              <td>${data.market_cap}</td>
              <td>${data.total_volume}</td>
              <td>
                <Link to={`/details/${data.name}`} className='link'>
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
          </>
          :
          <><ErroRequisicao/></>}
          
        </tbody>
      </table>
    </div>
    </>
  );
}

export default CardsMktp;
