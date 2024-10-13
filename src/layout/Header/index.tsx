import { useTranslation } from 'react-i18next'

import { Wrapper } from './styles'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div className='leftSide'>
        <h1 className='leftSide__title'>{t('home.header.title')}</h1>
        <p className='leftSide__description'>{t('home.header.subtitle')}</p>
      </div>

      <div className='rightSide'>
        <select
          name='theme'
          title={t('home.header.theme.title')}
          className='rightSide__select rightSide__select--theme'
          defaultValue='light'
        >
          <option value='light'>{t('home.header.theme.light')}</option>
          <option value='dark'>{t('home.header.theme.dark')}</option>
        </select>

        <select
          name='language'
          title={t('home.header.language.title')}
          className='rightSide__select rightSide__select--languages'
          defaultValue='en-US'
        >
          <option value='en-US'>{t('home.header.language.english')}</option>
          <option value='es-ES'>{t('home.header.language.portuguese')}</option>
          <option value='pt-PT'>{t('home.header.language.spanish')}</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default Header
