import { Link } from 'react-router-dom'
import { Actions, HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" draggable={false}>
        <img src="/logo.svg" alt="Coffee Delivery" draggable={false} />
      </Link>
      <Actions>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/Checkout" draggable={false}>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </Actions>
    </HeaderContainer>
  )
}
