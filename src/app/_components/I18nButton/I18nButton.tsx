'use client';

import React, { useState, useEffect } from 'react';
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
  const [buttonConfig, setButtonConfig] = useState<TypographyProps>({
    width: 36,
    height: 36,
    fontSize: 16,
    lineHeight: 36,
  });

  useEffect(() => {
    setButtonConfig(config => ({
      ...config,
      ...buttonOptions
    }))
  }, [buttonOptions, setButtonConfig]);

  function renderToggleButton(btnParams: LangBtnType) {
    return <StyledTypography
      key={btnParams.key}
      isActive={btnParams.key === lang}
      onClick={() => setLang(btnParams.key)}
      {...buttonConfig}
    >
      {btnParams.text}
    </StyledTypography>
  }

  return (
    <Box
      width={width}
      height={height}
      border="2px solid #E9E3D8"
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