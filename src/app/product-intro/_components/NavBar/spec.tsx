import { LinkType } from "./types";
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const LazyNavLink = dynamic(() => import('./NavLink'), { ssr: true });

export const navigationLinksConfig: Array<LinkType> = [
	{
		label: '首頁',
		path: '/',
		component: (params: LinkType) => {
			return <LazyNavLink key={params.path} href={params.path}>
				<Typography
					fontSize={60}
					fontWeight={700}
					bgcolor="#B8c318"
					px={6.25}
					py={2.5}
					borderRadius={80}
					color="#ffffff"
					height={124}
					textAlign="center"
				>
					{params.label}
				</Typography>
			</LazyNavLink>
		}
	},
	{
		label: '永續績效連結授信專案',
		path: '/path1',
	},
	{
		label: '永續績效連結授信專案',
		path: '/path2',
	},
	{
		label: '永續績效連結授信專案',
		path: '/path3',
	},
	{
		label: '綠色債券與太陽能基金',
		path: '/path4',
	},
];