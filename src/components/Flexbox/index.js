import styled from "styled-components"

export const FlexGrid = styled.div`
  align-items: ${({ alignItems }) => alignItems || `initial`};
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || `wrap`};
  justify-content: ${({ justifyContent }) => justifyContent || `initial`};
`

export const Col = styled.div`
  box-sizing: border-box;
  flex: ${({ flex, width }) => (flex || width ? "initial" : "1")};
  margin: ${({ margin }) => margin || `initial`};
  width: ${({ width }) => width || `initial`};
`
