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

type CoffeeProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.title} />

      <Tag>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
      <CardContent>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CardContent>
      <Buy>
        <Price>
          <span>R$</span>
          <Value>{coffee.price.toFixed(2)}</Value>
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
