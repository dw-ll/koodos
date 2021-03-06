/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Header from "./header"

const LayoutFrame = tw.main`mx-auto bg-blue-100`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutFrame >
        {children}
      </LayoutFrame>
    </>
  )
}
export default Layout
