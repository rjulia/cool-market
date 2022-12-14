/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/navbars/authnavbar'
import Footer from '../components/footers/footer'

const Layout = ({ children }) => (
  <>
    {/* <Navbar transparent /> */}
    <main>{children}</main>
    {/* <Footer /> */}

  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
