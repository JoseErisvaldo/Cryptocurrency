import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4>Produtos</h4>
        <Link to="/exchange">Exchange</Link>
        <Link to="/compre-cripto">Compre Cripto</Link>
        <Link to="/pay">Pay</Link>
        <Link to="/academy">Academy</Link>
        <Link to="/live">Live</Link>
        {/* Adicione outros links conforme necessário */}
      </div>

      <div>
        <h4>Negócios</h4>
        <Link to="/aplicacao-p2p">Aplicação para Comerciante P2P</Link>
        <Link to="/aplicacao-p2pro">Aplicação de Comerciante P2Pro</Link>
        {/* Adicione outros links conforme necessário */}
      </div>

      <div>
        <h4>Serviços</h4>
        <Link to="/downloads">Downloads</Link>
        <Link to="/app-desktop">Aplicativo de Desktop</Link>
        <Link to="/indicacao">Indicação</Link>
        <Link to="/trading-otc">Trading OTC</Link>
        {/* Adicione outros links conforme necessário */}
      </div>
    </div>
  );
};

export default Footer;
