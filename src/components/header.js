import React from "react"
import tw, { styled } from "twin.macro"
import Logo from '../images/koodos_logo.png'
import { Icon } from '@iconify/react';
import userSolid from '@iconify/icons-clarity/user-solid';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';

const Head = styled.header`${tw`sticky bg-main-bg`}`
const Nav = styled.div`${tw`flex items-center justify-between w-full mx-auto px-4 py-1`}`
const NavImageWrapper = styled.div`${tw`flex justify-start w-1/3`}`
const NavImage = styled.img`${tw`w-auto h-10`}`
const NavSearch = styled.span`${tw`flex flex-grow justify-start px-2 mx-auto py-2  focus:shadow-lg focus:outline-none`}`
const SearchInput = styled.input`${tw`w-1/2 py-2 flex text-center justify-center rounded-md shadow-md bg-main-fg text-secondary-text transition-colors duration-100 ease-in-out`}`
const NavIcons = styled.div`${tw`flex items-center content-center mr-2 space-x-4`}`

const Header = ({ siteTitle }) => (
  <Head>
    <Nav>
      <NavImageWrapper>
        <NavImage src={Logo} />
      </NavImageWrapper>
      <NavSearch>
        <SearchInput placeholder="search for curations + curators" />
      </NavSearch>
      <NavIcons>
        <a href='/'>
          <Icon height="31" width="31" color="#47EED0" icon={userSolid} />
        </a>
        <a href='/'>
          <Icon height="31" width="31" color="#47EED0" icon={bxSearchAlt} />
        </a>
      </NavIcons>
    </Nav>
  </Head>
)
export default Header