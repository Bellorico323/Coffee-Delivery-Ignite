import { Intro, IntroTitle } from './style'

export function Home() {
  return (
    <Intro>
      <IntroTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      </IntroTitle>
      <img src="/images/hero-bg.svg" alt="" id="hero-bg" />
    </Intro>
  )
}
