'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'

import StyleButton from '@/app/_components/Button/Button';
import ToggleButton from './components/ToggleButton';

const MainPage = () => {
	const router = useRouter();

	function redirectToQuestionsPage() {
		router.push('/main/questions');
	}

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
			justifyContent="50%"
			alignItems="50%">
			<Box flex={1}>image</Box>
			<Box flex={1} display="flex" justifyContent="center">
				<Box width="310px" display="flex" flexDirection="column" alignItems="center">
					<Typography fontSize={32} fontWeight={900}>低碳消費大挑戰</Typography>
					{/* TODO will put image in here */}
					<Typography lineHeight={2} fontSize={16}>挑戰看看，你能不能成功判斷出低碳足跡的商品，累積最少的碳排放呢?</Typography>
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
