import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../styles/theme"

import * as F from "../Flexbox"

import heroBg from "../../images/capela-urbana-reuniao-hero.jpg"

export const HeroContainer = styled(F.Wrapper)`
  background: linear-gradient(to left, rgba(0, 42, 60, 0), #002a3c),
    url(${heroBg}) center/cover;
  height: 640px;
`

export const HeroFlexGrid = styled(F.FlexGrid)`
  height: 100%;
`

export const H2 = styled.h2`
  color: white;
  font-size: 48px;
  line-height: 1.15;
  margin: 0 auto;
  width: 465px;
`

export const H4 = styled.h4`
  color: white;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  margin-top: 10px;
  margin: 0 auto;
  width: 465px;
`

export const CTAContainer = styled.div`
  margin: 0 auto;
  width: 465px;
`

export const CallToAction = styled(Link)`
  background: ${theme.white};
  border-radius: 20px;
  color: ${theme.daintree};
  display: inline-block;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 40px;
  text-decoration: none;
`
