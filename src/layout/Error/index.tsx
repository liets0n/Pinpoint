import { useTranslation } from 'react-i18next'

import { Wrapper } from './styles'

function Error() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div className='window'>
        <div className='header'>
          <p className='header__title'>{t('home.error.title')}</p>

          <ul className='header__list'>
            <li className='list__item' />
            <li className='list__item' />
            <li className='list__item list__item--contrast' />
          </ul>
        </div>

        <div className='content'>
          <h1 className='content__text'>{t('home.error.text')}</h1>
        </div>
      </div>

      <button className='btn' onClick={() => location.reload()}>
        {t('home.error.btn')}
      </button>
    </Wrapper>
  )
}

export default Error
