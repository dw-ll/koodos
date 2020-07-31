import React from "react"
import tw, { styled } from "twin.macro"
import { Icon } from '@iconify/react';
import sharpGroup from '@iconify/icons-ic/sharp-group';
import bxsTrophy from '@iconify/icons-bx/bxs-trophy';
import Astronaut from '../images/gatsby-astronaut.png';

/* Card Wrappers */
const MobileCuratedCardWrapper = styled.div`
    ${tw`md:hidden relative z-10 bg-main-fg shadow-xl px-8`}
    width:430px;
    height:230px;
    border-radius:25px;
`
const CuratedCardWrapper = styled.div`
    ${tw`hidden md:block relative z-10 bg-main-fg shadow-md`}
    width:300px;
    height:250px;
    border-radius:25px;
`
const CuratedCardBackdrop = styled.div`
    ${tw` w-full absolute left-0 z-10  bg-blue-200`}
    height:110px;
    border-radius:25px 25px 0 0;
`
const MobileCuratedCardBackdrop = styled.div`
    ${tw` w-full absolute left-0 z-10  bg-blue-200`}
    height:90px;
    border-radius:25px 25px 0 0;
`
const CuratedInfoWrapper = tw.section`py-2`
const CuratedCard = tw.div`flex flex-col space-y-3 py-2 z-10 w-full h-full`

/* Curator Avatar */
const CuratorAvatar = styled.img`
${tw`shadow-lg rounded-full z-20`}
max-width: none;
height:85px;
width:85px;
`;

/* Curator Info */
const CuratorTrophy = tw.article`flex justify-start px-0 md:px-4 tracking-wide z-20`
const CuratorTrophyText = tw.h5`flex text-white md:text-xl font-semibold z-20 -ml-6 md:-ml-1`
const CurationInfoRow = tw.article`flex flex-col z-20 justify-center md:justify-start items-center text-center w-full mx-2 md:mx-1 px-4 md:px-12 py-1 md:py-3 space-y-2 md:space-x-8`
const CurationInfo = tw.div`flex w-full flex-col z-20 items-center justify-center md:items-center mb-2`
const CurationTitle = tw.h3`text-xl md:text-2xl z-20 text-white text-center tracking-wider  md:mr-8`


/* Card Tab */
const MobileCuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 px-2 py-1 bg-main-accent`}
position: absolute;
left:28%;
width: 100px;
height: 58px;
border-radius:25px;
`
const CuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 bg-main-accent  cursor-pointer`}
position: absolute;
left:32%;
width: 130px;
height: 58px;
border-radius:25px;
`
const TabInfo = tw.div`flex space-x-1 items-center text-xs md:text-sm font-semibold`

const CuratorCard = ({ curatedInfo }) => (
    <>
        <MobileCuratedCardWrapper>
            <MobileCuratedCardBackdrop style={{ backgroundColor: curatedInfo.curatorTheme }} />
            <MobileCuratedCardTab style={{ backgroundColor: curatedInfo.curatorTheme }}>
                <TabInfo>view profile</TabInfo>
            </MobileCuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorTrophy>
                        <CuratorTrophyText>
                            <TabInfo>
                                <Icon width="20px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="20px" icon={bxsTrophy} />
                                {curatedInfo.score}
                            </TabInfo>
                        </CuratorTrophyText>
                    </CuratorTrophy>
                    <CurationInfoRow>
                        <CuratorAvatar src={Astronaut} />
                        <CurationInfo>
                            <CurationTitle>{curatedInfo.curator}</CurationTitle>
                        </CurationInfo>
                    </CurationInfoRow>
                </CuratedInfoWrapper>
            </CuratedCard>
        </MobileCuratedCardWrapper>
        <CuratedCardWrapper>
            <CuratedCardBackdrop style={{ backgroundColor: curatedInfo.curatorTheme }} />
            <CuratedCardTab style={{ backgroundColor: curatedInfo.curatorTheme }}>
                <TabInfo>view profile</TabInfo>
            </CuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorTrophy>
                        <CuratorTrophyText>
                            <TabInfo>
                                <Icon width="20px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="20px" icon={bxsTrophy} />
                                {curatedInfo.score}
                            </TabInfo>
                        </CuratorTrophyText>
                    </CuratorTrophy>
                    <CurationInfoRow>
                        <CuratorAvatar src={Astronaut} />
                        <CurationInfo>
                            <CurationTitle>{curatedInfo.curator}</CurationTitle>
                        </CurationInfo>
                    </CurationInfoRow>
                </CuratedInfoWrapper>
            </CuratedCard>
        </CuratedCardWrapper>
    </>
)
export default CuratorCard;