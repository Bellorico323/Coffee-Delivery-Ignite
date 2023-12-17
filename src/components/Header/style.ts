import styled from 'styled-components'
import { tipografia } from '../../styles/tipografia'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* max-width: 1160px; */
  padding: 2rem 1.25rem;
`

export const Actions = styled.aside`
  display: flex;
  gap: 12px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    padding: 0.5rem 0.5rem;

    background: ${(props) => props.theme['purple-100']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    span {
      color: ${(props) => props.theme['purple-800']};
    }
  }

  a {
    display: flex;
    align-items: center;

    justify-content: center;
    padding: 0.5rem 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-800']};

    position: relative;

    span {
      position: absolute;
      right: -8.345px;
      top: -8px;

      height: 20px;
      width: 20px;
      border-radius: 50%;

      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-800']};

      ${tipografia.fonts.textXS}
      line-height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
