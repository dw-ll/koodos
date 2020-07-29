import React from "react"
import ReactPlayer from 'react-player'
import TextLoop from "react-text-loop";
import tw from "twin.macro"


// Styled Containers
const ContentContainer = tw.section`h-full mx-auto items-center bg-main-bg flex flex-col space-y-2`
const SOTDContainer = tw.article`relative mx-24 mt-4 h-128 bg-gray-400`
const VOTDContainer = tw.div`px-12 bg-main-bg z-10 shadow-md`


// Styled Wrappers
const SOTDHeaderWrapper = tw.span`flex justify-start w-full px-40`
const SOTDTextWrapper = tw.span`absolute bottom-0 left-0 mb-12 flex flex-col`
const SOTDCurationsWrapper = tw.article`flex justify-center space-x-4`

// Styled Text
const SOTDHeader = tw.h1`text-left font-semibold text-white text-5xl`
const SOTDText = tw.h1`transition ease-in duration-700 font-semibold text-white text-5xl z-20`
const SOTDCurText = tw.h1`font-semibold text-main-accent text-5xl z-20 ml-2`
const SOTDSubtext = tw.span`flex justify-between`
const SOTDCurationsText = tw.article`font-semibold text-white text-3xl m-1`
const SOTDCurateButton = tw.button`absolute z-20 bottom-0 right-0 ml-10 -mb-8 px-10 py-3 bg-main-accent font-semibold text-lg text-black`
const SOTDCurateButtonBG = tw.button`absolute z-10 bottom-0 right-0 ml-16 -mb-10 px-10 py-3 bg-black font-semibold text-lg text-black`


const SOTD = () => (
    <ContentContainer>
        <SOTDHeaderWrapper>
            <SOTDHeader>🔎 discover</SOTDHeader>
        </SOTDHeaderWrapper>
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
            <SOTDCurateButton>curate this</SOTDCurateButton>
            <SOTDCurateButtonBG>curate this</SOTDCurateButtonBG>
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
)
export default SOTD;