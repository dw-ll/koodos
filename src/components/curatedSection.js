import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Card from './curationCard'
import CuratorCard from './curatorCard';


const CuratedContainer = tw.section`flex relative flex-col mx-auto w-full items-start px-6 md:px-40 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-3xl font-semibold text-white leading-normal`
const CuratedCardContainer = tw.article`flex w-full h-72 md:w-auto justify-between space-x-6 px-2 my-6 overflow-x-scroll`;


const dummyCurations = [
    {
        curator: "🥰🤗😴",
        title: "🐝🏡🌳",
        subscribers: "25",
        songs: "30",
        subscribed: true,
        curationMood: "#84A98C"
    },
    {
        curator: "💅🏻👩🏻‍🎤💓",
        title: "👻✨🦉",
        subscribers: "12",
        songs: "17",
        subscribed: true,
        curationMood: "#40376E"
    },
    {
        curator: "👻🌐👾",
        title: "🌎🌊🌧",
        subscribers: "10",
        songs: "5",
        subscribed: false,
        curationMood: "#354F52"
    }
]

const dummyCurators = [
    {
        curator: "🥰🤗😴",
        score: 33,
        subscribers: 105,
        curatorTheme: "#B56576",
        subscribed:true
    },
    {
        curator: "👻🌐👾",
        score: 33,
        subscribers: 82,
        curatorTheme: "#6D597A",
        subscribed: false

    },
    {
        curator: "💅🏻👩🏻‍🎤💓",
        score: 20,
        subscribers: 55,
        curatorTheme: "#A6B1E1",
        subscribed: false

    }
]

const renderCards = (type) => {
    return type === 'curations'
        ? dummyCurations.map(dummyData => {
            return <Card curatedInfo={dummyData} />
        }) : dummyCurators.map(dummyData => {
            return <CuratorCard curatedInfo={dummyData} />
        })
}

const Curated = ({ type }) => (
    <CuratedContainer>
        <CuratedContentHeader>📈 popular {type}</CuratedContentHeader>
        <CuratedCardContainer>
            {renderCards(type)}
        </CuratedCardContainer>
    </CuratedContainer>
)
export default Curated;


