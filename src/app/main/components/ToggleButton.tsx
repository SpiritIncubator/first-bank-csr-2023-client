'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)<TypographyProps>`
  display: inline-block;
  /* width: 36px;
  height: 36px; */
`;

const ToggleButton = () => {


	return (
		<Box
			width={104}
			height={52}
			border="1px solid #E9E3D8"
			borderRadius={70}
			display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
			<StyledTypography component="span">中</StyledTypography>
			<StyledTypography component="span">英</StyledTypography>
		</Box>
	);
};

export default ToggleButton;
