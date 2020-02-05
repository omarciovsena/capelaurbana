import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"

const Wrapper = styled.div`
  background: black;
  height: 100vh;

  h1 {
    margin: 0;
    color: white;
    padding: 10px;
  }
`

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <h1>Em breve - Capela Urbana</h1>
  </Wrapper>
)

export default NotFoundPage
