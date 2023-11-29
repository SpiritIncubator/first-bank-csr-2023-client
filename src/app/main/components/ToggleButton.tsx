'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)<TypographyProps & {isActive?: boolean}>`
  display: inline-block;
  width: 36px;
  height: 36px;
	border-radius: 100px;
	background-color: ${props => props.isActive ? '#958873' : '#E9E3D8'};
	color: ${props => props.isActive ? '#ffffff' : '#B1AAA2'};
	text-align: center;
	line-height: 36px;
	cursor: pointer;
`;

type LangBtnType = {
	key: 'zh' | 'en',
	text: string;
}

const langBtnList: LangBtnType[] = [
	{
		key: 'zh',
		text: '中'
	},
	{
		key: 'en',
		text: 'A'
	},
]

const ToggleButton = () => {
	const [lang, setLang] = useState('zh');

	function renderToggleButton(btnParams: LangBtnType) {
		return <StyledTypography key={btnParams.key} isActive={btnParams.key === lang} onClick={() => setLang(btnParams.key)}>{ btnParams.text}</StyledTypography>
	}

	return (
		<Box
			width={104}
			height={52}
			border="1px solid #E9E3D8"
			borderRadius={70}
			display="flex"
      justifyContent="space-between"
			alignItems="center"
			px={1}
		>
			{langBtnList.map(renderToggleButton)}
		</Box>
	);
};

export default ToggleButton;
