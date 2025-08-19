'use client';
// MainPage.tsx
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';
import { LANGUAGE_TYPE } from '@/types';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import { ESG_SECTION_METRICS } from '@/config/esgMetrics';

export default function OldBuildingSection() {
	const { t } = useTranslation('stage2');
	const { lang } = useFirstBankTranslation();
	const isEN = lang === LANGUAGE_TYPE.EN;

	return (
		<FadeInHorizontal direction="ltr" delay={0.5}>
			<Box display="flex" gap="40px" mb="64px">
				<Box display="flex" width={isEN ? '1368px' : '1006px'} height="87" position="relative">
					<Image fill src={`/assets/stage2/oldBuilding-title-${lang}.svg`} alt="oldBuilding" />
				</Box>
				<Link href="/stage2/esg-consumer-loans/old-building">
					<Box display="flex" width="260px" height="87px" position="relative">
						<Image fill src={`/assets/stage2/seeMore-${lang}.svg`} alt="see more " />
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
				{t('esgPage.oldBuildingDesc')}
			</Box>

			<Box mb="246px" gap="40px" display="flex" width="100%" justifyContent="space-between">
				<Box width="500px" height="500px" position="relative">
					<Link href="/stage2/esg-consumer-loans/old-building">
						<Image fill src="/assets/stage2/oldBuilding-icon.svg" alt="oldBuilding-icon" />
					</Link>
				</Box>
				<Box flex="2">
					<Box display="flex" flexDirection="column" width="100%">
						<Box ml="90px">
							<Box>
								<Typography
									variant="h4"
									component="div"
									gutterBottom
									sx={
										isEN
											? {
													whiteSpace: 'nowrap',
													fontWeight: 900,
													lineHeight: '72px',
													letterSpacing: '1.53px',
											  }
											: {
													lineHeight: '102.6px',
													fontSize: '54px',
													fontWeight: 700,
											  }
									}>
									{t('benefitedHouseholds')}

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
									{formatNumberWithCommas(ESG_SECTION_METRICS.oldBuilding.benefitedHouseholds)}
								</Box>
							</Box>
							<Box display="flex">
								<Box>
									<Typography
										variant="h4"
										component="div"
										gutterBottom
										sx={
											isEN
												? {
														whiteSpace: 'nowrap',
														fontWeight: 900,
														lineHeight: '72px',
														letterSpacing: '1.53px',
												  }
												: {
														lineHeight: '102.6px',
														fontSize: '54px',
														fontWeight: 700,
												  }
										}>
										{t('independentUpdateType')}

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
											fontSize: '100px',
											fontWeight: 900,
											lineHeight: '160%',
											letterSpacing: '6px',
											marginTop: isEN ? '-40px' : '-60px',
										}}>
										{isEN ? ESG_SECTION_METRICS.oldBuilding.independentUpdate.amount.en : formatNumberWithCommas(ESG_SECTION_METRICS.oldBuilding.independentUpdate.amount.zh)}
										<Box
											component="span"
											ml={isEN ? '0px' : '20px'}
											fontSize="54px"
											fontWeight="700"
											letterSpacing="4.32px"
											color="#594A39">
											/{ESG_SECTION_METRICS.oldBuilding.independentUpdate.pieces}
											{isEN ? (
												<Box
													component="span"
													fontSize="28px"
													fontWeight="500"
													lineHeight="190%"
													letterSpacing="2.24px">
													{t('pieces')}
												</Box>
											) : (
												<Box component="span" fontWeight={500}>
													{t('pieces')}
												</Box>
											)}
										</Box>
									</Box>
								</Box>
								<Box ml="60px">
									<Typography
										variant="h4"
										component="div"
										gutterBottom
										sx={
											isEN
												? {
														whiteSpace: 'nowrap',
														fontWeight: 900,
														lineHeight: '72px',
														letterSpacing: '1.53px',
												  }
												: {
														lineHeight: '102.6px',
														fontSize: '54px',
														fontWeight: 700,
												  }
										}>
										{t('builderIntegratedType')}

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
											<Box component="span" fontWeight={500} fontSize="42px">
												{t('billion')}
											</Box>
										)}
									</Typography>
									<Box
										sx={{
											color: '#B8C318',
											fontSize: '100px',
											fontWeight: 900,
											lineHeight: '160%',
											letterSpacing: '6px',
											marginTop: isEN ? '-40px' : '-60px',
										}}>
										{isEN ? ESG_SECTION_METRICS.oldBuilding.builderIntegrated.amount.en : formatNumberWithCommas(ESG_SECTION_METRICS.oldBuilding.builderIntegrated.amount.zh)}
										<Box
											component="span"
											fontSize="54px"
											ml={isEN ? '0px' : '20px'}
											fontWeight="700"
											letterSpacing="4.32px"
											color="#594A39">
											{' '}
											/{ESG_SECTION_METRICS.oldBuilding.builderIntegrated.pieces}
											{isEN ? (
												<Box
													component="span"
													fontSize="28px"
													fontWeight="500"
													lineHeight="190%"
													letterSpacing="2.24px">
													{t('pieces')}
												</Box>
											) : (
												<Box component="span" fontWeight={500}>
													{t('pieces')}
												</Box>
											)}
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</FadeInHorizontal>
	);
}
