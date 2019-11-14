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
    hour: "às quartas a partir das 19h30m",
    description: "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend. Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend."
  },
  {
    bgColor: theme.almond,
    logo: logoCidadania,
    title: "Cidadania",
    hour: "aos sábados a partir das 8h30m",
    description: "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend. Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend."
  },
  {
    bgColor: theme.daintree,
    logo: logoQuintal,
    title: "Quintal",
    hour: "às quartas a partir das 19h30m",
    description: "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend. Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend."
  },
  {
    bgColor: theme.starkWhite,
    logo: logoMissional,
    title: "Missional",
    hour: "aos sábados a partir das 8h",
    description: "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend. Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend."
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
