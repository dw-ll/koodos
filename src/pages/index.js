import React from "react"
import Curated from '../components/curatedSection'
import Frame from "../components/frame"
import Mood from "../components/mood"
import SEO from "../components/seo"
import SOTD from "../components/sotd"

const IndexPage = () => (
  <Frame>
    <SEO title="Discover" />
    <SOTD />
    <Mood/>
    <Curated type={'curations'} />
    <Curated type={'curators'}/>

  </Frame>
)

export default IndexPage
