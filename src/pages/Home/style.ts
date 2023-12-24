import styled from 'styled-components'
import { tipografia } from '../../styles/tipografia'

export const Intro = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const IntroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${tipografia.fonts.titleXL}
    color: ${(props) => props.theme['brown-900']}
  }

  > span {
    ${tipografia.fonts.textL}
    color: ${(props) => props.theme['brown-700']}
  }
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  svg {
    padding: 8px;
    border-radius: 999px;
  }

  > span {
    ${tipografia.fonts.textM}
  }
`
export const CoffeeList = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 20px 150px;

  > h2 {
    ${tipografia.fonts.titleL}
    color: ${(props) => props.theme['brown-700']}
  }

  > div {
    margin-top: 3.375rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 40px;
  }
`
