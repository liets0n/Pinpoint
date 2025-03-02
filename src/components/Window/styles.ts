import Styled from 'styled-components'

export const Wrapper = Styled.section`
  width: 30rem;
  height: 22.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  border-radius: 6px;
  box-shadow: 0.4rem 0.4rem 0 ${({ theme }) => theme.colors.gray[900]};
  overflow: hidden;

  .header {
    width: 100%;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[900]};

    .header__title {
      font-weight: 700;
    }

    .header__list{
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      gap: 0.5rem;

      .list__item {
        width: 1rem;
        height: 1rem;
        border-radius: 50rem;
        border: 2px solid ${({ theme }) => theme.colors.gray[900]};
      }

      .list__item--contrast {
        background-color: ${({ theme }) => theme.colors.gray[900]};
      }
    }
  }

  .content {
    width: 100%;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media (width <= 1050px) {
    width: 100%;
    height: 28rem;
  }

  @media (width <= 828px) {
    height: 22rem;
    box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.gray[900]};
  }
`
