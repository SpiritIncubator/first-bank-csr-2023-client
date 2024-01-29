import StarThree from '@/app/_assets/images/fullStarDescription.svg';
import StarOne from '@/app/_assets/images/star-one.svg';
import StarTwo from '@/app/_assets/images/star-two.svg';
import SuperStar from '@/app/_assets/images/result-superstar.svg';
import Advanced from '@/app/_assets/images/result-advanced.svg';
import Beginner from '@/app/_assets/images/result-beginner.svg';

import QuestionOneImg from '../assets/question.one.img.svg';
import QuestionTwoImg from '../assets/question.two.img.svg';
import QuestionThreeImg from '../assets/question.three.img.svg';
import QuestionFourImg from '../assets/question.four.img.svg';
import QuestionFiveImg from '../assets/question.five.img.svg';
import QuestionSixImg from '../assets/question.six.img.svg';
import QuestionSevenImg from '../assets/question.seven.img.svg';
import QuestionEightImg from '../assets/question.eight.img.svg';

export const answerDescription = [
	{
		img: StarOne,
		title: Beginner,
		description: 'result.one.description',
	},
	{
		img: StarTwo,
		title: Advanced,
		description: 'result.two.description',
	},
	{
		img: StarThree,
		title: SuperStar,
		description: 'result.three.description',
	},
];

type AnswerType = {
	imgSrc: any;
	content: string;
}

export const answerList: Array<AnswerType> = [
	{
		imgSrc: QuestionOneImg,
		content: 'question.one.answer',
	},
	{
		imgSrc: QuestionTwoImg,
		content: 'question.two.answer',
	},
	{
		imgSrc: QuestionThreeImg,
		content: 'question.three.answer',
	},
	{
		imgSrc: QuestionFourImg,
		content: 'question.four.answer',
	},
	{
		imgSrc: QuestionFiveImg,
		content: 'question.five.answer',
	},
	{
		imgSrc: QuestionSixImg,
		content: 'question.six.answer',
	},
	{
		imgSrc: QuestionSevenImg,
		content: 'question.seven.answer',
	},
	{
		imgSrc: QuestionEightImg,
		content: 'question.eight.answer',
	},
];
