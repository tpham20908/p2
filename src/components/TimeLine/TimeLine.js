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
				Driven by relentless energy and unwavering enthusiasm, I am constantly
				fueled by inspiration and driven to explore new paths. As a passionate
				and expressive individual with a diverse range of talents, I possess a
				natural ability to captivate and motivate others. Merely generating
				ideas is never enough for me—I possess an innate drive to transform them
				into tangible actions. I am constantly propelled by an insatiable need
				to bring my visions to life and make a lasting impact.
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
