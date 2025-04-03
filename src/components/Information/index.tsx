import { useTranslation } from 'react-i18next'

import { Window } from '@components'
import { Container } from './styles'

type Language = {
  name: string
  native: string
  code: string
}

type Currency = {
  name: string
  code: string
  symbol: string
  native: string
  plural: string
}

type TimeZone = {
  name: string
  abbr: string
  offset: string
  is_dst: boolean
  current_time: string
}

type Threat = {
  is_tor: boolean
  is_icloud_relay: boolean
  is_proxy: boolean
  is_datacenter: boolean
  is_anonymous: boolean
  is_known_attacker: boolean
  is_known_abuser: boolean
  is_threat: boolean
  is_bogon: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocklists: any[]
}

type Props = {
  data: {
    ip: string
    is_eu: boolean
    city: string
    region: string
    region_code: string
    region_type: string
    country_name: string
    country_code: string
    continent_name: string
    continent_code: string
    latitude: number
    longitude: number
    postal: string
    calling_code: string
    flag: string
    emoji_flag: string
    emoji_unicode: string
    languages: Language[]
    currency: Currency
    time_zone: TimeZone
    threat: Threat
    count: string
  }
}

const Information = ({ data }: Props) => {
  const { t } = useTranslation()
  const currentTime = new Date(String(data.time_zone.current_time))

  function textFormatter(text: number | string | boolean) {
    const formattedText = String(text)

    const invalidValues = [
      '',
      'null',
      'null null',
      'Invalid Date',
      'null (null)',
      '+null'
    ]

    if (invalidValues.includes(formattedText)) return 'N/A'
    if (text === true) return 'Yes'
    if (text === false) return 'No'

    return formattedText.length >= 40
      ? `${formattedText.slice(0, 40)}...`
      : formattedText
  }

  return (
    <Window windowTitle={t('home.window.title.information')}>
      <Container>
        <li className='list__item' data-testid='ip'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.ipv4')}
            </span>
            &nbsp;
            <span>{textFormatter(data.ip)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='city'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.city')}
            </span>
            &nbsp;
            <span>{textFormatter(data.city)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='state'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.state')}
            </span>
            &nbsp;
            <span>{textFormatter(data.region)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='country'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.country')}
            </span>
            &nbsp;
            <span>
              {textFormatter(`${data.country_name} ${data.emoji_flag}`)}
            </span>
          </p>
        </li>

        <li className='list__item' data-testid='continent'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.continent')}
            </span>
            &nbsp;
            <span>{textFormatter(data.continent_name)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='time'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.currentTime')}
            </span>
            &nbsp;
            <span>{textFormatter(currentTime.toLocaleString())}</span>
          </p>
        </li>

        <li className='list__item' data-testid='latitude'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.latitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.latitude)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='longitude'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.longitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.longitude)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='language'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.idiom')}
            </span>
            &nbsp;
            <span>
              {textFormatter(
                Array.isArray(data.languages) && data.languages.length > 0
                  ? `${data.languages[0].name} (${String(data.languages[0].code).toUpperCase()})`
                  : 'N/A'
              )}
            </span>
          </p>
        </li>

        <li className='list__item' data-testid='currency'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.currency')}
            </span>
            &nbsp;
            <span>
              {textFormatter(`${data.currency.name} (${data.currency.code})`)}
            </span>
          </p>
        </li>

        <li className='list__item' data-testid='ddd'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.ddd')}
            </span>
            &nbsp;
            <span>{textFormatter(`+${data.calling_code}`)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='is_tor'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.tor')}
            </span>
            &nbsp;
            <span>{textFormatter(data.threat.is_tor)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='is_proxy'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.proxy')}
            </span>
            &nbsp;
            <span>{textFormatter(data.threat.is_proxy)}</span>
          </p>
        </li>

        <li className='list__item' data-testid='is_datacenter'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {t('home.dataDisplayList.dataCenter')}
            </span>
            &nbsp;
            <span>{textFormatter(data.threat.is_datacenter)}</span>
          </p>
        </li>
      </Container>
    </Window>
  )
}

export default Information
