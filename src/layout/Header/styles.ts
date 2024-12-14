import Styled from 'styled-components'

export const Wrapper = Styled.header`
  display: flex;
  align-items: flex-end;
  min-height: max-content;

  .leftSide {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;

    .leftSide__title {
      font-size: 3rem;
    }

    .leftSide__description {
      width: 22rem;
      font-weight: 700;
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;

    .rightSide__select {
      width: 8rem;
      height: 3rem;
      font-size: 1rem;
      border: 2px solid ${({ theme }) => theme.colors.gray[900]};
      padding: 0.5rem;
      box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};
      color: ${({ theme }) => theme.colors.gray[900]};
      background-color: ${({ theme }) => theme.colors.gray[50]};
      cursor: pointer;
    }
  }

  @media (width <= 1050px) {
    width: 100%;
  }

  @media (width <= 828px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }

  @media (width <= 481px) {
    .leftSide {
      .leftSide__title {
        font-size: 2rem;
      }

      .leftSide__description {
        width: 20rem;
        font-size: 0.875rem;
      }
    }

    .rightSide {
      width: 100%;
      gap: 0.5rem;

      .rightSide__select {
        width: 50%;
        height: 3rem;
        font-size: 0.875rem;
        box-shadow: 0.1rem 0.1rem 0 ${({ theme }) => theme.colors.gray[900]};
      }
    }
  }
`
