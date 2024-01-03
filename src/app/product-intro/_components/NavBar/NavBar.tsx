import React from 'react'
import { Button } from '@mui/material';
import Link from 'next/link';

import { NavBarWrapper, NavLinkItem } from './NavBar.style';
import NavLink from './NavLink';
import { navigationLinksConfig } from './spec';
import { LinkType } from './types';

const NavBar = () => {
  function renderLink(params: LinkType) {
    if (params.component) return params.component(params);

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