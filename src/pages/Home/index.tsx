import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Information, Input, Map } from '@components'
import { Error, Header, Loading } from '@layouts'
import { Service } from '@services'
import { Wrapper } from './styles'

const Home = () => {
  const { t } = useTranslation()

  const [ipAddress, setIpAddress] = useState(t('home.input.placeholder'))

  const { data, isError, isLoading } = Service(ipAddress)

  if (isError && !isLoading) return <Error />
  if (!data || isLoading) return <Loading />

  return (
    <Wrapper>
      <Header />

      <Information data={data} />

      <Map
        coordinates={{ lat: data.latitude, lng: data.longitude }}
        currentIpAddress={data.ip}
      />

      <Input getIp={ipAddress} setIp={setIpAddress} />
    </Wrapper>
  )
}

export default Home
