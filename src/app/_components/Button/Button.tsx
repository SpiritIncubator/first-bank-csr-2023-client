'use client';

import React, {CSSProperties, PropsWithChildren, ComponentProps} from 'react';
import MuiButton, { ButtonOwnProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box';
import Typography, {TypographyProps} from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Box)`
	padding: 12px 42px;
	border-radius: 84px;
  background: #7DBD36;
  color: #fff;

	&.MuiButton-root:hover {
		background-color: #B8C318;
	}
`;

type CompositionProps = BoxProps & ComponentProps<'a'>;

type ButtonProps = {
	styles?: CSSProperties;
	buttonProperties?: ButtonOwnProps;
	onClickHandler?: () => void;
} & CompositionProps;

const Button = ({ styles, onClickHandler, children, component = 'div', ...rest }: PropsWithChildren<ButtonProps>) => {
	return (
		<StyledButton component={component} style={{ ...styles }} onClick={onClickHandler} {...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;
