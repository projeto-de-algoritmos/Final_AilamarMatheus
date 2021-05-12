import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, {useState, useMapEvents} from 'react'
import { Renderer } from 'leaflet'

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function Mapa () {
  const position = [[-15.833727, -48.057159], //tagua
  [-15.858723, -48.012132], //arniqueiras
  [-15.603287, -47.868889], //fercal
  [-15.710167, -47.878067], //varjao
  [-15.902038, -47.963225], //park way
  [-15.764369, -47.883413], //asa norte
  [-15.826415, -48.137376], //sol nascente
  [-15.774477, -47.779557], //paranoa
  [-15.800180, -47.924625], //sudoeste
  [-15.652980, -47.784691], //sobradinho 1
  [-15.643657, -47.826012], //sobradinho 2
  [-15.870711, -47.967279], //nucleo bandeirante
  [-15.854705, -47.950287], //candangolandia
  [-15.807919, -47.957647], //sia
  [-15.825404, -47.980449], //guara
  [-15.681102, -48.194540], //brazlandia
  [-15.790462, -47.893823], //eixo monumental
  [-15.883929, -48.017306], //riacho fundo 1
  [-15.910575, -48.048690], //riacho fundo 2
  [-15.814504, -48.015872], //vicent
  [-16.012609, -48.062344], //gama
  [-16.015803, -48.012277], //santa maria
  [-15.902713, -48.060694], //recanto
  [-15.817114, -48.104181], //ceilandia
  [-15.874307, -48.085276], //samambaia
  [-15.840112, -48.028019], //aguas
  [-15.817960, -47.899999], //asa sul
  [-15.865015, -47.791473], //jardim botanico
  [-15.904733, -47.773314], //sao sebastiao
  [-15.617461, -47.654837], //planaltina
  [-15.837960, -47.875999], //lago sul
  [-15.790949, -47.937579]];//cruzeiro

  const items = [];

  for (let i = 0, j = position.length; i < j; i++) {
    items.push(<Marker position={position[i]}></Marker>)
  }

	return (
    <MapContainer
      className='mapa'
      center={position[0]}
      zoom={12}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items}
    </MapContainer>
	)
}

export default Mapa;