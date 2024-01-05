import styled from 'styled-components'
import { tipografia } from '../../../styles/tipografia'

export const Container = styled.label`
  padding: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  border: 1px solid transparent;

  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['brown-200']};
  text-transform: uppercase;
  ${tipografia.fonts.buttonM}
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-100']};
    border-color: ${(props) => props.theme['purple-500']};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
