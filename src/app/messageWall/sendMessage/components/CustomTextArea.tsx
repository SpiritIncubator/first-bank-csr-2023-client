import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import colors from '@/constants/colors';

const CustomTextarea = ({ onChange }) => {
	const [message, setMessage] = useState('');

	const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
		onChange && onChange(e.target.value);
	};
	return (
		<Box position="relative" width="100%">
			<TextField
				multiline
				rows={4}
				variant="outlined"
				fullWidth
				value={message}
				onChange={onTextChange}
				sx={{
					'.MuiInputBase-root': {
						padding: '0',
					},
					'.MuiInputBase-inputMultiline': {
						letterSpacing: '1.28px',
						padding: '20px 24px',
						width: '100%',
						fontSize: '1rem',
						borderRadius: '20px',
						border: `2px solid ${colors.brown1}`,
						backgroundColor: colors.brown,
						boxSizing: 'border-box',
						outline: 'none',
						transition: 'border-color 0.2s ease-in-out',
						color: colors.brown4,
						'&:focus': {
							border: `2px solid ${colors.brown2}`,
						},
					},
					'& .MuiOutlinedInput-notchedOutline': {
						border: 'none',
					},
				}}
			/>
			{message === '' && (
				<Box
					position="absolute"
					top={0}
					left={3}
					right={0}
					color={colors.brown2}
					sx={{
						padding: '20px 24px',
						pointerEvents: 'none',
						'& > div': {
							whiteSpace: 'pre-line',
						},
					}}>
					<Box>
						請寫下你會如何在生活中實踐永續，或是今天的觀展心得吧！
						<br />
						（字數限制50字）
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default CustomTextarea;
