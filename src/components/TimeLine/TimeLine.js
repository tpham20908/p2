import React, { useState, useRef, useEffect } from 'react';

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemText,
	CarouselItemTitleContainer,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './TimeLineStyles';
import TimePointSvg from './TimePointSvg';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: 'smooth' });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionDivider />
			<br />
			<SectionText>
				Fueled by high energy levels and boundless enthusiasm, I’m easily
				inspired and more than willing to follow my fascinations wherever they
				take me. I’m passionate, expressive, multi-talented spirit with a
				natural ability to entertain and inspire. I’m never satisfied to just
				come up with ideas. Instead I have an almost impulsive need to act on
				them.
			</SectionText>

			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, idx) => {
						const { year, text } = item;
						return (
							<CarouselMobileScrollNode
								key={idx}
								final={idx === TOTAL_CAROUSEL_COUNT - 1}
							>
								<CarouselItem
									index={idx}
									id={`carousel__item-${idx}`}
									active={activeItem}
									onClick={(e) => handleClick(e, idx)}
								>
									<CarouselItemTitleContainer>
										<CarouselItemTitle>{year}</CarouselItemTitle>
										<TimePointSvg />
									</CarouselItemTitleContainer>
									<CarouselItemText>{text}</CarouselItemText>
								</CarouselItem>
							</CarouselMobileScrollNode>
						);
					})}
				</>
			</CarouselContainer>

			<CarouselButtons>
				{TimeLineData.map((item, idx) => (
					<CarouselButton
						key={idx}
						index={idx}
						active={activeItem}
						onClick={(e) => handleClick(e, idx)}
						type='button'
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
		</Section>
	);
};

export default Timeline;
