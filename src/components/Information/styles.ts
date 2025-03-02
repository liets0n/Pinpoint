import Styled from 'styled-components'

export const Container = Styled.ul`
  grid-area: information;
  padding: 0.5rem 1rem 1rem 2rem;

  .list__item {
    .item__text {
      line-height: 2.1rem;

      span {
        font-size: 1rem;
      }

      .text--emphasis {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  }
`
