import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
