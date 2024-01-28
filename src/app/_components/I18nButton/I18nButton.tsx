'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

import useMount from '@/app/hooks/useMount';
import { StyledTypography } from './I18nButton.style';
import type { LangBtnType } from './types';
import { languageButtons } from './spec'
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

type ToggleButtonProps = {
  size: 'small' | 'large';
  extraStyle?: ButtonOptionType;
}

type ButtonOptionType = {
  buttonOption: TypographyProps;
  groupOption: TypographyProps;
}

function getButtonOptions(size: 'small' | 'large'): ButtonOptionType {
  switch (size) {
    case 'small':
      return {
        buttonOption: {
          width: 36,
          height: 36,
          fontSize: 16,
          lineHeight: 36,
        },
        groupOption: {
          width: 104,
          height: 52,
          padding: 1
        }
      }
    case 'large':
      return {
        buttonOption: {
          width: 100,
          height: 100,
          fontSize: 48,
          lineHeight: 100,
        },
        groupOption: {
          width: 270,
          height: 140,
          padding: 2.5
        }
      }
  }
}

const ToggleButton = ({ size = 'small', extraStyle }: ToggleButtonProps) => {
  const { setLang, lang } = useFirstBankTranslation();
  const [buttonConfig, setButtonConfig] = useState<ButtonOptionType>(() => getButtonOptions(size));
  const { isMounted } = useMount();

  useEffect(() => {
    setButtonConfig(config => ({
      ...config,
      ...extraStyle
    }))
  }, [extraStyle, setButtonConfig]);

  function renderToggleButton(btnParams: LangBtnType) {

    return <StyledTypography
      key={btnParams.key}
      $isActive={btnParams.key === lang}
      onClick={() => setLang(btnParams.key)}
      {...buttonConfig.buttonOption}
    >
      {btnParams.text}
    </StyledTypography>
  }

  return (
    <Box
      border="2px solid #E9E3D8"
      borderRadius={70}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...buttonConfig.groupOption}
    >
      {isMounted && languageButtons.map(renderToggleButton)}
    </Box>
  );
};

export default ToggleButton;