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
      margin-top: 1rem;

      .content__text {
        font-size: 2rem;
      }
    }
  }
`
