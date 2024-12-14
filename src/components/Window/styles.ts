import Styled from 'styled-components'

export const Wrapper = Styled.section`
  width: 30rem;
  height: 22rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0.4rem 0.4rem 0 ${({ theme }) => theme.colors.gray[900]};

  .header {
    width: 100%;
    height: 2%;
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
    overflow: scroll;
  }

  @media (width <= 1050px) {
    width: 100%;
    height: 31rem;
  }

  @media (width <= 828px) {
    height: 20rem;
    box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.gray[900]};
  }
`
