import { Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <div className='leftSide'>
        <h1 className='leftSide__title'>Pinpoint</h1>

        <p className='leftSide__description'>
          Online tool that allows you to track and identify the origin of an IP
          address.
        </p>
      </div>

      <div className='rightSide'>
        <select
          name='theme'
          title='Change the current page theme'
          className='rightSide__select rightSide__select--theme'
          defaultValue='light'
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>

        <select
          name='language'
          title='Change the current page language'
          className='rightSide__select rightSide__select--languages'
          defaultValue='en-US'
        >
          <option value='en-US'>English</option>
          <option value='es-ES'>Spanish</option>
          <option value='pt-PT'>Portuguese</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default Header
