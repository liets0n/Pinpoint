import { useTranslation } from 'react-i18next'

import { useTheme } from '@contexts'
import { Wrapper } from './styles'

const Header = () => {
  const { t, i18n } = useTranslation()
  const currentTheme = useTheme(state => state.currentTheme)
  const changeCurrentTheme = useTheme(state => state.changeCurrentTheme)

  const checkCurrentLanguage = (value: string) => {
    const languages = ['en', 'pt', 'es']
    return languages.find(lang => value.includes(lang)) || 'en'
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
          defaultValue={currentTheme}
          aria-label={t('home.header.theme.title')}
          className='rightSide__select rightSide__select--theme'
          onChange={e => changeCurrentTheme(e.target.value)}
        >
          <option value='light'>{t('home.header.theme.light')}</option>
          <option value='dark'>{t('home.header.theme.dark')}</option>
          <option value='system'>{t('home.header.theme.system')}</option>
        </select>

        <select
          name='language'
          defaultValue={checkCurrentLanguage(i18n.language)}
          aria-label={t('home.header.language.title')}
          className='rightSide__select rightSide__select--languages'
          onChange={async e => await i18n.changeLanguage(e.target.value)}
          data-testid='page-language'
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
