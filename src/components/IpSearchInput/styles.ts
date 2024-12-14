import Styled from 'styled-components'

export const Wrapper = Styled.div`
  margin-top: 1rem;

  form {
    width: 30rem;
    height: 4rem;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[900]};
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
    box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};

    .searchField {
      width: 85%;
      height: 100%;
      font-size: 1rem;
      padding: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.gray[900]};
      background-color: ${({ theme }) => theme.colors.gray[50]};
    }

    .btn {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-left: 2px solid ${({ theme }) => theme.colors.gray[900]};
      background-color: transparent;
      cursor: pointer;

      .btn__icon {
        color: ${({ theme }) => theme.colors.gray[900]}
      }
    }

    @media (width <= 828px) {
      box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.gray[900]};

      .searchField {
        font-size: 0.875rem;
      }
    }

    @media (width <= 481px) {
      .btn {
        width: 25%;
      }
    }
  }

  @media (width <= 1050px) {
    margin-bottom: 1.5rem;

    form {
      width: 100%;
    }
  }

  @media (width <= 481px) {
    margin-bottom: 2rem;
  }
`
export const Warning = Styled.div`
  width: 30rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.colors.gray[900]};
`
