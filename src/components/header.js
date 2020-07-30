import React from "react"
import tw, { styled } from "twin.macro"
import Logo from '../images/koodos_logo.png'
import Avatar from '../images/kody_mint.png'
import { Icon } from '@iconify/react';
import userSolid from '@iconify/icons-clarity/user-solid';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';

const Head = styled.header`${tw`mx-auto bg-main-bg`}`
const Nav = styled.div`${tw`flex items-center justify-between w-full mx-auto px-4 py-1 z-40`}`
const NavImageWrapper = styled.div`${tw`flex justify-start w-1/4 lg:w-48 py-2 px-2 `}`
const NavImage = styled.img`${tw`hidden md:block w-auto h-10`}`
const NavAvatar = styled.img`${tw`md:hidden w-auto h-16`}`
const NavSearch = styled.span`${tw`flex w-1/2 mx-auto  py-2 lg:pl-4 items-start justify-start  focus:shadow-lg focus:outline-none`}`
const SearchInput = styled.input`${tw`w-full px-4 py-2 text-center justify-center rounded-md shadow-md bg-main-fg text-secondary-text transition-colors duration-100 ease-in-out`}`
const NavIcons = styled.div`${tw`flex items-center content-center mx-auto mr-2 `}`

const Header = ({ siteTitle }) => (
  <Head>
    <Nav>
      <NavImageWrapper>
        <NavImage src={Logo} />
        <NavAvatar src={Avatar} />
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
  </Head >
)
export default Header