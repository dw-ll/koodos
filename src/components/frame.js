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

const LayoutFrame = tw.main`mx-auto h-screen bg-main-bg`;

const Frame = ({ children }) => {
    return (
        <>
            <Header />
            <LayoutFrame >
                {children}
            </LayoutFrame>
        </>
    )
}
export default Frame
