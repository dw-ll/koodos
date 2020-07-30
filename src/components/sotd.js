import React from "react"
import ReactPlayer from 'react-player'
import Typist from 'react-typist';
import TextLoop from "react-text-loop";
import tw, { styled } from "twin.macro"


// Styled Containers
const ContentContainer = tw.section`h-full mx-auto items-center bg-main-bg flex flex-col space-y-2`
const SOTDContainer = styled.article`
${tw`relative md:hidden bg-main-fg rounded-lg shadow-md`}
width:345px;
height:415px;
`
const LargeSOTDContainer = tw.article`hidden md:block relative rounded-md shadow-lg mx-64 md:mx-24 mt-4 h-128 bg-main-fg`
const VOTDContainer = tw.div`px-8 pt-16 flex items-center`
const LargeVOTDContainer = tw.div`px-8 py-3 pt-6 z-20 flex items-center`



// Styled Wrappers
const SOTDHeaderWrapper = tw.span`absolute top-0 left-0 px-4 py-2 `
const LargeSOTDHeaderWrapper = tw.span`flex justify-center  md:justify-start w-full mx-16 px-12 md:mx-0 md:px-40 py-3`
const SOTDTextWrapper = tw.span`absolute bottom-0 left-0 mb-6 md:mb-24 ml-4 md:-ml-16 flex flex-col`
const SOTDCurationsWrapper = tw.article`hidden md:flex justify-center space-x-4 py-3`

// Styled Text + Buttons
const LargeSOTDHeader = tw.h1`text-center md:text-left font-semibold text-white text-xl md:text-4xl tracking-wide border-b-2 border-main-accent`
const SOTDText = tw.h1`transition ease-in duration-700 font-semibold text-white text-3xl md:text-5xl z-20`
const SOTDCurText = tw.h1`font-semibold text-main-accent text-3xl md:text-5xl z-20 ml-2 underline`
const SOTDSubtext = tw.span`flex justify-between`

const SOTDCurationsText = tw.article`font-semibold text-white text-2xl md:text-4xl m-1`
const SOTDCurateButton = styled.button`
${tw`absolute bottom-0 right-0 ml-8 -mb-6  py-3 rounded-full shadow-lg bg-main-accent text-lg`}
height:65px;
width:65px;
`
const LargeSOTDCurateButton = tw.button`absolute z-20 bottom-0 right-0 ml-10 -mb-8 px-10 py-3 bg-main-accent font-semibold text-lg text-black`
const LargeSOTDCurateButtonBG = tw.button`absolute z-10 bottom-0 right-0 ml-16 -mb-10 px-10 py-3 bg-black font-semibold text-lg text-black`


const SOTD = () => (
    <ContentContainer>
        <LargeSOTDHeaderWrapper>
            <LargeSOTDHeader><Typist startDelay={1000}>👋🏻  🎧 discover new music + curators through emojis. </Typist></LargeSOTDHeader>
        </LargeSOTDHeaderWrapper>
        <SOTDContainer>
            <SOTDHeaderWrapper>
                <SOTDText>song of the day</SOTDText>
            </SOTDHeaderWrapper>
            <VOTDContainer>
                <ReactPlayer width='350px' height='230px' controls={true} url='https://www.youtube.com/watch?v=Tw0zYd0eIlk' />
            </VOTDContainer>
            <SOTDTextWrapper>
                <SOTDText>
                    phoebe bridgers
                </SOTDText>
                <SOTDSubtext>
                    <SOTDText>kyoto</SOTDText>
                    <SOTDCurText>12 curations</SOTDCurText>
                </SOTDSubtext>
            </SOTDTextWrapper>
            <SOTDCurateButton>🎧</SOTDCurateButton>
        </SOTDContainer>
        <LargeSOTDContainer>
            <LargeVOTDContainer>
                <ReactPlayer width='900px' height='460px' controls={true} url='https://www.youtube.com/watch?v=Tw0zYd0eIlk' />
            </LargeVOTDContainer>
            <SOTDTextWrapper>
                <SOTDText>song of the day</SOTDText>
                <SOTDText>phoebe bridgers</SOTDText>
                <SOTDSubtext>
                    <SOTDText>kyoto</SOTDText>
                    <SOTDCurText>12 curations</SOTDCurText>
                </SOTDSubtext>
            </SOTDTextWrapper>
            <LargeSOTDCurateButton>curate this</LargeSOTDCurateButton>
            <LargeSOTDCurateButtonBG>curate this</LargeSOTDCurateButtonBG>
        </LargeSOTDContainer>
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