import { MapPinLine } from '@phosphor-icons/react'
import {
  CardHeader,
  CheckoutContainer,
  CoffeeCard,
  LocationDetails,
  OrderDetails,
} from './style'
import { useTheme } from 'styled-components'

export function Checkout() {
  const theme = useTheme()
  return (
    <div>
      <CheckoutContainer>
        <OrderDetails>
          <h2>Complete seu pedido</h2>
          <LocationDetails>
            <CardHeader>
              <div>
                <MapPinLine size={22} color={theme['yellow-800']} />
              </div>
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CardHeader>
          </LocationDetails>
        </OrderDetails>
        <CoffeeCard>
          <h2>Cafés selecionados</h2>
        </CoffeeCard>
      </CheckoutContainer>
    </div>
  )
}
