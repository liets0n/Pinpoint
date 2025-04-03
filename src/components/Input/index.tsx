import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import i18next from '@libs/i18n'
import { Warning, Wrapper } from './styles'

const schemaValidation = z.object({
  search: z
    .string()
    .regex(
      /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
      i18next.t('home.input.ipErrorText')
    )
})

type SchemaType = z.infer<typeof schemaValidation>

type Props = {
  getIp: string
  setIp: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ getIp, setIp }: Props) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SchemaType>({ resolver: zodResolver(schemaValidation) })

  const handleSearchForIp = (data: SchemaType) => {
    setIp(String(data.search))
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleSearchForIp)}>
      <div className='container'>
        <input
          type='text'
          id='search'
          placeholder={getIp}
          className='container__input'
          data-testid='input'
          {...register('search')}
        />

        <button
          type='submit'
          className='container__btn'
          aria-label={t('home.input.btnTitle')}
          data-testid='search-btn'
        >
          <MagnifyingGlass size={32} className='btn__icon' />
        </button>
      </div>

      {errors.search != null && (
        <Warning data-testid='warning'>
          <p className='warning__text'>{errors.search?.message}</p>
        </Warning>
      )}
    </Wrapper>
  )
}

export default Input
