import { useTranslation } from 'react-i18next'

import { Wrapper } from './styles'

function Loading() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div className='window'>
        <div className='header'>
          <p className='header__title'></p>

          <ul className='header__list'>
            <li className='list__item' />
            <li className='list__item' />
            <li className='list__item list__item--contrast' />
          </ul>
        </div>

        <div className='content'>
          <h1 className='content__text'>{t('home.loading.text')}</h1>
        </div>
      </div>
    </Wrapper>
  )
}

export default Loading
