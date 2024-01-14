import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

export const StyledQuestionButton = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #F9F8F3;
  max-width: 342px;
  margin-bottom: 16px;
  padding: 20px 20px 20px 8px;
  border-radius: 8%;
  cursor: pointer;

  &:active {
    background-color: #F3F5DE;
  }
`;