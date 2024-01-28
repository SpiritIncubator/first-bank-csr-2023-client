import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import isPropValid from '@emotion/is-prop-valid';

export const StyledQuestionButton = styled(Box, {
	shouldForwardProp: prop => isPropValid(prop.toString()) && prop !== '$isActive',
})<{ $isActive?: boolean }>`
	display: flex;
	align-items: center;
	background-color: ${props => (props.$isActive ? '#f3f5de' : '#f9f8f3')};
	max-width: 342px;
	min-height: 104px;
	margin-bottom: 16px;
	padding: 20px 20px 20px 8px;
	border-radius: 20px;
	cursor: pointer;

	&:active {
		background-color: #f3f5de;
	}
`;