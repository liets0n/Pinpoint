import { useTranslation } from 'react-i18next'

import { Wrapper } from './styles'
import { useTheme } from './../../context'

const Header = () => {
  const { t, i18n } = useTranslation()
  const currentTheme = useTheme(state => state.currentTheme)
  const changeCurrentTheme = useTheme(state => state.changeCurrentTheme)

  const checkCurrentLanguage = (value: string) => {
    if (value.includes('en')) {
      return 'en'
    }

    if (value.includes('pt')) {
      return 'pt'
    }

    if (value.includes('es')) {
      return 'es'
    }

    return ''
  }

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
          defaultValue={currentTheme}
          onChange={e => changeCurrentTheme(e.target.value)}
        >
          <option value='light'>{t('home.header.theme.light')}</option>
          <option value='dark'>{t('home.header.theme.dark')}</option>
          <option value='system'>{t('home.header.theme.system')}</option>
        </select>

        <select
          name='language'
          title={t('home.header.language.title')}
          className='rightSide__select rightSide__select--languages'
          defaultValue={checkCurrentLanguage(i18n.language)}
          onChange={async e => await i18n.changeLanguage(e.target.value)}
        >
          <option value='en'>{t('home.header.language.english')}</option>
          <option value='pt'>{t('home.header.language.portuguese')}</option>
          <option value='es'>{t('home.header.language.spanish')}</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default Header
