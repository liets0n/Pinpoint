import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Wrapper, Warning } from './styles'

const schemaValidation = z.object({
  search: z
    .string()
    .regex(
      /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
      'Please enter a valid IP address!'
    )
})

type SchemaType = z.infer<typeof schemaValidation>

type Props = {
  getCurrentIpAddress: string
  updateIpAddress: (newIPAddress: string) => void
}

const IpSearchInput = ({ getCurrentIpAddress, updateIpAddress }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SchemaType>({ resolver: zodResolver(schemaValidation) })

  const handleSearchForIp = (data: SchemaType) => {
    updateIpAddress(String(data.search))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleSearchForIp)}>
        <input
          type='text'
          id='search'
          placeholder={getCurrentIpAddress}
          className='searchField'
          {...register('search')}
        />

        <button type='submit' className='btn' title='Search'>
          <MagnifyingGlass size={32} className='btn__icon' />
        </button>
      </form>

      {errors.search != null && (
        <Warning>
          <p className='warning__text'>{errors.search?.message}</p>
        </Warning>
      )}
    </Wrapper>
  )
}

export default IpSearchInput
