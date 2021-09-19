import React from 'react';
import Link from 'next/link';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				my personal website!
			</SectionTitle>

			<SectionText>
				My name is Tung Pham, <br />
				an analytical and passionate full-stack developer offering skills and
				experience in coding, programming, web development, software
				development, a vast knowledge of software, technical languages, and
				frameworks / libraries.
			</SectionText>

			<Link href='#projects'>
				<Button>Learn more</Button>
			</Link>
		</LeftSection>
	</Section>
);

export default Hero;
