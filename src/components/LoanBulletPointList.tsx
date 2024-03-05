'use client';
// BulletPointList.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import { LANGUAGE_TYPE } from '@/types';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

const CustomBullet = ({ number }: { number: string }) => {
	return (
		<Box
			sx={{
				width: '76px',
				height: '76px',
				borderRadius: '50%',
				backgroundColor: '#B8C318',
				position: 'relative',
				color: '#594A39',
				fontSize: '52px',
				fontWeight: 500,
				lineHeight: '98.8px',
				letterSpacing: '4.16px',
			}}>
			<Box
				component="span"
				position="absolute"
				top="50%"
				left="50%"
				sx={{
					fontSize: '52px',
					color: 'white',
					transform: 'translate(-45%, -52%)',
				}}>
				{number}
			</Box>
		</Box>
	);
};

const BulletPointList: React.FC = () => {
	const { t } = useTranslation('stage2');
	const { lang } = useFirstBankTranslation();
	const isEN = lang === LANGUAGE_TYPE.EN;

	const textStyle = isEN
		? {
				fontSize: '40px',
				fontWeight: 500,
				lineHeight: '64px',
				letterSpacing: '2.4px',
		  }
		: {
				fontSize: '52px',
				lineHeight: '98.8px',
				fontWeight: 500,
				letterSpacing: '4.16px',
		  };

	return (
		<List sx={{ listStyle: 'none', padding: 0 }}>
			{[1, 2, 3, 4, 5].map((stringIndex, index) => (
				<ListItem key={index} sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
					<Box sx={{ mr: '32px' }}>
						<CustomBullet number={`${index + 1}`} />
					</Box>
					<Typography maxWidth="1348px" sx={textStyle}>
						{t(`loan.feature.${stringIndex}`)}
					</Typography>
				</ListItem>
			))}
		</List>
	);
};

export default BulletPointList;
