import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { Icon, InlineIcon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';
import sharpGroup from '@iconify/icons-ic/sharp-group';
import roundQueueMusic from '@iconify/icons-ic/round-queue-music';



const CuratedCardWrapper = styled.div`
    ${tw`relative z-10 bg-main-fg shadow-md`}
    width:330px;
    height:230px;
    border-radius:25px;
`
const CuratedCard = tw.div`flex flex-col space-y-3 py-2 z-10 w-full h-full`

const CuratedInfoWrapper = tw.section`py-4`

const CuratorInfo = tw.article`flex justify-start px-4 tracking-wide`
const CuratorInfoText = tw.h5`text-white text-2xl font-semibold`
const CuratorInfoSubText = tw.h5`text-sm italic text-white font-semibold`


const CurationInfoRow = tw.article`flex justify-start px-16 py-8 space-x-8`
const PlayCuration = styled.button`
${tw`flex justify-center items-center shadow-lg rounded-full bg-main-accent`}
height:40px;
width: 40px;
`;
const CurationInfo = tw.div`flex flex-col items-start justify-start mb-2`
const CurationTitle = tw.h3`text-3xl text-white tracking-wider`
const CurationSubTitle = tw.h3`text-sm text-gray-800 font-semibold`

const CuratedCardTab = styled.div`
${tw`flex items-center justify-center space-x-2 z-20 bottom-0 -mb-5 bg-main-accent`}
position: absolute;
left:30%;
width: 150px;
height: 58px;
border-radius:25px;
`

const TabInfo = tw.div`flex items-center text-main-fg text-sm font-semibold`

const Card = ({ curatedInfo }) => (
    <CuratedCardWrapper>
        <CuratedCardTab>
            <TabInfo>
                <Icon icon={sharpGroup} />
                {curatedInfo.subscribers}
            </TabInfo>
            <TabInfo>
                <Icon icon={roundQueueMusic} />
                {curatedInfo.songs}
            </TabInfo>
        </CuratedCardTab>
        <CuratedCard>
            <CuratedInfoWrapper>
                <CuratorInfo>
                    <CuratorInfoText>{curatedInfo.curator}</CuratorInfoText>
                </CuratorInfo>
                <CurationInfoRow>
                    <PlayCuration>
                        <Icon icon={playFill} />
                    </PlayCuration>
                    <CurationInfo>
                        <CurationTitle>{curatedInfo.title}</CurationTitle>
                    </CurationInfo>
                </CurationInfoRow>
            </CuratedInfoWrapper>
        </CuratedCard>
    </CuratedCardWrapper>
)
export default Card;