import styled from "styled-components"
import { theme } from "../../styles/theme"

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

export const Block = styled.div`
  width: 100%;
`

export const Iframe = styled.iframe`
  border: 0;

  @media (max-width: 780px) {
    height: 380px !important;
  }

  @media (max-width: 500px) {
    height: 340px !important;
  }

  @media (max-width: 350px) {
    height: 300px !important;
  }
`

export const Text = styled.p`
  color: ${theme.daintree};
  font-size: 16px;
  text-align: center;
`

export const Image = styled.img`
  height: 42px;
  margin: 8px;
  vertical-align: middle;
`
