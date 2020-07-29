import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"


const CuratedContainer = tw.section`flex flex-col mx-auto w-full items-start px-40 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-5xl font-semibold text-white leading-normal`
const CuratedSubHeader = tw.h3`text-3xl font-semibold text-main-accent leading-normal pl-12 ml-3`

const CuratedCardContainer = tw.article`flex overflow-x-scroll my-6`;

const CuratedCard = tw.div``



const Curated = () => (

    <CuratedContainer>
        <CuratedContentHeader>📈 popular curations</CuratedContentHeader>
        <CuratedSubHeader>these curations are 🔥</CuratedSubHeader>

    </CuratedContainer>
    
)
export default Curated;


