import * as L from 'leaflet'
import { useTranslation } from 'react-i18next'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Window } from '@components'

const ZOOM = 11
const MIN_ZOOM = 1
const MAX_ZOOM = 17

type Props = {
  coordinates: {
    lat: number
    lng: number
  }
  currentIpAddress: string
}

const Map = ({ coordinates: { lat, lng }, currentIpAddress }: Props) => {
  const { t } = useTranslation()

  const mapCoordinates =
    lat !== null && lng !== null ? [lat, lng] : [4852.6, 12_323.6]

  return (
    <Window windowTitle={t('home.window.title.map')}>
      <MapContainer
        center={mapCoordinates as L.LatLngExpression}
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

        <Marker position={mapCoordinates as L.LatLngExpression}>
          <Popup>
            {lat !== null && lng !== null
              ? t('home.map.marker.default', { ip: currentIpAddress })
              : t('home.map.marker.fallback')}
          </Popup>
        </Marker>
      </MapContainer>
    </Window>
  )
}

export default Map
