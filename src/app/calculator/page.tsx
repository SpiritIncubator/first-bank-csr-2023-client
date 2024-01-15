'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import StyleButton from '@/app/_components/Button/Button';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import I18nButton from '@/app/_components/I18nButton/I18nButton';
import ToggleButton from './components/ToggleButton/ToggleButton';
import CalculatorTitle from '@/app/_assets/images/calculator-entry.svg';
import FadeIn from '../_components/Transitions/FadeIn';

const MainPage = () => {
	const router = useRouter();
	const { t } = useTranslation('common');


	function redirectToQuestionsPage() {
		router.push('/calculator/questions');
	}

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
			bgcolor="#FDFDFB"
		>
			<Box flex={1}>
				{/* <Image src="" alt="" /> */}
			</Box>
			<Box flex={1} display="flex" justifyContent="center" position="relative">
				<Box width="310px" display="flex" flexDirection="column" alignItems="center">
					{/* <Typography fontSize={32} fontWeight={900}></Typography> */}
					<FadeIn>
						<Image src={CalculatorTitle} alt="calculator" />
					</FadeIn>
					{/* <Typography lineHeight={2} fontSize={16}></Typography> */}
					<Box position="absolute" bottom={148}>
						<FadeIn delay={0.5}>
							<StyleButton text="start" onClickHandler={redirectToQuestionsPage} />
						</FadeIn>
					</Box>
					<Box position="absolute" bottom={48}>
						<FadeIn delay={1}>
							<I18nButton />
						</FadeIn>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainPage;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';



// const CardQueueAnimation = () => {
// 	const [cards, setCards] = useState([1, 2, 3, 4, 5]);

// 	const removeCard = (index) => {
// 		const updatedCards = [...cards];
// 		updatedCards.splice(index, 1);
// 		setCards(updatedCards);
// 	};


// 	const onClickAdd = () => {
// 		setCards(prev => [...prev, prev.length + 1])
// 	}
// 	return (
// 		<div>
// 			<AnimatePresence>
// 				{cards.reverse().map((card, index) => (
// 					<motion.div
// 						key={card}
// 						initial={{ opacity: 0, x: -50 }}
// 						animate={{ opacity: 1, x: 0 }}
// 						exit={{ opacity: 0, x: 50 }}
// 						transition={{ duration: 0.5 }}
// 					>
// 						<div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
// 							<p>Card {card}</p>
// 							<button onClick={() => removeCard(index)}>Remove</button>
// 						</div>
// 					</motion.div>
// 				))}
// 			</AnimatePresence>
// 			<button onClick={onClickAdd}>
// 				add
// 			</button>
// 		</div>
// 	);
// };

// export default CardQueueAnimation;