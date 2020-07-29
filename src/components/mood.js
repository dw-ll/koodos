
import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"


const CuratedContainer = tw.section`flex flex-col mx-auto w-full items-start px-40 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-5xl font-semibold text-white leading-normal`
const CuratedSubHeader = tw.h3`text-3xl font-semibold text-main-accent leading-normal pl-12 ml-3`


const MoodContainer = tw.article`flex mx-8 space-x-5`
const MoodColumn = tw.div`flex`

const MoodRowWrappers = tw.div`flex-col items-start space-y-8`
const MoodRow = tw.div`flex space-x-4`

const MoodColumnCard = styled.div`
${tw`rounded-md shadow-md bg-main-accent`}
width:300px;
height:300px;
`
const SmallMoodRowCard = styled.div`
${tw`rounded-md shadow-md bg-green-800`}
width:225px;
height:120px;
`
const LargeMoodRowCard = styled.div`
${tw`rounded-md shadow-md bg-red-200`}
width:345px;
height:145px;
`



const Mood = () => (
    <CuratedContainer>
        <CuratedContentHeader>👉👈 moods + things</CuratedContentHeader>
        <MoodContainer>
            <MoodColumn>
                <MoodColumnCard></MoodColumnCard>
            </MoodColumn>
            <MoodRowWrappers>
                <MoodRow>
                    <SmallMoodRowCard />
                    <SmallMoodRowCard />
                    <SmallMoodRowCard />
                </MoodRow>
                <MoodRow>
                    <LargeMoodRowCard />
                    <LargeMoodRowCard />
                </MoodRow>
            </MoodRowWrappers>
        </MoodContainer>


    </CuratedContainer>


)
export default Mood;