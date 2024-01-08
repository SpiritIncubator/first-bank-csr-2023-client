'use client';

import React, { useRef, useEffect, MutableRefObject } from 'react';
import { Box } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

import { StyledTypography } from './I18nButton.style';
import type { LangBtnType } from './types';
import { languageButtons } from './spec'
import useFirstBankTranslation from '@/app/_locales/hooks';

type ToggleButtonProps = {
  width?: number;
  height?: number;
  buttonOptions?: TypographyProps
}

const ToggleButton = ({width = 104, height = 52, buttonOptions}: ToggleButtonProps) => {
  const { setLang, lang } = useFirstBankTranslation();
  const defaultConfigRef = useRef<TypographyProps>({
    width: 36,
    height: 36,
    fontSize: 16,
    lineHeight: 36,
  });

  useEffect(() => {
    defaultConfigRef.current = {
      ...defaultConfigRef.current,
      ...buttonOptions,
    }
  });

  function renderToggleButton(btnParams: LangBtnType) {
    return <StyledTypography
      key={btnParams.key}
      isActive={btnParams.key === lang}
      onClick={() => setLang(btnParams.key)}
      {...defaultConfigRef.current}
    >
      {btnParams.text}
    </StyledTypography>
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