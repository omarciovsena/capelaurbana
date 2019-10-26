import React from "react"
import {
  StyledFooter,
  StyledText,
  StyledImage,
  StyledRow,
  StyledSection,
} from "./styles"
import { FlexGrid, Col, Container } from "../Flexbox"
import SocialFacebook from "../../images/social-facebook.svg"
import SocialInstagram from "../../images/social-instagram.svg"

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledRow alignItems="center" justifyContent="space-between">
        <FlexGrid alignItems="center" justifyContent="space-between">
          <a
            href="https://instagram.com/capelaurbana/"
            title="Acesse nosso instagram"
            target="_blank"
          >
            <StyledImage src={SocialInstagram} />
          </a>
          <a
            href="https://facebook.com/capelaurbana/"
            title="Acesse nosso facebook"
            target="_blank"
          >
            <StyledImage src={SocialFacebook} />
          </a>
          <StyledSection
            alignItems="left"
            flexDirection="column"
            justifyContent="center"
          >
            <span>@capelaurbana</span>
            <a
              href="mailto:ola@capelaurbana.org"
              title="Envie um email pra nós"
            >
              ola@capelaurbana.org
            </a>
          </StyledSection>
          <StyledSection
            alignItems="left"
            flexDirection="column"
            justifyContent="center"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5562987678908&text=Ol%C3%A1%20Sandro%2C%20"
              title="Whatsapp - Gito"
            >
              (62) 987 678 908 - Gito
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5562987678908&text=Ol%C3%A1%20Sandro%2C%20"
              title="Whatsapp - Sandro"
            >
              (62) 987 678 908 - Sandro
            </a>
          </StyledSection>
        </FlexGrid>
        <StyledText>
          Todos os direitos reservados à Capela Urbana - 2019 - 2020
        </StyledText>
      </StyledRow>
    </Container>
  </StyledFooter>
)

export default Footer
