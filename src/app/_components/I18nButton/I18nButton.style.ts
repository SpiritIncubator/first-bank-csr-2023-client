/** @format */

import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)<
	TypographyProps & { isActive?: boolean }
>`
	display: inline-block;
	width: ${(props) => `${props.width}px` ?? '36px'};
	height: ${(props) => `${props.height}px` ?? '36px'};
	font-size: ${(props) => `${props.fontSize}px`};
	font-weight: ${(props) => `${props.fontWeight}`};
	border-radius: 100px;
	background-color: ${(props) => (props.isActive ? '#958873' : '#E9E3D8')};
	color: ${(props) => (props.isActive ? '#ffffff' : '#B1AAA2')};
	text-align: center;
	line-height: ${(props) => `${props.lineHeight}px`};
	cursor: pointer;
`;
