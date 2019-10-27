import styled from "styled-components"
import { theme } from "../../styles/theme"

import * as F from "../Flexbox"

export const NewsWrapper = styled(F.Wrapper)`
  background: ${theme.santaFe};
  padding: 24px 0;
`

export const NewsCol = styled(F.Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const P = styled.p`
  color: ${theme.white};
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  max-width: 340px;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Input = styled.input`
  border-radius: 20px;
  border: none;
  font-weight: 300;
  padding: 8px 10px 8px 20px;
  width: 45%;

  &:nth-child(2) {
    width: 25%;
  }

  &:nth-child(3) {
    background: ${theme.daintree};
    color: ${theme.white};
    font-weight: 600;
    min-height: 41px;
    padding: 0;
    width: 20%;
  }
`
