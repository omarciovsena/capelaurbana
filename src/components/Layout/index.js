import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Footer from "../Footer"
import Header from "../Header"

import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
