'use client'

import { useState, useCallback, useRef, useEffect } from 'react';

const MAX_SCROLL_HEIGHT_VALUE = 100;

type UseScrollBarProps = {
  loaded?: boolean;
}

const useScrollBar = ({loaded = true}: UseScrollBarProps) => {
	const [value, setValue] = useState(MAX_SCROLL_HEIGHT_VALUE);
	const [offsetValue, setOffsetValue] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const scrollableHeight = useRef(0);
	const stepHeight = useRef(0);

	const handleChangeBarOfValue = useCallback((_: Event, newValue: number | number[]) => {
		const typedValue = newValue as number;
		const value = Math.abs(typedValue - 100) * stepHeight.current;

		setOffsetValue(value);
		setValue(typedValue);
	}, []);

	const handleScroll = () => {
		if (containerRef.current) {
			const { scrollTop } = containerRef.current;
			const sliderPercentageValue = Math.abs(
				Math.round(scrollTop / stepHeight.current) - MAX_SCROLL_HEIGHT_VALUE,
			);

			setValue(sliderPercentageValue);
		}
	};

	useEffect(() => {
		if (containerRef.current && loaded) {
			const { scrollHeight, clientHeight } = containerRef.current;
			scrollableHeight.current =
				scrollHeight - clientHeight === 0 ? scrollHeight : scrollHeight - clientHeight;
			stepHeight.current = scrollableHeight.current / MAX_SCROLL_HEIGHT_VALUE;
			containerRef.current.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', handleScroll);
			}
		};
	}, [loaded]);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = offsetValue;
		}
	}, [offsetValue]);

	return { value, handleChangeBarOfValue, containerRef };
};

export default useScrollBar;