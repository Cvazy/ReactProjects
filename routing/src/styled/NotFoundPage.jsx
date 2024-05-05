import styled from "styled-components";

export const NotFoundWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	width: 100%;
	height: 100%;
`;

export const NotFoundTitle = styled.h1`
	font-size: 12rem;
	line-height: 14rem;
	text-align: center;
	color: #55bcc9;
	font-weight: 500;
	margin: 0;

	@media (max-width: 767px) {
		font-size: 8rem;
		line-height: 9rem;
	}

	@media (max-width: 600px) {
		font-size: 6rem;
		line-height: 6.75rem;
	}

	@media (max-width: 480px) {
		font-size: 5.25rem;
		line-height: 5.75rem;
	}
`;

export const NotFoundSubtitle = styled.p`
	font-size: 2.25rem;
	line-height: 2.75rem;
	color: #55bcc9;
	text-align: center;
	margin: 0;

	@media (max-width: 767px) {
		font-size: 2rem;
		line-height: 2.25rem;
	}

	@media (max-width: 600px) {
		font-size: 1.5rem;
		line-height: 1.75rem;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
		line-height: 1.25rem;
	}
`;
