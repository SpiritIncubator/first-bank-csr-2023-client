import QuestionOneImg from '../assets/question.one.img.svg';
import QuestionTwoImg from '../assets/question.two.img.svg';
import QuestionThreeImg from '../assets/question.three.img.svg';
import QuestionFourImg from '../assets/question.four.img.svg';
import QuestionFiveImg from '../assets/question.five.img.svg';
import QuestionSixImg from '../assets/question.six.img.svg';
import QuestionSevenImg from '../assets/question.seven.img.svg';
import QuestionEightImg from '../assets/question.eight.img.svg';

type OptionType = {
	content: string;
	score: number;
};

type LevelType = {
	imgSrc: string;
	description: string;
	options: OptionType[];
};

export const questionList: Array<LevelType> = [
	{
		imgSrc: QuestionOneImg,
		description: 'question.one.description',
		options: [
			{
				content: 'question.one.option.one',
				score: 2,
			},
			{
				content: 'question.one.option.two',
				score: 1,
			},
			{
				content: 'question.one.option.three',
				score: 0,
			},
		],
	},
	{
		imgSrc: QuestionTwoImg,
		description: 'question.two.description',
		options: [
			{
				content: 'question.two.option.one',
				score: 0,
			},
			{
				content: 'question.two.option.two',
				score: 2,
			},
			{
				content: 'question.two.option.three',
				score: 1,
			},
		],
	},
	{
		imgSrc: QuestionThreeImg,
		description: 'question.three.description',
		options: [
			{
				content: 'question.three.option.one',
				score: 1,
			},
			{
				content: 'question.three.option.two',
				score: 2,
			},
			{
				content: 'question.three.option.three',
				score: 0,
			},
		],
	},
	{
		imgSrc: QuestionFourImg,
		description: 'question.four.description',
		options: [
			{
				content: 'question.four.option.one',
				score: 1,
			},
			{
				content: 'question.four.option.two',
				score: 2,
			},
			{
				content: 'question.four.option.three',
				score: 0,
			},
		],
	},
	{
		imgSrc: QuestionFiveImg,
		description: 'question.five.description',
		options: [
			{
				content: 'question.five.option.one',
				score: 0,
			},
			{
				content: 'question.five.option.two',
				score: 1,
			},
			{
				content: 'question.five.option.three',
				score: 2,
			},
		],
	},
	{
		imgSrc: QuestionSixImg,
		description: 'question.six.description',
		options: [
			{
				content: 'question.six.option.one',
				score: 2,
			},
			{
				content: 'question.six.option.two',
				score: 0,
			},
			{
				content: 'question.six.option.three',
				score: 1,
			},
		],
	},
	{
		imgSrc: QuestionSevenImg,
		description: 'question.seven.description',
		options: [
			{
				content: 'question.seven.option.one',
				score: 1,
			},
			{
				content: 'question.seven.option.two',
				score: 2,
			},
			{
				content: 'question.seven.option.three',
				score: 0,
			},
		],
	},
	{
		imgSrc: QuestionEightImg,
		description: 'question.eight.description',
		options: [
			{
				content: 'question.eight.option.one',
				score: 0,
			},
			{
				content: 'question.eight.option.two',
				score: 1,
			},
			{
				content: 'question.eight.option.three',
				score: 2,
			},
		],
	},
];
