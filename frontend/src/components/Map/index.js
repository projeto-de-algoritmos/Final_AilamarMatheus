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
	return (
			<MapContainer
				center={{ lat: -15.793749, lng: -47.940116 }}
				zoom={13}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
    </MapContainer>
	)
}

export default Mapa;