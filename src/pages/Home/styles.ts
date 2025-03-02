import Styled from 'styled-components'

export const Wrapper = Styled.main`
  width: max-content;
  height: max-content;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header"
    "information map"
    "input .";
  row-gap: 2rem;
  column-gap: 1.4rem;
  margin: 4rem auto;

  @media (width <= 1050px) {
    width: 80%;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    margin: 0 auto;

    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "header"
      "input"
      "information"
      "map";
    row-gap: 1.5rem;
    column-gap: 0;
  }

  @media (width <= 486px) {
    width: 90%;
    margin-top: 0;
  }
`
