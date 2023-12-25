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

  background-color: ${(props) => props.theme['gray-200']};
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

export const CoffeeCard = styled.div``
