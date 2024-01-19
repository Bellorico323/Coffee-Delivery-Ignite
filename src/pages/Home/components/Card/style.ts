import styled from 'styled-components'
import { tipografia } from '../../../../styles/tipografia'

export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-800']};
    text-transform: uppercase;
    ${tipografia.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 16px;

  color: ${({ theme }) => theme['brown-700']};
  ${tipografia.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme['brown-200']};
  ${tipografia.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${tipografia.fonts.textS};
    color: ${({ theme }) => theme['brown-500']};
  }

  span:last-child {
    ${tipografia.fonts.titleM};
    color: ${({ theme }) => theme['brown-500']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-800'] : theme['purple-800']};
    transition: background-color 0.2s;
    border-radius: 6px;
    border: none;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme['yellow-500'] : theme['purple-500']};
    }
  }
`
