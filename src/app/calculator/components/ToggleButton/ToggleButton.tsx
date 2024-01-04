'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { StyledTypography } from './ToggleButton.style';
import type { LangBtnType } from './types';
import { languageButtons } from './spec'
import useFirstBankTranslation from '@/app/_locales/hooks';

const ToggleButton = () => {
	const { setLang, lang } = useFirstBankTranslation();

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
			{languageButtons.map(renderToggleButton)}
		</Box>
	);
};

export default ToggleButton;
