import React from "react"
import SpotifySvg from "../../images/img-spotify.svg"
import * as F from "../Flexbox"
import * as S from "./styles"

const Podcast = () => (
  <S.Wrapper>
    <F.Container>
      <S.Title>Ouça e Reflita</S.Title>
      <F.FlexGrid alignItems="center" justifyContent="center">
        <S.Block>
          <S.Iframe
            src="https://castbox.fm/app/castbox/player/id2449013?v=8.11.5&autoplay=0"
            frameborder="0"
            width="100%"
            height="450"
            title="Castbox - Capela Urbana"
          ></S.Iframe>
        </S.Block>
        <S.Text>
          ouça também no
          <a
            href="https://open.spotify.com/show/7gOg10XFYo1203iSLc4J23"
            title="Acesse Capela Urbana no Spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Image src={SpotifySvg} alt="spotify" />
          </a>
        </S.Text>
      </F.FlexGrid>
    </F.Container>
  </S.Wrapper>
)

export default Podcast
