import React from "react"
import * as F from "../Flexbox"
import * as S from "./styles"

const Hero = () => (
  <S.HeroContainer>
    <S.HeroFlexGrid alignItems="center">
      <F.Col width="50%">
        <S.H2>Um espaço de espiritualidade no meio da cidade.</S.H2>
        <S.H4>
          Um lugar de pausa, reflexão, oração e acolhimento pautado na
          espiritualidade de Jesus.
        </S.H4>
        <S.CTAContainer>
          <S.CallToAction>Chegue mais</S.CallToAction>
        </S.CTAContainer>
      </F.Col>
    </S.HeroFlexGrid>
  </S.HeroContainer>
)

export default Hero
