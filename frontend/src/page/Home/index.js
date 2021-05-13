import React, {useState} from 'react';

import Mapa from '../../components/Mapa';
import api from '../../services/api';

function Home () {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [position, setPosition] = useState('');
  const [distance, setDistance] = useState('0');
  const [time, setTime] = useState('0');

  async function handlePath (e) {
    e.preventDefault();

    const data = {
      origem : start,
      destino : end
    }

    console.log(data);
    const response = await api.post('/', data);
    setPosition(response.data.coordinates);
    setDistance(response.data.distance);
    setTime(response.data.time);
  }

  function handleStartChange (e) {
    setStart(e.target.value);
  }

  function handleEndChange (e) {
    setEnd(e.target.value);
  }

	return (
    <div className="home-page">
    <h1>
      Trace uma rota para descobrir o melhor caminho:
    </h1>
    <section>
    <form onSubmit={handlePath}>
      <label className="input-origem">
        Ponto de origem: 
        <select  value={start} onChange={handleStartChange} id="origem" >
          <option value=""></option>
          <option value="Águas Claras">Águas Claras</option>
          <option value="Arniqueiras">Arniqueiras</option>
          <option value="Asa Norte">Asa Norte</option>
          <option value="Asa Sul">Asa Sul</option>
          <option value="Brazlândia">Brazlândia</option>
          <option value="Candangolândia">Candangolândia</option>
          <option value="Ceilândia">Ceilândia</option>
          <option value="Cruzeiro Novo">Cruzeiro Novo</option>
          <option value="Eixo Monumental">Eixo Monumental</option>
          <option value="Fercal">Fercal</option>
          <option value="Gama">Gama</option>
          <option value="Guará">Guará</option>
          <option value="Jardim Botanico">Jardim Botânico</option>
          <option value="Lago Sul">Lago Sul</option>
          <option value="Núcleo Bandeirante">Núcleo Bandeirante</option>
          <option value="Paranoá">Paranoá</option>
          <option value="Park Way">Park Way</option>
          <option value="Planaltina">Planaltina</option>
          <option value="Riacho Fundo I">Riacho Fundo I</option>
          <option value="Riacho Fundo II">Riacho Fundo II</option>
          <option value="Recanto das Emas">Recanto das Emas</option>
          <option value="Samambaia">Samambaia</option>
          <option value="Santa Maria">Santa Maria</option>
          <option value="São Sebastião">São Sebastião</option>
          <option value="SIA">SIA</option>
          <option value="Sobradinho">Sobradinho</option>  
          <option value="Sol Nascente">Sol Nascente</option>
          <option value="Sudoeste">Sudoeste</option>
          <option value="Taguatinga">Taguatinga</option>
          <option value="Vicente Pires">Vicente Pires</option>
          <option value="Varjão">Varjão</option>
      </select>
      </label>
      <br></br>
      <label className="input-destino">
        Destino:
        <select value={end} onChange={handleEndChange}  className="select-destino" id="destino" >
          <option value=""></option>
          <option value="Águas Claras">Águas Claras</option>
          <option value="Arniqueiras">Arniqueiras</option>
          <option value="Asa Norte">Asa Norte</option>
          <option value="Asa Sul">Asa Sul</option>
          <option value="Brazlândia">Brazlândia</option>
          <option value="Candangolândia">Candangolândia</option>
          <option value="Ceilândia">Ceilândia</option>
          <option value="Cruzeiro Novo">Cruzeiro Novo</option>
          <option value="Eixo Monumental">Eixo Monumental</option>
          <option value="Fercal">Fercal</option>
          <option value="Gama">Gama</option>
          <option value="Guará">Guará</option>
          <option value="Jardim Botanico">Jardim Botânico</option>
          <option value="Lago Sul">Lago Sul</option>
          <option value="Núcleo Bandeirante">Núcleo Bandeirante</option>
          <option value="Paranoá">Paranoá</option>
          <option value="Park Way">Park Way</option>
          <option value="Planaltina">Planaltina</option>
          <option value="Riacho Fundo I">Riacho Fundo I</option>
          <option value="Riacho Fundo II">Riacho Fundo II</option>
          <option value="Recanto das Emas">Recanto das Emas</option>
          <option value="Samambaia">Samambaia</option>
          <option value="Santa Maria">Santa Maria</option>
          <option value="São Sebastião">São Sebastião</option>
          <option value="SIA">SIA</option>
          <option value="Sobradinho">Sobradinho</option>  
          <option value="Sol Nascente">Sol Nascente</option>
          <option value="Sudoeste">Sudoeste</option>
          <option value="Taguatinga">Taguatinga</option>
          <option value="Vicente Pires">Vicente Pires</option>
          <option value="Varjão">Varjão</option>
        </select>
      </label>
      <input type="submit" value="Pesquisar" />
      </form>

      <p>Distancia total : {distance}Km</p>
      <p>Dempo total : {time}min</p>
      <p>
        Direções:
      </p>
      <Mapa position={position}/>
      </section>
    </div>
  )
}

export default Home;