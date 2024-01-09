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
`

export const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-100']};
  padding: 40px;
`

export const PaymentForm = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 12px;
`

export const CoffeeContainer = styled.div`
  > h2 {
    ${tipografia.fonts.titleXS};
    color: ${(props) => props.theme['brown-700']};
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 6px 44px 6px 44px;

  width: 448px;

  background-color: ${(props) => props.theme['gray-100']};
  padding: 40px;
`

export const CooffeeHolder = styled.div`
  > span {
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme['gray-300']};
    margin: 24px 0;
  }
`

export const Coffee = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;

  gap: 20px;

  background-color: ${(props) => props.theme['gray-100']};

  > img {
    height: 64px;
    width: 64px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    ${tipografia.fonts.textM};
    color: ${(props) => props.theme['brown-700']};
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme['gray-300']};

  > button {
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['purple-500']};

    font-weight: bold;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      color: ${(props) => props.theme['purple-800']};
    }
  }

  > span {
    ${tipografia.fonts.textM}
    color: ${(props) => props.theme['brown-700']};
    height: 22px;
    width: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  gap: 4px;

  background: ${(props) => props.theme['gray-300']};

  height: 32px;
  padding: 0px 8px;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  &:focus {
    box-shadow: none;
  }

  > svg {
    color: ${(props) => props.theme['purple-500']};

    &:hover {
      color: ${(props) => props.theme['purple-800']};
    }
  }

  > span {
    ${tipografia.fonts.buttonM};
    text-transform: uppercase;
    margin-top: 3px;
    color: ${(props) => props.theme['brown-500']};
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;

  margin-top: 20px;

  height: 100%;
  width: 100%;

  color: ${(props) => props.theme['brown-5  00']};
  font-weight: bold;
`

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${tipografia.fonts.textS};
    }

    span:last-child {
      ${tipografia.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${tipografia.fonts.textL};
      font-weight: bold;
    }
  }
`
export const ConfirmationButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  border: none;

  ${tipografia.fonts.buttonG};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-800']};
  }

  border-radius: 6px;
`
