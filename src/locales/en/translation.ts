export default {
  translations: {
    home: {
      header: {
        title: 'Pinpoint',
        subtitle:
          'Online tool that allows you to track and identify the origin of an IP address.',
        theme: {
          title: 'Change the current page theme',
          light: 'Light',
          dark: 'Dark',
          system: 'Get from the system'
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
        text: 'There was a problem obtaining data for IP {{ip}}. Please try refreshing the page.',
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
      ipSearchInput: {
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
          data: 'IP DATA',
          map: 'MAP'
        }
      }
    }
  }
}
