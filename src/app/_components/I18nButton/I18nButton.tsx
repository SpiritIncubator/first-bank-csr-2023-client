'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { StyledTypography } from './I18nButton.style';
import type { LangBtnType } from './types';
import { languageButtons } from './spec'
// import useFirstBankTranslation from '@/app/_locales/hooks';

type ToggleButtonProps = {
  width?: number;
  height?: number;
  buttonOptions: {
    width: number;
    height: number;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
  }
}

const ToggleButton = ({width = 104, height = 52, buttonOptions}: ToggleButtonProps) => {
  // const { setLang, lang } = useFirstBankTranslation();

  function renderToggleButton(btnParams: LangBtnType) {
    return <StyledTypography key={btnParams.key} onClick={() => ({})} {...buttonOptions}>{btnParams.text}</StyledTypography>
    // return <StyledTypography key={btnParams.key} isActive={btnParams.key === lang} onClick={() => setLang(btnParams.key)}>{btnParams.text}</StyledTypography>
  }

  return (
    <Box
      width={width}
      height={height}
      border="1px solid #E9E3D8"
      paddingX={2.5}
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