import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import Lottie from 'lottie-react';
import Bird1_4_Back_Levitate from '@/lottieAnimations/bird_1-4_in_x_note.json';
import Bird1_5_Levitate from '@/lottieAnimations/bird_1-5_front_note.json';
import Bird1_4_Out_Blue from '@/lottieAnimations/bird_1-4_note_blue_out.json';
import Bird1_4_Out_Green from '@/lottieAnimations/bird_1-4_note_green_out.json';
import Bird1_4_Out_Pink from '@/lottieAnimations/bird_1-4_note_pink_out.json';
import Bird1_4_Out_Yellow from '@/lottieAnimations/bird_1-4_note_yellow_out.json';
import { NoteColor } from '@/types/index';

const colorMapping = {
	[NoteColor.YELLOW]: Bird1_4_Out_Yellow,
	[NoteColor.PINK]: Bird1_4_Out_Pink,
	[NoteColor.BLUE]: Bird1_4_Out_Blue,
	[NoteColor.GREEN]: Bird1_4_Out_Green,
};

const FinalPage = ({ noteColor }: { noteColor: NoteColor }) => {
	const [currentAnimation, setCurrentAnimation] = useState(colorMapping[noteColor]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}>
			<FadeIn>
				<Box sx={{ mb: '10px' }}>
					<Lottie
						animationData={currentAnimation}
						loop={currentAnimation === Bird1_5_Levitate}
						autoplay={true}
						style={{ width: 300, height: 300 }}
						onComplete={() => {
							setCurrentAnimation(prevAnimation => {
								let nextAnimation: any;
								if (
									prevAnimation === Bird1_4_Out_Green ||
									prevAnimation === Bird1_4_Out_Blue ||
									prevAnimation === Bird1_4_Out_Pink ||
									prevAnimation === Bird1_4_Out_Yellow
								)
									nextAnimation = Bird1_4_Back_Levitate;
								else if (prevAnimation === Bird1_4_Back_Levitate) nextAnimation = Bird1_5_Levitate;
								else nextAnimation = Bird1_5_Levitate;

								return nextAnimation;
							});
						}}
					/>
				</Box>
			</FadeIn>
			<FadeIn delay={0.5}>
				<Box sx={{ mb: 2 }}>
					<Image
						src="/assets/finalPage_title.svg"
						alt="A bird with books"
						width={336}
						height={76}
					/>
				</Box>
				<Box sx={{ mx: 'auto' }} textAlign="center">
					<Image
						src="/assets/stage5_thank_you.svg"
						alt="A bird with books"
						width={108}
						height={46}
					/>
				</Box>
			</FadeIn>
		</Box>
	);
};

export default FinalPage;
