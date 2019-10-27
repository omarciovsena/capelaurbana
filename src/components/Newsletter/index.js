import React from "react"

import * as F from "../Flexbox"
import * as S from "./styles"

const Newsletter = () => (
  <S.NewsWrapper>
    <F.Container>
      <F.FlexGrid>
        <F.Col width="34%">
          <S.P>
            Conecte e fique por dentro do cuidado de Deus e do “cuidar” de
            gente:
          </S.P>
        </F.Col>
        <S.NewsCol width="66%">
          <S.Form>
            <S.Input type="email" placeholder="Digite o seu email"></S.Input>
            <S.Input type="tel" placeholder="Whatsapp"></S.Input>
            <S.Input type="submit" value="Enviar"></S.Input>
          </S.Form>
        </S.NewsCol>
      </F.FlexGrid>
    </F.Container>
  </S.NewsWrapper>
)

export default Newsletter
