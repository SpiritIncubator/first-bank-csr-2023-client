import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Image from 'next/image';

import FlagIcon from '../../assets/flag.svg';

type MessageCardProps = {
	bgColor: string;
	content: string;
	isTop: boolean;
	name: string;
};

const MessageCard = ({ bgColor, isTop, content, name }: MessageCardProps) => {
	return (
		<Box width={400} height={400} px={5.5} py={4.25} bgcolor={bgColor}>
			<Box>
				<Box position="relative" height={80} top={-10} left={-20}>
					{isTop && (
						<Box position="absolute">
							<Image src={FlagIcon} alt="flag" />
						</Box>
					)}
				</Box>
				<Box>
					<Typography
						lang="en"
						fontWeight={700}
						fontSize={23}
						minHeight={176}
						letterSpacing={1}
						lineHeight={2}
						sx={{
							wordWrap: 'break-word',
							'-webkit-hyphens': 'auto',
							'-moz-hyphens': 'auto',
							'-ms-hyphens': 'auto',
							hyphens: 'auto',
						}}>
						{content}
					</Typography>
				</Box>
				<Box mt={5} textAlign="right">
					<Typography fontSize={20} letterSpacing={1}>
						{name}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default MessageCard;
