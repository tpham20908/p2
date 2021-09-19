import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const GlowingButton = styled.a`
	background-color: #0f1624;
	display: inline-block;
	width: 150px;
	height: 52px;
	color: #fff;
	font-size: 16px;
	margin: 20px;
	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		transition: 0.1s;
		background: linear-gradient(45deg, #13adc7, #0f1624, #0f1624, #f46737);
	}

	&:hover::before {
		inset: -3px;
	}
	&:hover::after {
		inset: -3px;
		filter: blur(5px);
	}

	& span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #0f1624;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		letter-spacing: 1px;
	}
`;
