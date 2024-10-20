'use client';
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import { LANGUAGE_TYPE } from '@/types';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

export default function EsgLoanSection() {
	const { t } = useTranslation('stage2');
	const { lang } = useFirstBankTranslation();
	const isEN = lang === LANGUAGE_TYPE.EN;

	return (
		<FadeInHorizontal direction="ltr" delay={0.3}>
			<Box display="flex" gap="40px" mb="64px">
				<Box display="flex" width={isEN ? '986px' : '697px'} height="87" position="relative">
					<Image
						fill
						src={`/assets/stage2/greenConsumerLoan-title-${lang}.svg`}
						alt="greenConsumerLoan"
					/>
				</Box>
				<Link href="/stage2/esg-consumer-loans/loan">
					<Box display="flex" width="260px" height="87px" position="relative">
						<Image fill src={`/assets/stage2/seeMore-${lang}.svg`} alt="see more" />
					</Box>
				</Link>
			</Box>

			<Box
				sx={
					isEN
						? {
								width: '100%',
								mb: '70px',
								fontSize: '40px',
								fontWeight: 500,
								lineHeight: '64px',
								letterSpacing: '1.6px',
						  }
						: {
								width: '100%',
								fontSize: '46px',
								lineHeight: '73.6px',
								letterSpacing: '3.68px',
								mb: '70px',
								maxWidth: '1530px',
						  }
				}>
				{t('esgPage.greenConsumerLoanDesc')}
			</Box>

			<Box
				mb="246px"
				gap="0px"
				display="flex"
				width="100%"
				justifyContent="space-between"
				alignItems="center">
				<Box width="500px" height="500px" position="relative" mr="80px">
					<Link href="/stage2/esg-consumer-loans/loan">
						<Image
							fill
							src="/assets/stage2/greenConsumerLoan-Badges.svg"
							alt="greenConsumerLoan-Badges"
						/>
					</Link>
				</Box>
				<Box flex="1">
					<Box>
						<Typography
							variant="h4"
							component="div"
							gutterBottom
							whiteSpace={isEN ? 'nowrap' : 'normal'}
							lineHeight={isEN ? '72.2px' : '102.6px'}
							fontSize={isEN ? '38px' : '54px'}
							letterSpacing={isEN ? '1.52px' : '4.32px'}
							fontWeight={900}>
							{t('applyHouseHolds')}
							{!isEN && (
								<Box component="span" fontSize="42px" fontWeight={500}>
									{t('houseHolds')}
								</Box>
							)}
						</Typography>
						<Box
							sx={{
								color: '#B8C318',
								fontSize: '140px',
								fontWeight: 900,
								lineHeight: '160%',
								letterSpacing: '8.4px',
								marginTop: '-60px',
							}}>
							{formatNumberWithCommas(1584)}
						</Box>
						<Typography
							variant="h4"
							component="div"
							gutterBottom
							lineHeight="102.6px"
							fontSize={isEN ? '38px' : '54px'}
							fontWeight={isEN ? 900 : 700}>
							{t('balance')}
							{isEN ? (
								<Box
									component="span"
									sx={{
										fontSize: '25px',
										fontStyle: 'normal',
										fontWeight: 500,
										lineHeight: '190%',
										letterSpacing: '1px',
										marginLeft: '10px',
									}}>
									{t('ntd')}
								</Box>
							) : (
								<Box component="span" fontSize="42px" fontWeight={500}>
									{t('billion')}
								</Box>
							)}
						</Typography>
						<Box
							sx={{
								color: '#B8C318',
								fontSize: '140px',
								fontWeight: 900,
								lineHeight: '160%',
								letterSpacing: '8.4px',
								marginTop: '-60px',
							}}>
							{isEN ? '19.3B' : formatNumberWithCommas(193)}
						</Box>
					</Box>
				</Box>
				<Box flex="1" position="relative" top="150px" width="660px" height="580px">
					<Image fill src={`/assets/stage2/2023-score-${lang}.svg`} alt="2022 score" />
				</Box>
			</Box>
		</FadeInHorizontal>
	);
}
