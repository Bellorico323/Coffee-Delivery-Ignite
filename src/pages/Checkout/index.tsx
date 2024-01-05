import { CreditCard, CurrencyDollar, MapPinLine } from '@phosphor-icons/react'

import {
  BaseInput,
  CardHeader,
  CheckoutContainer,
  CoffeeCard,
  FormContainer,
  LocationDetails,
  OrderDetails,
  PaymentDetails,
  PaymentForm,
} from './style'
import { useTheme } from 'styled-components'
import { Radio } from '../../components/Form/Radio'

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

          <PaymentDetails>
            <CardHeader>
              <div>
                <CurrencyDollar size={22} color={theme['purple-500']} />
              </div>
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </CardHeader>
            <PaymentForm>
              <Radio isSelected={true}>
                <CreditCard size={16} />
                <span>Cartão de débito</span>
              </Radio>
              <Radio isSelected={false}>
                <CreditCard size={16} />
                <span>Cartão de débito</span>
              </Radio>
              <Radio isSelected={false}>
                <CreditCard size={16} />
                <span>Cartão de débito</span>
              </Radio>
            </PaymentForm>
          </PaymentDetails>
        </OrderDetails>
        <CoffeeCard>
          <h2>Cafés selecionados</h2>
        </CoffeeCard>
      </CheckoutContainer>
    </div>
  )
}
