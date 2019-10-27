import styled from "styled-components"
import { theme } from "../../styles/theme"

import * as F from "../Flexbox"

export const NewsWrapper = styled(F.Wrapper)`
  background: ${theme.santaFe};
  padding: 30px 0;
`

export const NewsCol = styled(F.Col)`
  display: flex;
  align-items: center;
`

export const P = styled.p`
  color: ${theme.white};
  max-width: 340px;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  padding: 8px 10px 8px 20px;
  width: 40%;
  border-radius: 20px;
  border: none;

  &:nth-child(2) {
    width: 26%;
  }

  &:nth-child(3) {
    width: 20%;
    min-height: 41px;
    padding: 0;
    background: ${theme.daintree};
    color: ${theme.white};
    font-weight: 600;
  }
`
