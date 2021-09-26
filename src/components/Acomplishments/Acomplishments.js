import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 20, text: 'Open Source Projects' },
	{ number: 1000, text: 'Students' },
	{ number: 1900, text: 'Github Followers' },
	{ number: 5000, text: 'Github Stars' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accoplishment</SectionTitle>
		<SectionDivider />
		<Boxes>
			{data.map((card, idx) => {
				const { number, text } = card;
				return (
					<Box key={idx}>
						<BoxNum>{number}</BoxNum>
						<BoxText>{text}</BoxText>
					</Box>
				);
			})}
		</Boxes>
		<br />
	</Section>
);

export default Acomplishments;
