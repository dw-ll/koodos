import React from "react"
import tw, { styled } from "twin.macro"
import { Icon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';
import sharpGroup from '@iconify/icons-ic/sharp-group';
import roundQueueMusic from '@iconify/icons-ic/round-queue-music';
import bxsUserCheck from '@iconify/icons-bx/bxs-user-check';
import personAddFill from '@iconify/icons-eva/person-add-fill';




/* Containers & Wrappers*/
const MobileCuratedCardWrapper = styled.div`
    ${tw`md:hidden relative z-0 bg-main-fg shadow-md px-12 mx-2`}
    width:430px;
    height:230px;
    border-radius:25px;
`
const MobileCuratedCardBackdrop = styled.div`
    ${tw`md:hidden w-full absolute left-0 z-10  bg-blue-200`}
    height:180px;
    border-radius:25px 25px 0 0;
`
const CuratedCardBackdrop = styled.div`
    ${tw`w-full absolute left-0 z-10  bg-blue-200`}
    height:180px;
    border-radius:25px 25px 0 0;
`
const CuratedCardWrapper = styled.div`
    ${tw`hidden md:block relative z-10 bg-main-fg shadow-md`}
    width:330px;
    height:230px;
    border-radius:25px;
`
const CuratedInfoWrapper = tw.section`py-3 mx-auto`
const CuratedCard = tw.div`flex flex-col items-start space-y-3 py-2 z-10 w-full mx-4 h-full`

/* Card Content*/
const CuratorInfo = tw.article`flex justify-start px-0 md:px-4 tracking-wide z-20`
const CuratorInfoText = tw.h5`text-white md:text-2xl font-semibold z-20 -ml-12 md:-ml-5`
const CurationInfoRow = tw.article`justify-center items-center text-center w-full mr-2 md:px-16 py-8 md:py-2  md:space-x-8`
const CurationInfo = tw.div`flex w-full flex-col items-center justify-center pt-2 mr-12 md:mr-8 pr-6 md:pr-3 my-4 z-20`
const CurationTitle = tw.h3`md:text-xl text-white text-left md:tracking-wider z-20 font-semibold border-b-2 border-white`
const CuratorTitle = tw.h3`md:text-xl text-white text-left md:tracking-wider z-20 font-semibold`

/* Card Tab */
const MobileCuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 bg-main-accent`}
position: absolute;
left:32%;
width: 100px;
height: 58px;
border-radius:25px;
`
const CuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 bg-main-accent cursor-pointer`}
position: absolute;
left:35%;
width: 100px;
height: 58px;
border-radius:25px;
`
const TabInfo = tw.div`flex items-center text-xs md:text-sm font-semibold`

const CurationTab = styled.div`
${tw`flex justify-center text-main-fg items-center text-xs md:text-sm font-semibold`}
.tab-icon + .tab-icon{
    border-left: solid 1px #20282A;
}
`
const CurationTabIconWrapper = tw.div`px-3 flex-col text-center justify-center items-center`

const Card = ({ curatedInfo }) => (
    <>
        <MobileCuratedCardWrapper >
            <MobileCuratedCardBackdrop style={{ backgroundColor: curatedInfo.curationMood }} />
            <MobileCuratedCardTab style={{ backgroundColor: curatedInfo.curationMood }}>
                <CurationTab>
                    <CurationTabIconWrapper className='tab-icon'>
                        <Icon width="20px" icon={curatedInfo.subscribed ? bxsUserCheck : personAddFill} />
                    </CurationTabIconWrapper>
                    <CurationTabIconWrapper className='tab-icon'>
                        <Icon width="20" icon={playFill} />
                    </CurationTabIconWrapper>
                </CurationTab>
            </MobileCuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorInfo>
                        <CuratorInfoText>
                            <TabInfo>
                                <Icon width="20px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="20px" icon={roundQueueMusic} />
                                {curatedInfo.songs}
                            </TabInfo>
                        </CuratorInfoText>
                    </CuratorInfo>
                    <CurationInfo>
                        <CurationTitle>curation {curatedInfo.title}</CurationTitle>
                        <CuratorTitle>curator {curatedInfo.curator}</CuratorTitle>
                    </CurationInfo>
                </CuratedInfoWrapper>
            </CuratedCard>
        </MobileCuratedCardWrapper>

        <CuratedCardWrapper>
            <CuratedCardBackdrop style={{ backgroundColor: curatedInfo.curationMood }} />
            <CuratedCardTab style={{ backgroundColor: curatedInfo.curationMood }}>
                <CurationTab>
                    <CurationTabIconWrapper className='tab-icon'>
                        <Icon width="20px" icon={curatedInfo.subscribed ? bxsUserCheck : personAddFill} />
                    </CurationTabIconWrapper>
                    <CurationTabIconWrapper className='tab-icon'>
                        <Icon width="20" icon={playFill} />
                    </CurationTabIconWrapper>
                </CurationTab>
            </CuratedCardTab>
            <CuratedCard>
                <CuratedInfoWrapper>
                    <CuratorInfo>
                        <CuratorInfoText>
                            <TabInfo>
                                <Icon width="25px" icon={sharpGroup} />
                                {curatedInfo.subscribers}
                                <Icon width="25px" icon={roundQueueMusic} />
                                {curatedInfo.songs}
                            </TabInfo>
                        </CuratorInfoText>
                    </CuratorInfo>
                    <CurationInfoRow>
                        <CurationInfo>
                            <CurationTitle>curation {curatedInfo.title}</CurationTitle>
                            <CuratorTitle>curator {curatedInfo.curator}</CuratorTitle>
                        </CurationInfo>
                    </CurationInfoRow>
                </CuratedInfoWrapper>
            </CuratedCard>
        </CuratedCardWrapper>
    </>
)
export default Card;