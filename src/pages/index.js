import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import ParallaxSection from "../components/ParallaxSection"

import { theme } from "../styles/theme"

import Brand from "../images/capela-urbana-logo.svg"
import WorldMap from "../images/world-map.svg"
import ContributeImage from "../images/bg-contribute.jpg"
import SocialLeagueImage from "../images/bg-social-league.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Newsletter />
    <ParallaxSection
      bgColor={theme.breakerBay}
      bgImage={SocialLeagueImage}
      title="Liga Social"
      image={WorldMap}
      imageRight
      descriptions={[
        "Nunc porta erat ut lectus posuere molestie. Vestibulum risusligula, rhoncus eleifend. Nunc porta erat ut lectus posueremolestie. Vestibulum risus ligula, rhoncus eleifend.",
      ]}
    />
    <ParallaxSection
      bgColor={theme.daintree2}
      bgImage={ContributeImage}
      title="Como Contribuir"
      image={Brand}
      descriptions={[
        "Nunc porta erat ut lectus posuere molestie. Vestibulum risusligula, rhoncus eleifend. Nunc porta erat ut lectus posueremolestie. Vestibulum risus ligula, rhoncus eleifend.",
        "Comunidade Capela Urbana CNPJ: 22.345.234/0001-89 <br /> Banco do Brasil - Agência 3410 <br /> Conta corrente 23423-8",
      ]}
    />
    <Footer />
  </Layout>
)

export default IndexPage
