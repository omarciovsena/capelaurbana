import React from "react"
import { useWindowScroll, useWindowSize } from "react-use"
import { theme } from "../../styles/theme"

import * as S from "./styles"

const Header = () => {
  const { y } = useWindowScroll()
  const { width } = useWindowSize()
  let headerHeight = y < 120 ? "94px" : "70px"
  let imageWidth = y < 120 ? "140px" : "115px"
  let transparentToWhite = y < 120 ? "transparent" : `${theme.white}`
  let whiteToDaintree = y < 120 ? `${theme.white}` : `${theme.daintree}`
  let daintreeToWhite = y < 120 ? `${theme.daintree}` : `${theme.white}`
  let boxShadow = y > 120 && `0px 1px 3px ${theme.daintree}`

  let buttonStyle =
    width < 768
      ? { background: "none", color: theme.white, padding: 0, borderRadius: 0 }
      : {
          background: whiteToDaintree,
          color: daintreeToWhite,
        }

  return (
    <S.Header
      style={{
        height: headerHeight,
        background: transparentToWhite,
        boxShadow: boxShadow,
      }}
    >
      <S.Container>
        <svg
          style={{ width: imageWidth, fill: whiteToDaintree }}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 231.77 98.13"
        >
          <path
            className="cls-1"
            d="M90.33,40.19h20V63.54L118.93,55V40.19h19.94l.11,58L114.64,73.9,90.33,98.21v-58m0-8h20.08V17.83H119v6l-8.35,8.34h28.43c0-10.16,0-21.94,0-32.11H90.33V32.18m-79.43,8h3v3h-3a7.17,7.17,0,0,0-5.27,2.19,7.46,7.46,0,0,0,0,10.54,7.17,7.17,0,0,0,5.27,2.19h3v3h-3A10.06,10.06,0,0,1,3.52,58a10.43,10.43,0,0,1,0-14.76,10.06,10.06,0,0,1,7.38-3.06ZM17.58,61H14.49l5.83-21h2.39l5.83,21H25.46L21.52,47.22ZM28.91,40.15h6a7.45,7.45,0,0,1,5.27,12.73,7.17,7.17,0,0,1-5.27,2.19h-3v6h-3Zm3,3v8.95h3a4.48,4.48,0,0,0,0-8.95Zm26.32-3h3v17.9H71.64v3H58.22ZM75.34,61H72.25l5.83-21h2.39L86.3,61H83.22L79.28,47.22Zm-18.61-.14v-3H46.29V49H56.73V46H46.29V43H56.73V40H43.31V60.89Zm100.61-7.32V40.15h3V53.57a7.46,7.46,0,0,1-14.92,0V40.15h3V53.57a4.48,4.48,0,0,0,9,0Zm8.18-10.44v8.95h3a4.48,4.48,0,0,0,0-8.95Zm0,10V61h-3V40.15h6a7.46,7.46,0,0,1,5.28,12.72,7.53,7.53,0,0,1-2.58,1.72L177.65,61h-4.21l-7.92-7.92ZM193,61h-3.09l5.83-21h2.39L204,61h-3.08L197,47.22,193,61Zm14.32-14V61h-3V40h2.41l8,14.14v-14h3v21h-2.45l-8-14.07Zm13.93,14h-3.09L224,40h2.39l5.83,21h-3.09l-3.94-13.81L221.28,61ZM180.75,49h3a4.48,4.48,0,0,1,0,8.95h-3V49Zm-3,11.93h6A7.45,7.45,0,0,0,189,48.17,7.53,7.53,0,0,0,187.46,47a4.24,4.24,0,0,0,.74-2.48A4.47,4.47,0,0,0,183.73,40h-6V60.89Zm3-14.91V43h3a1.44,1.44,0,0,1,1.05.44,1.47,1.47,0,0,1,.44,1,1.52,1.52,0,0,1-1.49,1.5Z"
            transform="translate(-0.46 -0.07)"
          />
        </svg>
        <nav>
          <S.ToggleInput />
          <S.Toggle />
          <S.NavLinks style={{ color: whiteToDaintree }}>
            <S.NavLinksItem>
              <S.NavLinksLink to="/#encontros">Encontros</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLink to="/#ouca-e-reflita">
                Ouça e Reflita
              </S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLink to="/#contribua">Contribua</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLinkEspecial style={buttonStyle} to="/">
                Conecte-se
              </S.NavLinksLinkEspecial>
            </S.NavLinksItem>
          </S.NavLinks>
        </nav>
      </S.Container>
    </S.Header>
  )
}

export default Header
