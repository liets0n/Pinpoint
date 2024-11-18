import * as L from 'leaflet'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  const coordinates =
    lat !== null && lng !== null ? [lat, lng] : [4852.6, 12_323.6]

  return (
    <MapContainer
      center={coordinates as L.LatLngExpression}
      zoom={ZOOM}
      style={{ width: '100%', height: '100%' }}
      zoomControl={false}
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
            ? t('home.map.marker.default', { ip: currentIpAddress })
            : t('home.map.marker.fallback')}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
