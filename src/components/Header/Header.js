import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
					{/* <DiCssdeck /> */}
					<img
						src='/images/tp.png'
						style={{ height: 36, borderRadius: '50%' }}
					/>
				</a>
			</Link>
		</Div1>

		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#about'>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>

		<Div3>
			<SocialIcons href='https://github.com/tpham20908'>
				<AiFillGithub size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://www.linkedin.com/in/tung-pham-786076135/'>
				<AiFillLinkedin size='3rem' />
			</SocialIcons>
			<SocialIcons href='#'>
				<AiFillInstagram size='3rem' />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
