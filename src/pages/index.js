import React from "react"

import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Meeting from "../components/Meeting"
import Newsletter from "../components/Newsletter"
import ParallaxSection from "../components/ParallaxSection"
import SEO from "../components/seo"

import { theme } from "../styles/theme"

import Brand from "../images/capela-urbana-logo.svg"
import imgWorldMap from "../images/world-map.svg"
import bgContribute from "../images/bg-contribute.jpg"
import bgSocialLeague from "../images/bg-social-league.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Newsletter />
    <Meeting />
    <ParallaxSection
      bgColor={theme.breakerBay}
      bgImage={bgSocialLeague}
      title="Liga Social"
      image={imgWorldMap}
      imageRight
      descriptions={[
        "Nunc porta erat ut lectus posuere molestie. Vestibulum risusligula, rhoncus eleifend. Nunc porta erat ut lectus posueremolestie. Vestibulum risus ligula, rhoncus eleifend.",
      ]}
    />
    <Meeting />
    <ParallaxSection
      bgColor={theme.daintree2}
      bgImage={bgContribute}
      title="Como Contribuir"
      image={Brand}
      descriptions={[
        "Nunc porta erat ut lectus posuere molestie. Vestibulum risusligula, rhoncus eleifend. Nunc porta erat ut lectus posueremolestie. Vestibulum risus ligula, rhoncus eleifend.",
        "Comunidade Capela Urbana CNPJ: 22.345.234/0001-89 <br /> Banco do Brasil - Agência 3410 <br /> Conta corrente 23423-8",
      ]}
    />
  </Layout>
)

export default IndexPage
