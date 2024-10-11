import * as L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const ZOOM = 12
const MIN_ZOOM = 1
const MAX_ZOOM = 17

type Props = {
  lat: number
  lng: number
  currentIpAddress: string
}

const Map = ({ lat, lng, currentIpAddress }: Props) => {
  const coordinates =
    lat !== null && lng !== null ? [lat, lng] : [4852.6, 12_323.6]

  return (
    <MapContainer
      center={coordinates as L.LatLngExpression}
      zoom={ZOOM}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        maxNativeZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        noWrap
      />

      <Marker position={coordinates as L.LatLngExpression}>
        <Popup>
          {lat !== null && lng !== null
            ? `The IP address ${currentIpAddress} is registered in this area.`
            : "It was not possible to obtain the approximate coordinates of this IP address, so let's take a trip around Point Nemo."}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
