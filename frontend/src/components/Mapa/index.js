import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, {useState} from 'react'


function Mapa (props) {
  const items = [];

  for (let i = 0, j = props.position.length; i < j; i++) {
    items.push(<Marker position={props.position[i]}></Marker>)
  }

	return (
    <MapContainer
      className='mapa'
      center={props.position[0] || [-15.790462, -47.893823]}
      zoom={11}
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