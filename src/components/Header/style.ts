import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1160px;
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
`
