import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)<TypographyProps & { isActive?: boolean }>`
	display: inline-block;
	width: 36px;
	height: 36px;
	border-radius: 100px;
	background-color: ${props => (props.isActive ? '#958873' : '#E9E3D8')};
	color: ${props => (props.isActive ? '#ffffff' : '#B1AAA2')};
	text-align: center;
	line-height: 36px;
	cursor: pointer;
`;
