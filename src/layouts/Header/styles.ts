import Styled from 'styled-components'

export const Wrapper = Styled.header`
  height: max-content;
  display: flex;
  align-items: flex-end;
  grid-area: header;
  padding-bottom: 0.3rem;
  padding-right: 0.3rem;

  .leftSide {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .leftSide__title {
      width: max-content;
      font-size: 3rem;
    }

    .leftSide__description {
      width: 24rem;
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1.3rem;

    .rightSide__select {
      width: 8rem;
      height: 3rem;
      font-size: 1rem;
      padding: 0.5rem;
      border: 2px solid ${({ theme }) => theme.colors.gray[900]};
      border-radius: 6px;
      box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};
      color: ${({ theme }) => theme.colors.gray[900]};
      background-color: ${({ theme }) => theme.colors.gray[50]};
      cursor: pointer;
    }
  }

  @media (width <= 1050px) {
    width: 100%;
  }

  @media (width <= 887px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }

  @media (width <= 486px) {
    .leftSide {
      .leftSide__title {
        font-size: 2rem;
      }

      .leftSide__description {
        width: 17rem;
        font-size: 0.875rem;
      }
    }

    .rightSide {
      width: 100%;
      gap: 0.7rem;

      .rightSide__select {
        width: 50%;
        height: 3rem;
        font-size: 0.875rem;
        box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.gray[900]};
      }
    }
  }
`
