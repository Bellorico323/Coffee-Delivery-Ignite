import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'

import { coffees } from '../../../data.json'

import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import {
  BaseInput,
  Buttons,
  CardHeader,
  CartTotal,
  CheckoutContainer,
  Coffee,
  CoffeeContainer,
  CoffeeDetails,
  ConfirmationButton,
  CooffeeHolder,
  Counter,
  Details,
  FormContainer,
  LocationDetails,
  OrderDetails,
  PaymentDetails,
  PaymentForm,
  Price,
  RemoveButton,
} from './style'
import { useTheme } from 'styled-components'
import { Radio } from '../../components/Form/Radio'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = zod.object({
  CEP: zod.string(),
  street: zod.string(),
  number: zod.string(),
  fullAddres: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'cash', '']),
})

type OrderFormData = zod.infer<typeof FormSchema>

export function Checkout() {
  const theme = useTheme()

  const OrderForm = useForm<OrderFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      CEP: '',
      street: '',
      number: '',
      fullAddres: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: '', // está errado
    },
  })

  const { watch, register } = OrderForm

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <div>
      <CheckoutContainer>
        <OrderDetails>
          <h2>Complete seu pedido</h2>
          <form id="order">
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
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </PaymentForm>
            </PaymentDetails>
          </form>
        </OrderDetails>
        <CoffeeContainer>
          <h2>Cafés selecionados</h2>
          <CoffeeDetails>
            <CooffeeHolder>
              <Coffee>
                <img src={coffees[0].image} alt="" sizes="64px" />
                <Details>
                  <div>
                    <p>{coffees[0].title}</p>
                  </div>
                  <Buttons>
                    <Counter>
                      <button /* onClick={decreaseNumberOfItens} */>
                        <Minus size={14} weight="bold" />
                      </button>
                      <span>1</span>
                      <button /* onClick={improveNumberOfItens} */>
                        <Plus size={14} weight="bold" />
                      </button>
                    </Counter>
                    <RemoveButton>
                      <Trash size={16} />
                      <span>remover</span>
                    </RemoveButton>
                  </Buttons>
                </Details>
                <Price>
                  <span>R$ {coffees[0].price.toFixed(2)}</span>
                </Price>
              </Coffee>
              <span />
            </CooffeeHolder>
            <CooffeeHolder>
              <Coffee>
                <img src={coffees[0].image} alt="" sizes="64px" />
                <Details>
                  <div>
                    <p>{coffees[0].title}</p>
                  </div>
                  <Buttons>
                    <Counter>
                      <button /* onClick={decreaseNumberOfItens} */>
                        <Minus size={14} weight="bold" />
                      </button>
                      <span>1</span>
                      <button /* onClick={improveNumberOfItens} */>
                        <Plus size={14} weight="bold" />
                      </button>
                    </Counter>
                    <RemoveButton>
                      <Trash size={16} />
                      <span>remover</span>
                    </RemoveButton>
                  </Buttons>
                </Details>
                <Price>
                  <span>R$ {coffees[0].price.toFixed(2)}</span>
                </Price>
              </Coffee>
              <span />
            </CooffeeHolder>
            <CartTotal>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </CartTotal>
            <ConfirmationButton type="submit" form="order">
              Confirmar pedido
            </ConfirmationButton>
          </CoffeeDetails>
        </CoffeeContainer>
      </CheckoutContainer>
    </div>
  )
}
