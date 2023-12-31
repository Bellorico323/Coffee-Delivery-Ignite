import { MapPinLine } from '@phosphor-icons/react'
import {
  BaseInput,
  CardHeader,
  CheckoutContainer,
  CoffeeCard,
  FormContainer,
  LocationDetails,
  OrderDetails,
} from './style'
import { useTheme } from 'styled-components'
// import { useForm } from 'react-hook-form'

export function Checkout() {
  const theme = useTheme()
  // const { register, handleSubmit } = useForm()
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
            <FormContainer>
              <BaseInput id="CEP" placeholder="CEP" />
              <BaseInput id="street" placeholder="Rua" />
              <BaseInput id="number" placeholder="Número" />
              <div id="box">
                <BaseInput id="fullAddress" placeholder="Complemento" />
                {<span>Opcional</span>}
              </div>
              <BaseInput id="neighborhood" placeholder="Bairro" />
              <BaseInput id="city" placeholder="Cidade" />
              <BaseInput id="state" placeholder="UF" />
            </FormContainer>
          </LocationDetails>
        </OrderDetails>
        <CoffeeCard>
          <h2>Cafés selecionados</h2>
        </CoffeeCard>
      </CheckoutContainer>
    </div>
  )
}
