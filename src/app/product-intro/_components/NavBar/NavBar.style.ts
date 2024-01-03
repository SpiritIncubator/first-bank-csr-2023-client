import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const NavBarWrapper = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 3840px;
  display: flex;
  padding: 78px 200px;
  background-color: pink;
`;

export const NavLinkItem = styled(Typography)`
  position: relative;
  width: 400px;
  margin-left: 183px;

	&::before {
		position: absolute;
		display: inline-block;
    left: -70px;
		content: '';
		background-color: #fff;
		width: 14px;
		height: 143px;
		transform: rotate(-165deg);
	}
`;