import Styled from 'styled-components'

export const Wrapper = Styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  height: max-content;
  transform: translate(-50%, -50%);

  @media (width <= 1050px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 80%;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    margin: 0 auto;
  }

  @media (width <= 828px) {
    width: 90%;
  }
`

export const Container = Styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;


  @media (width <= 1050px) {
    width: 100%;
    flex-direction: column;

    .leftSide {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media (width <= 828px) {
    margin-top: 2rem;
  }

  @media (width <= 481px) {
    margin-top: 0;
  }
`
