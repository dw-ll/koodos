
import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"


const CuratedContainer = tw.section`flex flex-col mx-auto w-full items-start px-40 py-4 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-3xl font-semibold text-white leading-normal`
const CuratedSubHeader = tw.h3`text-3xl font-semibold text-main-accent leading-normal pl-12 ml-3`


const MoodContainer = tw.article`flex mx-8 py-4 space-x-5`
const MoodColumn = tw.div`flex`

const MoodRowWrappers = tw.div`flex-col items-start space-y-8`
const MoodRow = tw.div`flex space-x-4`

const MoodColumnCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md`}
width:300px;
height:300px;
`
const SmallMoodRowCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md`}
width:225px;
height:120px;
`
const LargeMoodRowCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md`}
width:345px;
height:145px;
`

const MoodTitle = tw.h2`px-2 text-3xl text-white font-semibold`



const Mood = () => (
    <CuratedContainer>
        <CuratedContentHeader>👉👈 moods + vibes</CuratedContentHeader>
        <MoodContainer>
            <MoodColumn>
                <MoodColumnCard style={{ backgroundColor: "#8DB999" }}>
                    <MoodTitle>chill</MoodTitle>
                </MoodColumnCard>
            </MoodColumn>
            <MoodRowWrappers>
                <MoodRow>
                    <SmallMoodRowCard style={{
                        backgroundColor: "#D3BF5D"
                    }}>
                        <MoodTitle>happy</MoodTitle>
                    </SmallMoodRowCard>
                    <SmallMoodRowCard style={{
                        backgroundColor: "#1A535C"
                    }}>
                        <MoodTitle>sad</MoodTitle>
                    </SmallMoodRowCard>
                    <SmallMoodRowCard style={{
                        backgroundColor: "#47EED0"
                    }}>
                        <MoodTitle>etc</MoodTitle>
                    </SmallMoodRowCard>
                </MoodRow>
                <MoodRow>
                    <LargeMoodRowCard style={{
                        backgroundColor: "#C17C74"
                    }}>
                        <MoodTitle>vibes</MoodTitle>
                    </LargeMoodRowCard>
                    <LargeMoodRowCard style={{
                        backgroundColor: "#806D40"
                    }}>
                        <MoodTitle>feels</MoodTitle>
                    </LargeMoodRowCard>
                </MoodRow>
            </MoodRowWrappers>
        </MoodContainer>


    </CuratedContainer>


)
export default Mood;