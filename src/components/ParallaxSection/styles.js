import styled from "styled-components"
import { FlexGrid } from "../Flexbox"
import { theme } from "../../styles/theme"

export const Wrapper = styled.div`
  background: ${({ bgColor }) => bgColor};

  > div {
    padding: 40px 0;
  }

  .react-parallax-bgimage {
    opacity: 0.1;
  }
`

export const Row = styled(FlexGrid)`
  > * {
    width: 50%;
  }

  @media (max-width: 780px) {
    > div:first-child {
      display: none;
    }

    > div {
      text-align: center;
      width: 100%;
    }
  }
`

export const Image = styled.img`
  max-height: 180px;
`

export const TextSection = styled.div`
  text-align: ${({ align }) => align};
  width: 50%;
`

export const Title = styled.h3`
  color: ${theme.white};
  font-size: 36px;
  margin: 0 0 16px;
`

export const Text = styled.p`
  color: ${theme.white};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
`

export const Cta = styled.a`
  background: ${theme.white};
  border-radius: 20px;
  color: ${({ textColor }) => textColor};
  display: inline-block;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 40px;
  text-decoration: none;
`
