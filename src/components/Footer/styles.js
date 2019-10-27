import styled from "styled-components"
import { theme } from "../../styles/theme"
import { FlexGrid } from "../Flexbox"

export const StyledFooter = styled.footer`
  background-color: ${theme.daintree};
  color: ${theme.hitGray};
  font-size: 13px;
  font-weight: 300;

  div {
    padding: 4px 0;
  }
`

export const StyledText = styled.p`
  font-weight: 300;

  @media (max-width: 780px) {
    text-align: center;
  }
`

export const StyledImage = styled.img`
  height: 18px;
  margin: 0 4px;
`

export const StyledSection = styled(FlexGrid)`
  margin-left: 16px;
  line-height: 1.5;

  a {
    color: ${theme.hitGray};
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: ${theme.white};
    }
  }
`

export const StyledRow = styled(FlexGrid)`
  @media (max-width: 780px) {
    flex-direction: column;
  }
`
