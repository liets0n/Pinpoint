import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { API } from './../../services'
import { Header } from './../../layout'
import { Wrapper, Container } from './styles'
import { Window, IpSearchInput, DataDisplayList, Map } from './../../components'

const Home = () => {
  const [ipAddress, setIpAddress] = useState('0.0.0.0')

  const { t } = useTranslation()

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ipData', ipAddress],
    queryFn: async () => {
      const hasStateChanged = ipAddress === '0.0.0.0' ? '' : `/${ipAddress}`
      const { data } = await API.get(
        `${hasStateChanged}?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`
      )

      return data
    }
  })

  const updateIpAddress = (newIpAddress: string): void => {
    setIpAddress(newIpAddress)
  }

  if (data === undefined || isLoading) {
    return <h1>{t('home.loading.text')}</h1>
  }

  if (isError && !isLoading) {
    return <h1>{t('home.error.text')}</h1>
  }

  return (
    <Wrapper>
      <Header />

      <Container>
        <div className='leftSide'>
          <Window windowTitle={t('home.window.title.data')}>
            <DataDisplayList data={data} />
          </Window>

          <IpSearchInput
            getCurrentIpAddress={ipAddress}
            updateIpAddress={updateIpAddress}
          />
        </div>

        <Window windowTitle={t('home.window.title.map')}>
          <Map
            lat={data.latitude}
            lng={data.longitude}
            currentIpAddress={data.ip}
          />
        </Window>
      </Container>
    </Wrapper>
  )
}

export default Home
