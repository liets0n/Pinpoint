import Styled from 'styled-components'

export const Wrapper = Styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  transform: translate(-50%, -50%);

  .window {
    width: 28rem;
    height: 10rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
    border-radius: 6px;
    box-shadow: 0.4rem 0.4rem 0 ${({ theme }) => theme.colors.gray[900]};
    overflow: hidden;

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

      .header__list {
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      .content__text {
        font-size: 2rem;
        margin-top: 1.4rem;
      }
    }

    @media(width <= 505px) {
      width: 25rem;
      height: 9rem;

      .content {
        .content__text {
          font-size: 1.5rem;
          margin-top: 1rem;
        }
      }
    }

    @media(width <= 471px) {
      width: 24rem;
      height: 8.5rem;
    }

    @media(width <= 425px) {
      width: 21rem;
      height: 8.5rem;
    }

    @media(width <= 415px) {
      width: 19rem;
      height: 8.5rem;
    }

    @media(width <= 368px) {
      width: 16rem;
      height: 8.5rem;
    }
  }
`
