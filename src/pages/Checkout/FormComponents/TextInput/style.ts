import styled from 'styled-components'
import { tipografia } from '../../../../styles/tipografia'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-300']};

  background-color: ${(props) => props.theme['gray-200']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme['yellow-800']};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme['gray-300']};
  }

  input {
    color: ${(props) => props.theme['brown-500']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &:placeholder {
      color: ${(props) => props.theme['brown-200']};
    }
  }

  span {
    color: ${(props) => props.theme['brown-200']};
    padding-right: 12px;
    ${tipografia.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${tipografia.fonts.textXS};
  font-weight: 400;
  color: red;
`
