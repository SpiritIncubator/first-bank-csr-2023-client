import { Box } from '@mui/material';
import Image from 'next/image';
import LookAtScreen from '@/app/stage3/assets/controlBoard/stage3_lion_look_at_screen.svg';

export default function AnswerZone() {
	return (
		<Box
			width="2732px"
			minHeight="2048px"
			sx={{
				backgroundImage: 'url(/assets/stage3/background.svg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: '205px',
			}}>
			<Box mx="auto" mb="75px" position="relative" width="1854px" height="462px" textAlign="center">
				<Image src={LookAtScreen} alt="stage3_lion_look_at_screen" fill />
			</Box>

			<Box width="866px" height="650px" bgcolor="gray" mb="100px"></Box>
		</Box>
	);
}
