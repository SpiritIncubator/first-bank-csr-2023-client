import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { Box, Typography } from '@mui/material';

export const buttonStyle = css`
  display: inline-block;
  font-size: 60px;
  font-weight: 700;
  background-color: #B8C318;
  padding: 20px 50px;
  border-radius: 80px;
  color: #ffffff;
  width: 240px;
  height: 124px;
  text-align: center;
`;

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