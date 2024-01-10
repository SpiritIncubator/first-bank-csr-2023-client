'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'


import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import { NavBarWrapper, NavLinkItem, buttonStyle } from './NavBar.style';
import NavLink from './NavLink';
import { navigationLinksConfig } from './spec';
import { LinkType } from './types';


const customPath = ['/']

type NavBarProps = {
  dialogContent?: () => JSX.Element
}

const NavBar = ({dialogContent: DialogContent}: NavBarProps) => {
  function extraLink({ label, path }: LinkType) {
    return (
      <NavLink href={path} style={buttonStyle} key={path}>
        <Box display="flex" justifyContent="center" alignItems="center">
          {label}
        </Box>
      </NavLink>
    )
  }

  function renderLink(params: LinkType) {
    if (customPath.includes(params.path)) return extraLink(params);

    return (
      <NavLink href={params.path} key={params.path}>
        <NavLinkItem fontSize={55} fontWeight={700} maxWidth={400} textAlign="center" px={3}>{params.label}</NavLinkItem>
      </NavLink>
    )
  }

  return (
    <NavBarWrapper>
      {navigationLinksConfig.map(renderLink)}
      <Box position="absolute" right={100} bottom="0" display="flex" flexDirection="column">
        {DialogContent && <DialogContent />}
        <Image src={LionImage} alt="Lion" width={880} height={1100} />
      </Box>
    </NavBarWrapper>
  )
}

export default NavBar