import React from "react"
import * as F from "../Flexbox"
import * as S from "./styles"

const Hero = () => (
  <S.HeroWrapper>
    <F.Container>
      <S.HeroFlexGrid alignItems="center">
        <S.HeroCol>
          <S.H2>Um espaço de espiritualidade no meio da cidade.</S.H2>
          <S.H4>
            Um lugar de pausa, reflexão, oração e acolhimento pautado na
            espiritualidade de Jesus.
          </S.H4>
          <S.CTAContainer>
            <S.CallToAction to="/#encontros">Chegue mais</S.CallToAction>
          </S.CTAContainer>
        </S.HeroCol>
      </S.HeroFlexGrid>
    </F.Container>
  </S.HeroWrapper>
)

export default Hero
