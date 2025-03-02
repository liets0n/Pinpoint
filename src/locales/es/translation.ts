export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Identifique fácilmente el origen de una dirección IP y obtenga más información sobre su ubicación.',
        theme: {
          title: 'Cambiar el tema actual de la página',
          light: 'Claro',
          dark: 'Oscuro',
          system: 'Automático'
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
        title: 'Error',
        text: 'No se pudieron cargar los datos en este momento. Por favor, intente actualizar la página.',
        btn: 'Actualizar la página'
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
      input: {
        ipErrorText: '¡Por favor, introduce una dirección IP válida!',
        btnTitle: 'Buscar',
        placeholder: 'Buscar por dirección IP, Ej: 203.0.113.1'
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
          information: 'Información',
          map: 'Mapa'
        }
      }
    }
  }
}
