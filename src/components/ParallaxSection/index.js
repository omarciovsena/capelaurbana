import React from "react"
import PropTypes from "prop-types"
import { Parallax } from "react-parallax"
import * as F from "../Flexbox"
import * as S from "./styles"

const ParallaxSection = ({
  bgColor,
  bgImage,
  ctaText,
  ctaLink,
  descriptions,
  image,
  imageRight,
  title,
}) => (
  <S.Wrapper bgColor={bgColor}>
    <Parallax blur={0} bgImage={bgImage} strength={600}>
      <F.Container>
        <S.Row
          alignItems="center"
          justifyContent="space-between"
          flexDirection={imageRight ? "row-reverse" : "row"}
        >
          <F.FlexGrid alignItems="center" justifyContent="center">
            <S.Image src={image} alt="Capela Urbana" />
          </F.FlexGrid>
          <S.TextSection align={imageRight ? "left" : "right"}>
            <S.Title>{title}</S.Title>
            {descriptions.map(description => (
              <S.Text dangerouslySetInnerHTML={{ __html: description }} />
            ))}
            {ctaText && (
              <S.Cta href={ctaLink} title={ctaText} textColor={bgColor}>
                {ctaText}
              </S.Cta>
            )}
          </S.TextSection>
        </S.Row>
      </F.Container>
    </Parallax>
  </S.Wrapper>
)

ParallaxSection.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  imageRight: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
}

export default ParallaxSection
