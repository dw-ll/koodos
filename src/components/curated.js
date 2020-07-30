import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Card from './card'


const CuratedContainer = tw.section`flex flex-col mx-auto w-full items-start px-40 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-3xl font-semibold text-white leading-normal`
const CuratedSubHeader = tw.h3`text-3xl font-semibold text-main-accent leading-normal pl-12 ml-3`
const CuratedCardContainer = tw.article`flex justify-between space-x-4 px-12 my-6`;


const dummyCurations = [
    {
        curator: "🥰🤗😴",
        title: "🐝🏡🌳",
        subscribers: "25",
        songs: "30"
   },
    {
        curator: "💅🏻👩🏻‍🎤💓",
        title: "👻✨🦉",
        subscribers: "12",
        songs: "17"
    },
    {
        curator: "👻🌐👾",
        title: "🌎🌊🌧",
        subscribers: "10",
        songs: "5"
    }
]

const renderCards = () => {
    return dummyCurations.map(dummyData => {
        return <Card curatedInfo={dummyData} />
    }
    )
}
const Curated = ({ type }) => (
    <CuratedContainer>
        <CuratedContentHeader>📈 popular {type}</CuratedContentHeader>
        <CuratedCardContainer>
            {renderCards()}
        </CuratedCardContainer>
    </CuratedContainer>

)
export default Curated;


