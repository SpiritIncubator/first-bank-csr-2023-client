'use client';

import React, {CSSProperties} from 'react';
import MuiButton, { ButtonOwnProps } from '@mui/material/Button';
import Typography, {TypographyProps} from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const StyledButton = styled(MuiButton)`
	padding: 12px 42px;
	border-radius: 84px;
  background: #7DBD36;
  color: #fff;

	&.MuiButton-root:hover {
		background-color: #B8C318;
	}
`;

const StyledTypography = styled(Typography) <TypographyProps>`
  letter-spacing: 5px;
`;

type ButtonProps = {
	text: string;
	styles?: CSSProperties;
	buttonProperties?: ButtonOwnProps;
	onClickHandler?: () => void;
};

const Button = ({ text, styles, buttonProperties, onClickHandler }: ButtonProps) => {
	return (
		<StyledButton size="large" style={{ ...styles }} onClick={onClickHandler}>
			<StyledTypography component="span" fontSize={20}>{text}</StyledTypography>
		</StyledButton>
	);
};

export default Button;
