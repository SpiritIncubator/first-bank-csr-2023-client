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
  position: absolute;
  bottom:0;
  left:0;
  width: 100%;
  max-width: 3840px;
  display: inline-flex;
  align-items: center;
  padding: 28px 200px;
  background: linear-gradient(90deg, #F3F5DE 60.94%, #FDFDFB 100%);
`;

export const NavLinkItem = styled(Typography)`
  position: relative;
  width: 400px;
  margin-left: 183px;

	&::before {
		position: absolute;
		display: inline-block;
    left: -70px;
    top: 50%;
		content: '';
		background-color: #fff;
		width: 14px;
		height: 143px;
		transform: rotate(-165deg) translateY(50%);
	}
`;