'use client';

import React from 'react';
import MuiButton, { ButtonOwnProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const StyledButton = styled(MuiButton)`
	padding: 12px 35px;
	border-radius: 84px;
  background: #7DBD36;
  color: #fff;
`;

const StyledTypography = styled(Typography)`
  letter-spacing: 5px;
`;

type ButtonProps = {
	text: string;
	properties?: ButtonOwnProps;
};

const Button = ({ text, properties }: ButtonProps) => {
	return (
		<StyledButton variant='contained' {...properties}>
			<StyledTypography >{text}</StyledTypography>
		</StyledButton>
	);
};

export default Button;
