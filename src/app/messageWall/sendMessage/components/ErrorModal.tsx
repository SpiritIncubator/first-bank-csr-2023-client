import React from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import ZoomBounce from '@/app/_components/Transitions/ZoomBounce';
import color from '@/constants/colors';

const CHAR_ERROR_MESSAGE = '請輸入最少10個字'

export default function ConfirmModal({
	open,
	onClose,
	onConfirm,
	message,
}: {
	open: boolean;
	message: string;
	onClose?: () => void;
	onConfirm?: () => void;
}) {
	const modalBodyStyle = {
		maxWidth: '400px',
		width: '100%',
		bgcolor: color.ivory,
		boxShadow: 24,
		p: '30px 24px',
		margin: '0 24px',
		outline: 'none',
		borderRadius: '20px', // Set border radius to 20px
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backdropFilter: 'blur(3px)',
			}}
			componentsProps={{
				backdrop: {
					style: {
						backgroundColor: 'rgba(0, 0, 0, 0.1)',
					},
				},
			}}>
			<ZoomBounce trigger={open} width="100%" display="flex" justifyContent="center">
				<Box sx={modalBodyStyle}>
					<Box
						sx={{
							width: '108px',
							height: '83px',
							margin: '0 auto',
							overflow: 'hidden',
							position: 'relative',
							marginBottom: '14px',
						}}>
						<Image fill src="/assets/sendMessage_confirm_bird.svg" alt="bird" />
					</Box>
					<Box sx={{ textAlign: 'center', letterSpacing: '1.28px' }}>{message}</Box>
					{message ===CHAR_ERROR_MESSAGE && <Box
						sx={{
							width: '200px',
							height: '30px',
							margin: '0 auto',
							overflow: 'hidden',
							position: 'relative',
						}}>
						<Image
							src="/assets/stage5_enter_at_least_10_characters.svg"
							alt="stage5_enter_at_least_10_characters"
							fill
						/>
					</Box>}

					<ImageButton
						onClick={onConfirm}
						width="130px"
						height="53px"
						margin="0 auto"
						mt="20px"
						src="/assets/sendMessage_ok.svg"
						activeImageSrc="/assets/sendMessage_ok_active.svg"
					/>
				</Box>
			</ZoomBounce>
		</Modal>
	);
}
