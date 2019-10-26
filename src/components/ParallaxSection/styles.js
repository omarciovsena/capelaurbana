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
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
`
