export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Herramienta en línea que permite rastrear e identificar el origen de una dirección IP.',
        theme: {
          title: 'Cambiar el tema actual de la página',
          light: 'Claro',
          dark: 'Oscuro'
        },
        language: {
          title: 'Cambiar el idioma actual de la página',
          portuguese: 'Português',
          english: 'English',
          spanish: 'Español'
        }
      },
      loading: {
        text: 'Cargando...'
      },
      error: {
        text: 'Ocurrió un error al recuperar los datos de la IP.'
      },
      dataDisplayList: {
        ipv4: 'IPv4:',
        city: 'Ciudad:',
        state: 'Estado:',
        country: 'País:',
        continent: 'Continente:',
        currentTime: 'echa actual:',
        latitude: 'Latitud:',
        longitude: 'Longitud:',
        idiom: 'Idioma:',
        currency: 'Moneda:',
        ddd: 'DDD:',
        asn: 'ASN:',
        asnDomain: 'Dominio ASN:',
        tor: 'Tor:',
        proxy: 'Proxy:',
        dataCenter: 'Data Center:'
      },
      ipSearchInput: {
        ipErrorText: '¡Por favor, introduce una dirección IP válida!',
        btnTitle: 'Buscar'
      },
      map: {
        marker: {
          default: 'La dirección IP {{ip}} está registrada en esta área.',
          fallback:
            'No se pudieron obtener las coordenadas aproximadas de esta dirección IP, así que haremos un viaje alrededor del Punto Nemo.'
        }
      },
      window: {
        title: {
          data: 'DATOS DE LA IP',
          map: 'MAPA'
        }
      }
    }
  }
}
