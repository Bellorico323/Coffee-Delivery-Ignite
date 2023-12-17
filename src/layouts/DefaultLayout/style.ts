import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  background: ${(props) => props.theme['white-bg']};

  display: flex;
  flex-direction: column;
`
