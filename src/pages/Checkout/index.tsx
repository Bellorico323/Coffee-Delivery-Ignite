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

import { SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'

import {
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
import { Radio } from './FormComponents/Radio'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from './FormComponents/TextInput'

const FormSchema = zod.object({
  CEP: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type OrderFormData = zod.infer<typeof FormSchema>

export function Checkout() {
  const theme = useTheme()

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(FormSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<OrderFormData> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <CheckoutContainer>
        <OrderDetails>
          <h2>Complete seu pedido</h2>
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
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
                <TextInput
                  placeholder="CEP"
                  containerProps={{ style: { gridArea: 'CEP' } }}
                  error={errors.CEP}
                  {...register('CEP', { valueAsNumber: true })}
                />

                <TextInput
                  placeholder="rua"
                  containerProps={{ style: { gridArea: 'street' } }}
                  error={errors.street}
                  {...register('street')}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: 'number' } }}
                  error={errors.number}
                  {...register('number')}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                  error={errors.fullAddress}
                  {...register('fullAddress')}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                  error={errors.neighborhood}
                  {...register('neighborhood')}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: 'city' } }}
                  error={errors.city}
                  {...register('city')}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                  error={errors.state}
                  {...register('state')}
                />
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
