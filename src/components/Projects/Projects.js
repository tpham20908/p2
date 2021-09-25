import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionTitle main>Projects</SectionTitle>
		<SectionDivider />

		<GridContainer>
			{projects.map((project) => {
				const { id, title, description, image, tags, source, visit } = project;
				return (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
						</TitleContent>
						<Hr />
						<CardInfo>{description}</CardInfo>

						<div style={{ marginTop: 12 }}>
							<TitleContent>Stacks</TitleContent>
							<TagList>
								{tags.map((tag, idx) => (
									<Tag key={idx}>{tag}</Tag>
								))}
							</TagList>
						</div>

						<UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;
