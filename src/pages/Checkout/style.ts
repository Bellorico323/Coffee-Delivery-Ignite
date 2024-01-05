import styled from 'styled-components'
import { tipografia } from '../../styles/tipografia'

export const CheckoutContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  gap: 2rem;
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;

  > h2 {
    ${tipografia.fonts.titleXS};
    color: ${(props) => props.theme['brown-700']};
  }
`
export const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-100']};
  padding: 40px;
`
export const CardHeader = styled.header`
  display: flex;
  height: 44px;
  justify-content: flex-start;
  gap: 0.5rem;

  div > h3 {
    margin-top: 2px;
    ${tipografia.fonts.textM}
    color: ${(props) => props.theme['brown-700']};
  }

  div > span {
    ${tipografia.fonts.textS};
    line-height: 1.3;
  }
`
export const FormContainer = styled.div`
  display: grid;
  grid-template-areas:
    'CEP . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
  margin-top: 2rem;

  > #CEP {
    grid-area: CEP;
  }
  > #street {
    grid-area: street;
  }
  > #number {
    grid-area: number;
  }
  > #box {
    grid-area: fullAddress;
    position: relative;
    > #fullAddress {
      width: 100%;
    }
    > span {
      position: absolute;
      top: 14px;
      right: 12px;

      ${tipografia.fonts.textXS}
      color: ${(props) => props.theme['brown-200']};
      font-style: italic;
      font-weight: 400;
    }
  }
  > #neighborhood {
    grid-area: neighborhood;
  }
  > #city {
    grid-area: city;
  }
  > #state {
    grid-area: state;
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['brown-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  padding: 12px;
  height: 42px;

  ${tipografia.fonts.textS}
`

export const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-100']};
  padding: 40px;
`

export const PaymentForm = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 12px;
`

export const CoffeeCard = styled.div``
