'use client'

import React from 'react'
import { Button } from '@mui/material';
import Link from 'next/link';

import { NavBarWrapper, NavLinkItem, buttonStyle } from './NavBar.style';
import NavLink from './NavLink';
import { navigationLinksConfig } from './spec';
import { LinkType } from './types';

const customPath = ['/']

const NavBar = () => {
  function extraLink({label, path}: LinkType) {
    return <NavLink href={path} style={buttonStyle} key={path}>{label}</NavLink>
  }

  function renderLink(params: LinkType) {
    if (customPath.includes(params.path)) return extraLink(params);

    return <NavLink href={params.path} key={params.path}>
      <NavLinkItem fontSize={55} fontWeight={700} maxWidth={400} textAlign="center" px={3}>{ params.label }</NavLinkItem> 
    </NavLink>
  }

  return (
    <NavBarWrapper>
      {navigationLinksConfig.map(renderLink)}
    </NavBarWrapper>
  )
}

export default NavBar