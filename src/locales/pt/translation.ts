export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Ferramenta online que permite rastrear e identificar a origem de um endereço IP.',
        theme: {
          title: 'Alterar o tema actual da página.',
          light: 'Claro',
          dark: 'Escuro',
          system: 'Obter do sistema'
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
        text: 'Houve algum problema ao obter os dados do IP {{ip}}. Por favor, tente actualizar a página.',
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
      ipSearchInput: {
        ipErrorText: 'Por favor, insira um endereço IP válido!',
        btnTitle: 'Pesquisar'
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
          data: 'DADOS DO IP',
          map: 'MAPA'
        }
      }
    }
  }
}
