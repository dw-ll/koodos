import React from "react"
import tw, { styled } from "twin.macro"
import { Icon } from '@iconify/react';
import sharpGroup from '@iconify/icons-ic/sharp-group';
import bxsTrophy from '@iconify/icons-bx/bxs-trophy';
import Astronaut from '../images/gatsby-astronaut.png';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import userSolid from '@iconify/icons-clarity/user-solid';
import bxsUserCheck from '@iconify/icons-bx/bxs-user-check';




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
    height:105px;
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
const CuratorTrophyText = tw.h5`flex  text-white md:text-xl font-semibold z-20 -ml-6 md:-ml-1`
const CuratorInfoRow = tw.article`flex flex-col z-20 justify-center md:justify-start items-center text-center w-full md:mx-1 px-4 md:px-12 py-1 md:py-3 space-y-2 md:space-x-8`
const CuratorInfo = tw.div`flex w-full flex-col z-20 items-center justify-center md:items-center mb-2`
const CuratorId = tw.h3`text-xl md:text-2xl z-20 text-white text-center tracking-wider  md:mr-8`
const CuratorBio = tw.h3`hidden md:text-sm z-20 text-white text-center tracking-wider  py-1 md:mr-8 overflow-x-hidden`


/* Card Tab */
const MobileCuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 px-2 py-1 bg-main-accent`}
position: absolute;
left:24%;
width: 100px;
height: 58px;
border-radius:25px;
`
const CuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 bg-main-accent  cursor-pointer`}
position: absolute;
left:30%;
width: 130px;
height: 58px;
border-radius:25px;
`
const CuratorStats = tw.div`flex justify-between space-x-1 items-center text-xs md:text-sm font-semibold`
const CuratorTab = styled.div`
${tw`flex justify-center text-main-fg items-center text-xs md:text-sm font-semibold`}
.tab-icon + .tab-icon{
    border-left: solid 1px #20282A;
}
`
const CuratorTabIconWrapper = tw.div`px-3 flex-col text-center justify-center items-center`


const CuratorCard = ({ curatedInfo }) => (
    <>
        <MobileCuratedCardWrapper>
            <MobileCuratedCardBackdrop style={{ backgroundColor: curatedInfo.curatorTheme }} />
            <MobileCuratedCardTab style={{ backgroundColor: curatedInfo.curatorTheme }}>
                <CuratorTab>
                    <CuratorTabIconWrapper className='tab-icon'>
                        <Icon width="20px" icon={curatedInfo.subscribed ? bxsUserCheck : personAddFill} />
                    </CuratorTabIconWrapper>
                    <CuratorTabIconWrapper className='tab-icon'>
                        <Icon width="20px" icon={userSolid} />
                    </CuratorTabIconWrapper>
                </CuratorTab>
            </MobileCuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorTrophy>
                        <CuratorTrophyText>
                            <CuratorStats>
                                <Icon width="20px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="20px" icon={bxsTrophy} />
                                {curatedInfo.score}
                            </CuratorStats>
                        </CuratorTrophyText>
                    </CuratorTrophy>
                    <CuratorInfoRow>
                        <CuratorAvatar src={Astronaut} />
                        <CuratorInfo>
                            <CuratorId>{curatedInfo.curator}</CuratorId>
                            <CuratorBio>An example bio ..</CuratorBio>

                        </CuratorInfo>
                    </CuratorInfoRow>
                </CuratedInfoWrapper>
            </CuratedCard>
        </MobileCuratedCardWrapper>
        <CuratedCardWrapper>
            <CuratedCardBackdrop style={{ backgroundColor: curatedInfo.curatorTheme }} />
            <CuratedCardTab style={{ backgroundColor: curatedInfo.curatorTheme }}>
                <CuratorTab>
                    <CuratorTabIconWrapper className='tab-icon'>
                        <Icon width="25px" icon={curatedInfo.subscribed ? bxsUserCheck : personAddFill} />
                    </CuratorTabIconWrapper>
                    <CuratorTabIconWrapper className='tab-icon'>
                        <Icon width="25px" icon={userSolid} />
                    </CuratorTabIconWrapper>
                </CuratorTab>
            </CuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorTrophy>
                        <CuratorTrophyText>
                            <CuratorStats>
                                <Icon width="20px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="20px" icon={bxsTrophy} />
                                {curatedInfo.score}
                            </CuratorStats>
                        </CuratorTrophyText>
                    </CuratorTrophy>
                    <CuratorInfoRow>
                        <CuratorAvatar src={Astronaut} />
                        <CuratorInfo>
                            <CuratorId>{curatedInfo.curator}</CuratorId>
                            <CuratorBio>An example bio ..</CuratorBio>
                        </CuratorInfo>
                    </CuratorInfoRow>
                </CuratedInfoWrapper>
            </CuratedCard>
        </CuratedCardWrapper>
    </>
)
export default CuratorCard;