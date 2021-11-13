import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionTitle main>Technologies</SectionTitle>
		<SectionDivider />
		<br />
		<SectionText>
			I've worked with Technologies in the web development world, from Back-end
			to Design.
		</SectionText>

		{/* List */}
		<List>
			<ListItem>
				<DiReact size='4rem' />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Proficiency with
						<br /> React, Redux and RxJs
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='4rem' />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Proficiency with
						<br /> Node and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size='4rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with
						<br /> Zepline and Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
