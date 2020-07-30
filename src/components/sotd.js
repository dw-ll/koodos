import React from "react"
import ReactPlayer from 'react-player'
import Typist from 'react-typist';
import TextLoop from "react-text-loop";
import tw from "twin.macro"


// Styled Containers
const ContentContainer = tw.section`h-full mx-auto items-center bg-main-bg flex flex-col space-y-2`
const SOTDContainer = tw.article`relative rounded-md shadow-lg mx-24 mt-4 h-128 bg-main-fg`
const VOTDContainer = tw.div`px-12 py-3 pt-6 z-20  flex items-center`


// Styled Wrappers
const SOTDHeaderWrapper = tw.span`flex justify-start w-full px-40 py-3`
const SOTDTextWrapper = tw.span`absolute bottom-0 left-0 mb-24 -ml-16 flex flex-col`
const SOTDCurationsWrapper = tw.article`flex justify-center space-x-4`

// Styled Text + Buttons
const SOTDHeader = tw.h1`text-left font-semibold text-white text-4xl tracking-wide border-b-2  border-main-accent`
const SOTDText = tw.h1`transition ease-in duration-700 font-semibold text-white text-5xl z-20`
const SOTDCurText = tw.h1`font-semibold text-main-accent text-5xl z-20 ml-2`
const SOTDSubtext = tw.span`flex justify-between`
const SOTDCurationsText = tw.article`font-semibold text-white text-4xl m-1`
const SOTDCurateButton = tw.button`absolute z-20 bottom-0 right-0 ml-10 -mb-8 px-10 py-3 bg-main-accent font-semibold text-lg text-black`
const SOTDCurateButtonBG = tw.button`absolute z-10 bottom-0 right-0 ml-16 -mb-10 px-10 py-3 bg-black font-semibold text-lg text-black`


const SOTD = () => (
    <ContentContainer>
        <SOTDHeaderWrapper>
            <SOTDHeader><Typist startDelay={1000}>👋🏻  🎧 discover new music + curators through emojis. </Typist></SOTDHeader>
        </SOTDHeaderWrapper>
        <SOTDContainer>
            <VOTDContainer>
                <ReactPlayer width='900px' height='460px' controls={true} url='https://www.youtube.com/watch?v=Tw0zYd0eIlk' />
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
            <TextLoop delay={500} mask={true} fade={false}>
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