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
  const position = [-15.81796, -47.899999];
	return (
			<MapContainer
        className='mapa'
				center={position}
				zoom={12}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
        <Marker  position={position}>
        </Marker>
    </MapContainer>
	)
}

export default Mapa;