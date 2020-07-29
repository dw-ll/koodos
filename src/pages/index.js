import React from "react"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'
import TextLoop from "react-text-loop";
import tw, { styled } from "twin.macro"

import Curated from '../components/curated'
import Frame from "../components/frame"
import Image from "../components/image"
import Mood from "../components/mood"
import SEO from "../components/seo"
import SOTD from "../components/sotd"


const Card = styled.article`
  ${tw`flex flex-col rounded-lg shadow-lg bg-main-fg`}
  height: 320px;
  width: 270px;
  `
const CardInfo = tw.div`flex-grow w-full bg-main-ffg`

const IndexPage = () => (
  <Frame>
    <SEO title="Discover" />
    <SOTD />
    <Mood/>
    <Curated />

  </Frame>
)

export default IndexPage
