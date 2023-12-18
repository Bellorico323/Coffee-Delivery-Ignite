import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeList, Info, Intro, IntroContent, IntroTitle } from './style'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Intro>
        <IntroContent>
          <div>
            <IntroTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </IntroTitle>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme['white-bg']}
                  style={{ background: theme['yellow-800'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme['white-bg']}
                  style={{ background: theme['brown-500'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme['white-bg']}
                  style={{ background: theme['yellow-500'] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme['white-bg']}
                  style={{ background: theme['purple-500'] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </IntroContent>
        <img src="/images/hero-bg.svg" alt="" id="hero-bg" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>
      </CoffeeList>
    </div>
  )
}
