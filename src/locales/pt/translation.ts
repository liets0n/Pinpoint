export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Identifique facilmente a origem de um endereço IP e obtenha mais informações sobre sua localização.',
        theme: {
          title: 'Alterar o tema actual da página.',
          light: 'Claro',
          dark: 'Escuro',
          system: 'Automático'
        },
        language: {
          title: 'Alterar o idioma actual da página.',
          portuguese: 'Português',
          english: 'English',
          spanish: 'Español'
        }
      },
      loading: {
        text: 'A carregar...'
      },
      error: {
        title: 'Erro',
        text: 'Não foi possível carregar os dados no momento. Tente actualizar a página.',
        btn: 'Actualizar a página'
      },
      dataDisplayList: {
        ipv4: 'IPv4:',
        city: 'Cidade:',
        state: 'Estado:',
        country: 'País:',
        continent: 'Continente:',
        currentTime: 'Data actual:',
        latitude: 'Latitude:',
        longitude: 'Longitude:',
        idiom: 'Idioma:',
        currency: 'Moeda:',
        ddd: 'DDD:',
        asn: 'ASN:',
        asnDomain: 'Domínio ASN:',
        tor: 'Tor:',
        proxy: 'Proxy:',
        dataCenter: 'Data Center:'
      },
      input: {
        ipErrorText: 'Por favor, insira um endereço IP válido!',
        btnTitle: 'Pesquisar',
        placeholder: 'Pesquise por endereço IP, Ex: 203.0.113.1'
      },
      map: {
        marker: {
          default: 'O endereço IP {{ip}} está registrado nesta área.',
          fallback:
            'Não foi possível obter as coordenadas aproximadas deste endereço IP, então vamos fazer uma viagem ao redor do Ponto Nemo.'
        }
      },
      window: {
        title: {
          information: 'Informações',
          map: 'Mapa'
        }
      }
    }
  }
}
