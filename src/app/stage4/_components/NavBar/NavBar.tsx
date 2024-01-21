'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'

import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import { NavBarWrapper, NavLinkItem, buttonStyle } from './NavBar.style';
import NavLink from './NavLink';
import { useSearchParams } from 'next/navigation';
import { navigationLinksConfig } from './spec';
import { LinkType } from './types';
import HomeImageButton from './assets/stage4_nav_home.svg'
import HomeImageActiveButton from './assets/stage4_nav_home_active.svg'
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import ZoomBounce from '@/app/_components/Transitions/ZoomBounce';
import FadeInVertical from '@/app/_components/Transitions/FadeInVertical';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import useTriggerDialogAnimation from '../../hooks/useTriggerDialogAnimation';


const customPath = ['/stage4']

type NavBarProps = {
  dialogContent?: () => JSX.Element
}

const NavBar = ({ dialogContent: DialogContent }: NavBarProps) => {
  const searchParams = useSearchParams();
  const disableDialogAnimation = searchParams.get('disableDialogAnimation');


  const { triggerAnimation } = useTriggerDialogAnimation({
    disabled: Boolean(disableDialogAnimation),
    delay: 100,
  })

  function getHomePageButton({ label, path }: LinkType) {
    return (
      <NavLink href={path} key={path}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <ImageButton
            width="229px"
            height="224px"
            src={HomeImageButton}
            activeImageSrc={HomeImageActiveButton}
          />
        </Box>
      </NavLink>
    )
  }

  function renderLink(params: LinkType) {
    if (customPath.includes(params.path)) return getHomePageButton(params);

    return (
      <NavLink href={params.path} key={params.path}>
        <NavLinkItem fontSize={55} fontWeight={700} maxWidth={400} textAlign="center" px={3}>{params.label}</NavLinkItem>
      </NavLink>
    )
  }

  return (
    <Box position="fixed" bottom="0" left="0" width="100%">

      <FadeInVertical direction="up" width="100%">
        <NavBarWrapper>
          {navigationLinksConfig.map(renderLink)}
        </NavBarWrapper>
      </FadeInVertical>
      <FadeIn delay={0.5} >
        <Box position="absolute" right={100} bottom="0" display="flex" flexDirection="column">
          {DialogContent &&
            (
              disableDialogAnimation ? <DialogContent /> :
                <ZoomBounce trigger={triggerAnimation}>
                  <DialogContent />
                </ZoomBounce>
            )
          }
          <Image src={LionImage} alt="Lion" width={880} height={1100} />
        </Box>
      </FadeIn>
    </Box>
  )
}

export default NavBar