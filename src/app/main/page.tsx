'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import StyleButton from '@/app/_components/Button/Button';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import ToggleButton from './components/ToggleButton/ToggleButton';

const MainPage = () => {
	const router = useRouter();
	const { t } = useTranslation('common');


	function redirectToQuestionsPage() {
		router.push('/main/questions');
	}

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
		>
			<Box flex={1}>
				{/* <Image src="" alt="" /> */}
			</Box>
			<Box flex={1} display="flex" justifyContent="center">
				<Box width="310px" display="flex" flexDirection="column" alignItems="center">
					<Typography fontSize={32} fontWeight={900}></Typography>
					{/* TODO will put image in here */}
					<Typography lineHeight={2} fontSize={16}></Typography>
					<Box mt={5.5}>
						<StyleButton text="start" onClickHandler={redirectToQuestionsPage} />
          </Box>
          <Box mt={7.5}>
          	<ToggleButton />
          </Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainPage;
