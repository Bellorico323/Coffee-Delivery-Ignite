import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  Buy,
  CardContainer,
  CardContent,
  Counter,
  Actions,
  Price,
  Tag,
  Value,
} from './style'

export function Card() {
  return (
    <CardContainer>
      <img src="/images/coffees/americano.png" alt="" />

      <Tag>Tradicional</Tag>
      <CardContent>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardContent>
      <Buy>
        <Price>
          <span>R$</span>
          <Value>9,90</Value>
        </Price>
        <Actions>
          <Counter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Actions>
      </Buy>
    </CardContainer>
  )
}
