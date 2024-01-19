import { Link } from 'react-router-dom'
import { Actions, HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
export function Header() {
  const { cart } = useCart()

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

        <Link to={`cart`} draggable={false} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Actions>
    </HeaderContainer>
  )
}
