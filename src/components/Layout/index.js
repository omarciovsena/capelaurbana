import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import Header from "../Header"

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
