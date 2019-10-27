import styled from "styled-components"
import { FlexGrid } from "../Flexbox"
import { theme }  from "../../styles/theme"

export const Wrapper = styled.div`
  background: ${theme.white};
  padding: 40px 0 60px;
`

export const Title = styled.h3`
  color: ${theme.daintree};
  font-size: 36px;
  margin: 0 0 32px;
  text-align: center;
`

export const Item = styled.div`
  text-align: center;
  width: calc(25% - 16px);

  @media (max-width: ${theme.tablet}) {
    width: calc(50% - 16px);
   
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media (max-width: ${theme.smallMobile}) {
    width: 100%;

  }
`

export const IconWrapper = styled.div`
  background: ${({ bgColor }) => bgColor || theme.daintree};
  border-radius: 50%;
  display: inline-block;
  height: 64px;
  margin-bottom: 16px;
  text-align: center;
  width: 64px;

  img {
    height: 32px;
    padding: 16px;
  }
`

export const Name = styled.h4`
  color: ${theme.daintree};
  font-size: 22px;
  margin: 0 0 8px;
`

export const Hour = styled.p`
  color: ${theme.santaFe};
  font-size: 12px;
  margin: 0 0 8px;
`

export const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0 0 8px;
`
