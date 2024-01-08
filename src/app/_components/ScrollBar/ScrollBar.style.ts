import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from '@mui/material/styles/styled';

export const StyledSlider = styled(Slider)`
	.MuiSlider-thumb {
		width: 52px;
		height: 52px;
		color: #b8c318;
	}
	.MuiSlider-rail {
		color: #e9e3d8;
		width: 12px;
	}
	.MuiSlider-track {
		height: 0 !important;
		color: #e9e3d8;
	}
`;

export const StyledBox = styled(Box)`
	::-webkit-scrollbar {
		display: none;
	}
`;

