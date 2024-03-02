'use client';

import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import { useRouter, usePathname } from 'next/navigation';
import { NavBarWrapper, NavLinkItem } from './NavBar.style';
import NavLink from './NavLink';
import { useSearchParams } from 'next/navigation';
import { navigationLinksConfigEN, navigationLinksConfigZH } from './spec';
import { LinkType } from './types';
import HomeImageButtonZH from './assets/stage4_nav_home_zh.svg';
import HomeImageButtonEN from './assets/stage4_nav_home_en.svg';
import HomeImageActiveZHButton from './assets/stage4_nav_home_zh_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import ZoomBounce from '@/app/_components/Transitions/ZoomBounce';
import FadeInVertical from '@/app/_components/Transitions/FadeInVertical';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import useTriggerDialogAnimation from '../../hooks/useTriggerDialogAnimation';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import { LANGUAGE_TYPE } from '@/types';

const customPath = ['/stage4'];

type NavBarProps = {
	dialogContent?: () => JSX.Element;
};

const NavBar = ({ dialogContent: DialogContent }: NavBarProps) => {
	const searchParams = useSearchParams();
	const { i18n } = useTranslation();
	const pagePath = usePathname();
	const isEN = i18n.language === LANGUAGE_TYPE.EN;
	const disableDialogAnimation = searchParams.get('disableDialogAnimation');

	const navigationLinksConfig = isEN ? navigationLinksConfigEN : navigationLinksConfigZH;

	const { triggerAnimation } = useTriggerDialogAnimation({
		disabled: Boolean(disableDialogAnimation),
		delay: 100,
	});

	function getHomePageButton({ label, path }: LinkType) {
		return (
			<NavLink href={path} key={path}>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ImageButton
						width="229px"
						height="224px"
						src={isEN ? HomeImageButtonEN : HomeImageButtonZH}
						activeImageSrc={isEN ? HomeImageButtonEN : HomeImageActiveZHButton}
					/>
				</Box>
			</NavLink>
		);
	}

	function renderLink(params: LinkType) {
		if (customPath.includes(params.path)) return getHomePageButton(params);
		if (!params.buttonImage || !params.buttonImageActive) return '';
		console.log('params.path :', params.path);
		console.log('pagePath :', pagePath);
		console.log('pagePath.includes(params.path)  :', pagePath.includes(params.path));
		return (
			<NavLink href={params.path} key={params.path}>
				<NavLinkItem maxWidth={400} textAlign="center" px={3}>
					<ImageButton
						width="400px"
						height="160px"
						src={params.path.includes(pagePath) ? params.buttonImageActive : params.buttonImage}
						activeImageSrc={params.buttonImageActive}
					/>
				</NavLinkItem>
			</NavLink>
		);
	}

	return (
		<Box position="fixed" bottom="0" left="0" width="100%">
			<FadeInVertical direction="up" width="100%">
				<NavBarWrapper>{navigationLinksConfig.map(renderLink)}</NavBarWrapper>
			</FadeInVertical>
			<FadeIn delay={0.5}>
				<Box position="absolute" right={100} bottom="0" display="flex" flexDirection="column">
					{DialogContent &&
						(disableDialogAnimation ? (
							<DialogContent />
						) : (
							<ZoomBounce trigger={triggerAnimation}>
								<DialogContent />
							</ZoomBounce>
						))}
					<Image src={LionImage} alt="Lion" width={880} height={1100} />
				</Box>
			</FadeIn>
		</Box>
	);
};

export default NavBar;
