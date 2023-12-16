import { Link } from 'react-router-dom'
import { Actions, HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>
      <Actions>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Actions>
    </HeaderContainer>
  )
}
