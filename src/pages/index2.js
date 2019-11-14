import React from "react"

import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Meeting from "../components/Meeting"
import Newsletter from "../components/Newsletter"
import ParallaxSection from "../components/ParallaxSection"
import Podcast from "../components/Podcast"
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
      ctaLink="https://doe.capelaurbana.org"
      ctaText="Fale conosco"
      descriptions={[
        "É uma rede de Projetos Sociais que dá suporte a ações relevantes no Brasil e no Mundo. Entendemos que podemos compartilhar a nossa experiência e acompanhar projetos sociais desde a sua concepção até sua execução.",
      ]}
    />
    <Podcast />
    <ParallaxSection
      bgColor={theme.daintree2}
      bgImage={bgContribute}
      title="Como Contribuir"
      image={Brand}
      ctaLink="https://doe.capelaurbana.org"
      ctaText="Contribua"
      descriptions={[
        "Priorizamos o cuidado de gente, em sua totalidade, através dos ajuntamentos, da comunhão e do serviço. Por causa disso temos o nosso encontro comunitário semanal, nossos encontros de comum união e os projetos sociais em que temos colocado em prática, no serviço aos pequeninos, o que temos discernido do Evangelho.",
      ]}
    />
  </Layout>
)

export default IndexPage
