import React from "react"
import moment from 'moment'
import * as S from "./styles"
import * as F from "../Flexbox"
import SocialFacebook from "../../images/social-facebook.svg"
import SocialInstagram from "../../images/social-instagram.svg"

const Footer = () => (
  <S.StyledFooter>
    <F.Container>
      <S.StyledRow alignItems="center" justifyContent="space-between">
        <F.FlexGrid alignItems="center" justifyContent="space-between">
          <a
            href="https://instagram.com/capelaurbana/"
            title="Acesse nosso instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.StyledImage src={SocialInstagram} />
          </a>
          <a
            href="https://facebook.com/capelaurbana/"
            title="Acesse nosso facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.StyledImage src={SocialFacebook} />
          </a>
          <S.StyledSection
            alignItems="left"
            flexDirection="column"
            justifyContent="center"
          >
            <span>@capelaurbana</span>
          </S.StyledSection>
          <S.StyledSection
            alignItems="left"
            flexDirection="column"
            justifyContent="center"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5562982841985&text=Ol%C3%A1%Gito%2C%20"
              title="Whatsapp - Gito"
            >
              (62) 9 8284-1985 - Gito
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5562981246210&text=Ol%C3%A1%20Sandro%2C%20"
              title="Whatsapp - Sandro"
            >
              (62) 9 8124-6210 - Sandro
            </a>
          </S.StyledSection>
        </F.FlexGrid>
        <S.StyledText>
          Projeto 
          <a
              href="https://github.com/capelaurbana/site"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
          >Open Source</a>da Capela Urbana - {moment().format('YYYY')}
        </S.StyledText>
      </S.StyledRow>
    </F.Container>
  </S.StyledFooter>
)

export default Footer
