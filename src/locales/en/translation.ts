export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Easily identify the origin of an IP address and get more information about its location.',
        theme: {
          title: 'Change the current page theme',
          light: 'Light',
          dark: 'Dark',
          system: 'Auto'
        },
        language: {
          title: 'Change the current page language',
          portuguese: 'Português',
          english: 'English',
          spanish: 'Español'
        }
      },
      loading: {
        text: 'Loading...'
      },
      error: {
        title: 'Error',
        text: 'Unable to load the data at the moment. Please try refreshing the page.',
        btn: 'Refresh the page'
      },
      dataDisplayList: {
        ipv4: 'IPv4:',
        city: 'City:',
        state: 'State:',
        country: 'Country:',
        continent: 'Continent:',
        currentTime: 'Current Time:',
        latitude: 'Latitude:',
        longitude: 'Longitude:',
        idiom: 'Idiom:',
        currency: 'Currency:',
        ddd: 'DDD:',
        asn: 'ASN:',
        asnDomain: 'ASN Domain:',
        tor: 'Tor:',
        proxy: 'Proxy:',
        dataCenter: 'Data Center:'
      },
      input: {
        ipErrorText: 'Please enter a valid IP address!',
        btnTitle: 'Search',
        placeholder: 'Search by IP address, Ex: 203.0.113.1'
      },
      map: {
        marker: {
          default: 'The IP address {{ip}} is registered in this area.',
          fallback:
            "It was not possible to obtain the approximate coordinates of this IP address, so let's take a trip around Point Nemo."
        }
      },
      window: {
        title: {
          information: 'Information',
          map: 'Map'
        }
      }
    }
  }
}
