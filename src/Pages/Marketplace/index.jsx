import React, { useEffect, useState } from 'react';
import './style.css'
import CardsMktp from '../../Components/CardsMktp';
import CardCrypto from '../../Components/CardCrypto';
import api from '../../Services';
import ErroRequisicao from '../../Components/ErroRequisicao';

function Marketplace () {
  const [dados, setDados] = useState([
 
  ])
  async function loadingApi () {
    try {
      const response = await api.get('')
      setDados(response.data)
    } catch (error) {
      console.log('Muita requisição, aguarde e tente novamente !!' + error)
    }
   
  }
  useEffect(() => {
    loadingApi()
  },[])
  const resDados = dados.slice(0,4)

const dadosOrdenados = dados.sort((a, b) => b.ath_change_percentage - a.ath_change_percentage).slice(0,4);



  return (
    <div className="container-marketplace">
      <h1>Visão Geral do Mercado</h1>,
      <div className='cards-marketplace'>
      <div>
        <h4>Tops Moedas</h4>
        {resDados.length >0 ?
        <>
        {resDados.map((item, index) => (
          <div key={index}>
            <CardCrypto
              sigla={item.symbol.toUpperCase()}
              name={item.name}
              custo={item.custo}
              porcentagem={item.atl.toFixed(2) + '%'}
            />
          </div>
        ))}
        </> :
        <><ErroRequisicao/></>}
        
      </div>
      <div>
        <h4>Em Alta</h4>
        {dados.length > 0 ? 
        <>
        {dadosOrdenados.map((item, index) => (
          <div key={index}>
            <CardCrypto 
            sigla={item.symbol.toUpperCase()}
              name={item.name}
              custo={item.custo}
              porcentagem={item.atl.toFixed(2) + '%'}
            />
          </div>
        ))}
        </>
        :
        <><ErroRequisicao/></>}
        
      </div>
        
      </div>
      <CardsMktp/>
    </div>
  );
}

export default Marketplace

