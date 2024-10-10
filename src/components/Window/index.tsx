import { type ReactNode } from 'react'

import { Wrapper } from './styles'

type Props = {
  children?: ReactNode
  windowTitle: string
}

const Window = ({ children, windowTitle }: Props) => {
  return (
    <Wrapper>
      <div className='header'>
        <p className='header__title'>{windowTitle}</p>

        <ul className='header__list'>
          <li className='list__item' />
          <li className='list__item' />
          <li className='list__item list__item--contrast' />
        </ul>
      </div>

      <div className='content'>{children}</div>
    </Wrapper>
  )
}

export default Window
