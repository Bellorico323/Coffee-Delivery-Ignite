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

export const Tag = styled.span`
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
