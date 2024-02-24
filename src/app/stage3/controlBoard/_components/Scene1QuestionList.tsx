import { Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Stage3ChooseOne from '@/app/stage3/assets/controlBoard/stage3_choose_one.svg';
import QuestionButton from '@/app/stage3/assets/controlBoard/stage3_question_button.svg';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';

const QUEST_LIST = [
	{
		name: 'question1',
		imageUrl: QuestionButton,
	},
	{
		name: 'question2',
		imageUrl: QuestionButton,
	},
	{
		name: 'question3',
		imageUrl: QuestionButton,
	},
];

export default function Scene1QuestionList() {
	const [answeredQuestionIndex, setAnsweredQuestionIndex] = useState<number[]>([]);
	console.log('answeredQuestionIndex :', answeredQuestionIndex);
	const onClickQuestion = (index: number) => () => {
		setAnsweredQuestionIndex(prev => [...prev, index]);
	};
	return (
		<Box
			width={`${MAX_WIDTH}px`}
			minHeight={`${MAX_HEIGHT}px`}
			sx={{
				backgroundImage: 'url(/assets/stage3/background.svg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				pt: '205px',
			}}>
			<Box
				mx="auto"
				mb="160px"
				position="relative"
				width="1854px"
				height="462px"
				textAlign="center">
				<Image src={Stage3ChooseOne} alt="stage3_choose_one" fill />
			</Box>
			<Box
				maxWidth="1500px"
				mx="auto"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				height="100%">
				{QUEST_LIST.map((question, index) => {
					const isAnswered: boolean = answeredQuestionIndex.includes(index);
					return (
						<Box
							display="flex"
							flexDirection="column"
							key={`${question.name}-${index}`}
							alignItems="center"
							onClick={onClickQuestion(index)}>
							<Box
								bgcolor={isAnswered ? 'yellow' : 'gray'}
								height="400px"
								minWidth="400px"
								mb="100px"
							/>
							<Image src={QuestionButton} alt="question button" width="320" height="100" />
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
