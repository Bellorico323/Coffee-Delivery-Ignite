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
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

import { coffees } from '../../../../../data.json'

export type CoffeeProps = {
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
  const [numberOfItens, setNumberOfItens] = useState(0)
  const { coffeeList, setCoffeeList } = useContext(CoffeeContext)

  function addItem(i: string) {
    const item = coffees.find((coffee) => (coffee.id = i))
    setCoffeeList([...coffeeList, { item, numberOfItens }])
    console.log(item)
  }

  function improveNumberOfItens() {
    setNumberOfItens(numberOfItens + 1)
    addItem(coffee.id)
  }

  function decreaseNumberOfItens() {
    if (numberOfItens > 0) setNumberOfItens(numberOfItens - 1)
  }

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
            <button onClick={decreaseNumberOfItens}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{numberOfItens}</span>
            <button onClick={improveNumberOfItens}>
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
