import React from "react"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'
import TextLoop from "react-text-loop";
import tw, { styled } from "twin.macro"


import Frame from "../components/frame"
import Image from "../components/image"
import SEO from "../components/seo"



const ContentContainer = tw.section`h-full mx-auto items-center bg-main-bg flex flex-col space-y-2`

const SOTDContainer = tw.article`relative mx-24 h-128 bg-gray-400`
const VOTDContainer = tw.div`px-12 bg-main-bg z-10 shadow-md`

const SOTDText = tw.h1`transition ease-in duration-700 font-semibold text-white text-5xl z-20`
const SOTDCurText = tw.h1`font-semibold text-main-accent text-5xl z-20 ml-2`

const SOTDTextWrapper = tw.span`absolute bottom-0 left-0 mb-12 flex flex-col`
const SOTDSubtext = tw.span`flex justify-between`

const SOTDCurationsWrapper = tw.article`flex justify-center space-x-4`
const SOTDCurationsText = tw.article`font-semibold text-white text-3xl m-1`






const Card = styled.article`
  ${tw`flex flex-col rounded-lg shadow-lg bg-main-fg`}
  height: 320px;
  width: 270px;
  `
const CardInfo = tw.div`flex-grow w-full bg-main-ffg`

const IndexPage = () => (
  <Frame>
    <SEO title="Discover" />
    <ContentContainer>
      <SOTDContainer>
        <VOTDContainer>
          <ReactPlayer width='1000px' height='520px' controls={true} url='https://www.youtube.com/watch?v=Tw0zYd0eIlk' />
        </VOTDContainer>
        <SOTDTextWrapper>
          <SOTDText>song of the day</SOTDText>
          <SOTDText>phoebe bridgers</SOTDText>
          <SOTDSubtext>
            <SOTDText>kyoto</SOTDText>
            <SOTDCurText>12 curations</SOTDCurText>
          </SOTDSubtext>
        </SOTDTextWrapper>
      </SOTDContainer>
      <SOTDCurationsWrapper>
        <TextLoop mask={true} fade={false}>
          <SOTDCurationsText>🥺👉👈</SOTDCurationsText>
          <SOTDCurationsText>🌐👾👻</SOTDCurationsText>
          <SOTDCurationsText>🥰🤗😇</SOTDCurationsText>
        </TextLoop>
        <SOTDCurationsText>said</SOTDCurationsText>
        <TextLoop delay={500} mask={true} fade={false}>
          <SOTDCurationsText>🚝🏔👻</SOTDCurationsText>
          <SOTDCurationsText>🚀🥺❣️</SOTDCurationsText>
          <SOTDCurationsText>👩‍🎤🚝🎸</SOTDCurationsText>
        </TextLoop>
      </SOTDCurationsWrapper>


    </ContentContainer>
  </Frame>
)

export default IndexPage
