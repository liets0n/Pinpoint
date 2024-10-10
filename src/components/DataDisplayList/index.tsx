/* eslint-disable @typescript-eslint/no-explicit-any */
import { Wrapper } from './styles'
import { textFormatter } from '../../utils'

type Props = {
  data: {
    time_zone: {
      current_time: any
    }
    languages: {
      code: string
      name: string
    }[]
    ip: string | number | boolean
    city: string | number | boolean
    region: string | number | boolean
    country_name: string
    emoji_flag: string
    continent_name: string | number | boolean
    latitude: string | number | boolean
    longitude: string | number | boolean
    currency: {
      name: string
      code: string
    }
    calling_code: string | number | boolean
    asn: {
      name: string | number | boolean
      domain: string | number | boolean
    }
    threat: {
      is_tor: string | number | boolean
      is_proxy: string | number | boolean
      is_datacenter: string | number | boolean
    }
  }
}

const DataDisplayList = ({ data }: Props) => {
  const currentTime = new Date(String(data.time_zone.current_time))

  return (
    <Wrapper>
      <ul className='list'>
        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>IPV4:</span> &nbsp;
            <span>{textFormatter(data.ip)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>City:</span> &nbsp;
            <span>{textFormatter(data.city)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>State:</span> &nbsp;
            <span>{textFormatter(data.region)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Country:</span> &nbsp;
            <span>
              {textFormatter(`${data.country_name} ${data.emoji_flag}`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Continent:</span> &nbsp;
            <span>{textFormatter(data.continent_name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Current Time:</span> &nbsp;
            <span>{textFormatter(currentTime.toLocaleString())}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Latitude:</span> &nbsp;
            <span>{textFormatter(data.latitude)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Longitude:</span> &nbsp;
            <span>{textFormatter(data.longitude)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Language:</span> &nbsp;
            <span>
              {textFormatter(
                Array.isArray(data.languages) && data.languages.length > 0
                  ? `${data.languages[0].name} (${String(data.languages[0].code).toUpperCase()})`
                  : '-'
              )}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Currency:</span> &nbsp;
            <span>
              {textFormatter(`${data.currency.name} (${data.currency.code})`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>DDD:</span> &nbsp;
            <span>{textFormatter(`+${data.calling_code}`)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>ASN:</span> &nbsp;
            <span>{textFormatter(data.asn.name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>ASN Domain:</span> &nbsp;
            <span>{textFormatter(data.asn.domain)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Tor:</span> &nbsp;
            <span>{textFormatter(data.threat.is_tor)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Proxy:</span> &nbsp;
            <span>{textFormatter(data.threat.is_proxy)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>Data Center:</span> &nbsp;
            <span>{textFormatter(data.threat.is_datacenter)}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default DataDisplayList
