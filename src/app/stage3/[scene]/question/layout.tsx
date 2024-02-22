'use client';

import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import FadeIn from '@/app/_components/Transitions/FadeIn';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box maxWidth={2560} maxHeight={1440} overflow="hidden">
			<FadeIn>{children}</FadeIn>
		</Box>
	);
};

export default Layout;
