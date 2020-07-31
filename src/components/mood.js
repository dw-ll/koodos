
import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"


/* Containers & Wrappers */
const CuratedContainer = tw.section`flex flex-col mx-auto px-6 md:px-40 md:py-4 mt-16 md:mt-0 w-full items-start  bg-main-bg`
const MoodContainer = tw.article`hidden md:flex mx-8 py-4 space-x-5`
const MobileContainer = tw.article`md:hidden grid grid-cols-2 grid-rows-2 py-3`
const MoodRowWrappers = tw.div`flex-col items-start space-y-8`
const MoodRow = tw.div`flex space-x-4`
const MoodColumn = tw.div`flex`

/* Mood Cards 💅 */
const MobileCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md mr-1 mb-2`}
width:155px;
height:80px;`
const MoodColumnCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md opacity-75 hover:opacity-100 cursor-pointer`}
width:300px;
height:300px;
`
const SmallMoodRowCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md opacity-75 hover:opacity-100 cursor-pointer`}
width:225px;
height:120px;
`
const LargeMoodRowCard = styled.div`
${tw`flex flex-col items-start justify-end rounded-md shadow-md opacity-75 hover:opacity-100 cursor-pointer`}
width:345px;
height:145px;
`

/* Text*/
const CuratedContentHeader = tw.h1`text-3xl font-semibold text-white leading-normal`
const MoodTitle = tw.h2`px-2 text-2xl md:text-3xl text-white font-semibold`

/* Dummy Data & Renderer */
const dummyMoods = [
    {
        color: "#8DB999",
        mood: "chill"
    },
    {
        color: "#D3BF5D",
        mood: "happy"
    },
    {
        color: "#1A535C",
        mood: "sad"
    },
    {
        color: "#C17C74",
        mood: "vibes"
    },
    {
        color: "#806D40",
        mood: "feels"
    },
    {
        color: "#47EED0",
        mood: "etc"
    },
]

const renderMoods = () => {
   
        return dummyMoods.map(mood => {
            return <MobileCard style={{ backgroundColor: mood.color }}>
                <MoodTitle>{mood.mood}</MoodTitle>
            </MobileCard>
        })
       
}


const Mood = () => (
    <CuratedContainer>
        <CuratedContentHeader>👉👈 moods + vibes</CuratedContentHeader>
        <MobileContainer>
            {renderMoods()}
        </MobileContainer>
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