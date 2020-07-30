import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"


const CuratedContainer = tw.section`flex flex-col mx-auto w-full items-start px-40 bg-main-bg content-start`
const CuratedContentHeader = tw.h1`text-5xl font-semibold text-white leading-normal`
const CuratedSubHeader = tw.h3`text-3xl font-semibold text-main-accent leading-normal pl-12 ml-3`

const CuratedCardContainer = tw.article`flex justify-between space-x-4 px-12 my-6`;

const CuratedCardWrapper = styled.div`
    ${tw`relative z-10 bg-main-fg`}
    width:330px;
    height:230px;
    border-radius:25px;
`
const CuratedCard = tw.div`py-2 z-10 w-full h-full`
const CuratedCardTab = styled.div`
${tw`z-20 bottom-0 -mb-5 bg-main-accent`}
position: absolute;
left:23%;
width: 190px;
height: 58px;
border-radius:25px;
`



const Curated = () => (

    <CuratedContainer>
        <CuratedContentHeader>📈 popular curations</CuratedContentHeader>
        <CuratedSubHeader>these curations are 🔥</CuratedSubHeader>
        <CuratedCardContainer>
            <CuratedCardWrapper>
                <CuratedCardTab />
                <CuratedCard />
            </CuratedCardWrapper>
            <CuratedCardWrapper>
                <CuratedCardTab />
                <CuratedCard />
            </CuratedCardWrapper>
            <CuratedCardWrapper>
                <CuratedCardTab />
                <CuratedCard />
            </CuratedCardWrapper>
           
        </CuratedCardContainer>

    </CuratedContainer>

)
export default Curated;


