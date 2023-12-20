import { CardContainer, CardContent, Tag } from './style'

export function Card() {
  return (
    <CardContainer>
      <img src="/images/coffees/americano.png" alt="" />

      <Tag>Tradicional</Tag>
      <CardContent>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardContent>
      <footer>
        <span>Preco</span>
        <div>
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <button>Cart</button>
      </footer>
    </CardContainer>
  )
}
