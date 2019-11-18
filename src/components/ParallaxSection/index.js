import React from "react"
import PropTypes from "prop-types"
import { Parallax } from "react-parallax"
import * as F from "../Flexbox"
import * as S from "./styles"

const ParallaxSection = ({
  bgColor,
  bgImage,
  ctaLink,
  ctaText,
  descriptions,
  id,
  image,
  imageRight,
  title,
}) => (
  <S.Wrapper id={id} bgColor={bgColor}>
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
            {descriptions.map((description, index) => (
              <S.Text
                key={`${id}-${index}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ))}
            {ctaText && (
              <S.Cta
                href={ctaLink}
                rel="noopener noreferrer"
                target="_blank"
                textColor={bgColor}
                title={ctaText}
              >
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
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  descriptions: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageRight: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default ParallaxSection
