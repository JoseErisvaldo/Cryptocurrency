import React from 'react';
import './style.css'
import { useParams } from 'react-router-dom';

function Details () {
  const {id} = useParams()
  return (
    <div className="container-details">
      <h1>Details</h1>
      {id}
    </div>
  );
}

export default Details
