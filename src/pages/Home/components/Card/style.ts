import styled from 'styled-components'
import { tipografia } from '../../../../styles/tipografia'

export const CardContainer = styled.div`
  max-width: 256px;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  align-items: center;

  padding: 20px 24px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }
`

export const Tag = styled.div`
  > span {
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-800']};
    background: ${(props) => props.theme['yellow-100']};
  }

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;
  margin-top: 12px;
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  > h3 {
    ${tipografia.fonts.titleS}
    color: ${(props) => props.theme['brown-700']}
  }

  > p {
    ${tipografia.fonts.textS}
    text-align:center;

    color: ${(props) => props.theme['brown-200']};

    margin-top: 0.5rem;
  }
`

export const Buy = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  gap: 2px;

  span {
    ${tipografia.fonts.textS}
    color: ${(props) => props.theme['brown-700']};
    align-self: center;
    margin-top: 4px;
  }
`

export const Value = styled.p`
  ${tipografia.fonts.titleM}
  align-self: center;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > button {
    background: ${(props) => props.theme['purple-800']};
    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: ${(props) => props.theme['white-bg']};
    }
  }
`

export const Counter = styled.div<{ itemAdd?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;

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
