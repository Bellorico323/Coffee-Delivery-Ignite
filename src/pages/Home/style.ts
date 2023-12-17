import styled from 'styled-components'
import { tipografia } from '../../styles/tipografia'

export const Intro = styled.section`
  height: 34rem;
  position: relative;
  padding: 92px 0px;

  img#hero-bg {
    object-fit: cover;
    filter: blur(80px);
    position: absolute;
    top: 0px;
    right: 0px;
  }
`
export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    ${tipografia.fonts.titleXL}
  }
`
