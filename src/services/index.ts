import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const API = axios.create({
  baseURL: 'https://api.ipdata.co'
})

const Service = (ipAddress: string) => {
  const { t } = useTranslation()

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ipData', ipAddress],
    queryFn: async () => {
      const hasStateChanged =
        ipAddress === t('home.input.placeholder') ? '' : `/${ipAddress}`

      const { data } = await API.get(
        `${hasStateChanged}?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`
      )

      return data
    }
  })

  return { data, isError, isLoading }
}

export { Service }
