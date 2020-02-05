import React from "react"
import * as F from "../Flexbox"
import * as S from "./styles"
import { theme }  from "../../styles/theme"

import logoCidadania from '../../images/logo-cidadania.svg'
import logoCapelaUrbana from '../../images/logo-capela-urbana.svg'
import logoMissional from '../../images/logo-missional.svg'
import logoQuintal from '../../images/logo-quintal.svg'

const items = [
  {
    bgColor: theme.daintree,
    logo: logoCapelaUrbana,
    title: "Capela Urbana",
    hour: "às Quartas a partir das 19h30m",
    description: "Em nossos encontros a palavra-chave é 'gente'. Nos encontramos por causa do Deus que se fez gente em Jesus e que nos manda amar outras 'gentes'. Deus escolheu ser amado no próximo."
  },
  {
    bgColor: theme.almond,
    logo: logoCidadania,
    title: "Cidadania",
    hour: "aos Sábados a partir das 8h30m",
    description: "Nossa ação comunitária acontece no Setor Dom Fernando II, a partir das aulas de futebol e de suporte às famílias. Temos um comprometimento ético com os valores do Reino de Deus."
  },
  {
    bgColor: theme.daintree,
    logo: logoQuintal,
    title: "Quintal",
    hour: "às Quintas",
    description: "Encontros singelos de comum união, para fortalecimento de vínculos, para celebrar a vida, comer e beber juntos e se alegrar pela Graça de Deus em nós."
  },
  {
    bgColor: theme.starkWhite,
    logo: logoMissional,
    title: "Missional",
    hour: "aos Sábados a partir das 8h",
    description: "Curso intensivo que reflete o papel missional da igreja, sua ação na sociedade, a teologia pública e o compromisso com a transformação do mundo pela prática do Evangelho do Amor."
  }
]

const Meeting = () => (
  <S.Wrapper id="encontros">
    <F.Container>
      <S.Title>Encontros</S.Title>
      <F.FlexGrid justifyContent="space-between" alignItems="stretch">
        {
          items.map((item, index) => (
            <S.Item key={`meeting-${index}`}>
              <S.IconWrapper bgColor={item.bgColor}>
                <img src={item.logo} alt={item.title}/>
              </S.IconWrapper>
              <S.Name>{item.title}</S.Name>
              <S.Hour>{item.hour}</S.Hour>
              <S.Description>{item.description}</S.Description>
            </S.Item>
          ))
        }
      </F.FlexGrid>
    </F.Container>
  </S.Wrapper>
)

export default Meeting
