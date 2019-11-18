import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../styles/theme"

import * as F from "../Flexbox"

import heroBg from "../../images/capela-urbana-reuniao-hero.jpg"

export const Background = styled.div`
  background: ${theme.daintree};
`

export const HeroWrapper = styled(F.Wrapper)`
  background: linear-gradient(to left, rgba(0, 42, 60, 0), ${theme.daintree}),
    url(${heroBg}) center/cover;
  height: 640px;

  > div {
    height: 100%;
  }
`

export const HeroFlexGrid = styled(F.FlexGrid)`
  height: 100%;
  margin: 0 auto;
`

export const HeroCol = styled(F.Col)`
  @media (max-width: ${theme.mobile}) {
    max-width: 100%;
    width: 100%;
  }
`

export const H2 = styled.h2`
  color: ${theme.white};
  font-size: 48px;
  line-height: 1.15;
  margin: 0 0 8px;
  max-width: 100%;
  width: 465px;

  @media (max-width: ${theme.tablet}) {
    font-size: 40px;
    width: 480px;
  }

  @media (max-width: ${theme.smallMobile}) {
    font-size: 36px;
    width: 320px;
  }
`

export const H4 = styled.h4`
  color: ${theme.white};
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  margin: 10px 0 0;
  max-width: 100%;
  width: 465px;

  @media (max-width: ${theme.tablet}) {
    width: 480px;
  }

  @media (max-width: ${theme.smallMobile}) {
    width: 320px;
  }
`

export const CTAContainer = styled.div`
  margin: 0;
  max-width: 100%;
  width: 465px;

  @media (max-width: ${theme.tablet}) {
    width: 480px;
  }

  @media (max-width: ${theme.smallMobile}) {
    width: 320px;
  }
`

export const CallToAction = styled(Link)`
  background: ${theme.white};
  border-radius: 20px;
  color: ${theme.daintree};
  display: inline-block;
  font-weight: 400;
  margin-top: 20px;
  padding: 10px 40px;
  text-decoration: none;
`
