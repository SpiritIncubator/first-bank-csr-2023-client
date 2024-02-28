'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Container } from '@mui/material';
import ColorPicker from '@/components/ColorPicker';
import colors from '@/constants/colors';
import ErrorModal from './components/ErrorModal';
import FinalPage from './components/FinalPage';
import ConfirmSubmit from './components/ConfirmSubmit';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import { createMessage } from '@/api/index';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import Lottie from 'lottie-react';
import Bird1_3Animation from '@/lottieAnimations/bird_1-3_side_loop.json';
import FadeInOnView from '@/app/_components/Transitions/FadeInOnView';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

export default function SendMessage() {
	const [name, setName] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [noteColor, setNoteColor] = React.useState('#F8E47E');
	const [errorMessage, setErrorMessage] = React.useState('');
	const [readyToSubmit, setReadyToSubmit] = React.useState(false);
	const [finishSubmit, setFinishSubmit] = React.useState(false);

	const { lang } = useFirstBankTranslation();
	console.log('lang :', lang);

	const mobileContainerStyle = {
		maxWidth: '390px',
		margin: '0 auto', // Center the container
		padding: '80px 24px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: colors.brown4,
		backgroundColor: colors.ivory,
	};

	const onSubmit = () => {
		if (!name) {
			setErrorMessage('請輸入你的名字');
			return;
		}
		if (message.length < 10) {
			setErrorMessage('請輸入最少十個字');
			return;
		}
		if (message.length > 50) {
			setErrorMessage('請輸入最多五十個字');
			return;
		}
		setReadyToSubmit(true);
	};

	const onConfirmError = () => {
		setErrorMessage('');
	};

	const onConfirmSubmit = async () => {
		setFinishSubmit(true);

		const result = await createMessage({
			name,
			message,
			color: noteColor,
		});
		console.log('result :', result);
	};

	return (
		<Box sx={{ bgcolor: colors.ivory }}>
			{finishSubmit ? (
				<FinalPage />
			) : (
				<>
					{readyToSubmit && (
						<Box
							sx={{
								position: 'fixed',
								left: 0,
								top: '0px',
								bgcolor: colors.ivory,
								width: '100%',
								height: '100%',
								zIndex: 1,
								overflow: 'scroll',
							}}>
							<ConfirmSubmit
								noteColor={noteColor}
								name={name}
								message={message}
								readyToSubmit={readyToSubmit}
								onReject={() => setReadyToSubmit(false)}
								onConfirm={onConfirmSubmit}
							/>
						</Box>
					)}

					<Container maxWidth="sm" sx={mobileContainerStyle}>
						<FadeIn>
							<Box
								sx={{
									width: '230px',
									height: '240px',
									margin: '0 auto',
									overflow: 'hidden',
									position: 'relative',
									marginBottom: '16px',
								}}>
								<Lottie animationData={Bird1_3Animation} loop={true} />
							</Box>
						</FadeIn>
						<FadeIn>
							<Box
								sx={{
									width: '250px',
									height: '60px',
									margin: '0 auto',
									overflow: 'hidden',
									position: 'relative',
								}}>
								<Image
									src="/assets/sendMessage_title.svg"
									alt="sendMessage_title"
									objectFit="contain"
									fill
									style={{ marginBottom: '16px' }}
								/>
							</Box>

							<Box
								sx={{
									width: '240px',
									height: '45px',
									margin: '0 auto',
									overflow: 'hidden',
									position: 'relative',
								}}>
								<Image
									src="/assets/sendMessage_subTitle.svg"
									alt="sendMessage_subTitle"
									objectFit="contain"
									fill
									style={{ marginTop: '-12px' }}
								/>
							</Box>
						</FadeIn>
						<FadeIn delay={0.5}>
							<Box
								sx={{
									width: '342px',
									height: '5px',
									margin: '0 auto',
									overflow: 'hidden',
									position: 'relative',
									marginTop: '60px',
									marginBottom: '20px',
								}}>
								<Image src="/assets/divider.svg" alt="divider" objectFit="contain" fill />
							</Box>

							<Box
								component="form"
								sx={{
									width: '100%',
									marginBottom: '40px',
									'& .input-base': {
										width: '100%',
										padding: '20px 24px',
										fontSize: '1rem',
										borderRadius: '20px',
										border: `2px solid ${colors.brown1}`,
										backgroundColor: colors.brown,
										margin: '8px 0',
										boxSizing: 'border-box',
										outline: 'none',
										transition: 'border-color 0.2s ease-in-out',
										letterSpacing: '1.28px',
										'&:focus': {
											border: `2px solid ${colors.brown2}`,
										},
										'&::placeholder': {
											color: 'rgba(0, 0, 0, 0.6)',
										},
									},
									'& .textarea-base': {
										letterSpacing: '1.28px',
										width: '100%',
										padding: '20px 24px',
										fontSize: '1rem',
										borderRadius: '20px',
										border: `2px solid ${colors.brown1}`,
										backgroundColor: colors.brown,
										resize: 'none',
										boxSizing: 'border-box',
										outline: 'none',
										transition: 'border-color 0.2s ease-in-out',
										'&:focus': {
											border: `2px solid ${colors.brown2}`,
										},
									},
									'& .input-base::placeholder, & .textarea-base::placeholder': {
										color: colors.brown2, // Theme color for placeholder
										opacity: 1, // Full opacity
									},
								}}>
								<Box
									sx={{
										width: '202px',
										height: '30px',
										margin: '0 auto',
										overflow: 'hidden',
										position: 'relative',
										marginBottom: '10px',
										display: 'flex',
									}}>
									<Image
										width="129"
										height="38"
										src="/assets/sendMessage_write.svg"
										alt="sendMessage_write"
										style={{ marginRight: '8px' }}
									/>
									<Image
										width="65"
										height="38"
										src="/assets/sendMessage_content.svg"
										alt="sendMessage_content"
									/>
								</Box>

								<textarea
									placeholder="請寫下你會如何在生活中實踐永續，或是今天的觀展心得吧！       （字數限制50字）"
									className="textarea-base"
									rows={4}
									onChange={e => setMessage(e.target.value)}
								/>
								<Box
									sx={{
										width: '202px',
										height: '30px',
										margin: '0 auto',
										overflow: 'hidden',
										position: 'relative',
										marginBottom: '10px',
										marginTop: '30px',
										display: 'flex',
									}}>
									<Image
										width="107"
										height="38"
										src="/assets/sendMessage_writeName.svg"
										alt="sendMessage_writeName"
										style={{ marginRight: '8px' }}
									/>
									<Image
										width="45"
										height="38"
										src="/assets/sendMessage_name.svg"
										alt="sendMessage_name"
									/>
								</Box>
								<input
									type="text"
									placeholder="請留下你的大名吧！"
									className="input-base"
									onChange={e => setName(e.target.value)}
								/>
								{/* Continue with your form elements and submit button */}
							</Box>
						</FadeIn>
						<FadeInOnView>
							<ColorPicker defaultColor="#F8E47E" onColorChange={setNoteColor} />
						</FadeInOnView>

						<FadeInOnView>
							<ImageButton
								onClick={onSubmit}
								src="/assets/sendMessage_confirm.svg"
								activeImageSrc="/assets/sendMessage_confirm_active.svg"
								width="200px"
								height="67px"
								margin="0 auto"
								marginTop="50px"
							/>
						</FadeInOnView>

						{errorMessage && (
							<ErrorModal message={errorMessage} open={!!errorMessage} onConfirm={onConfirmError} />
						)}
					</Container>
				</>
			)}
		</Box>
	);
}
