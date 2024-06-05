import PropTypes from "prop-types";
import styled from "styled-components";

export const MainButtonContainer = ({
	className,
	type,
	disabledStatus,
	children,
	onClick,
}) => {
	return (
		<button
			className={className}
			type={type}
			disabled={disabledStatus}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const MainButton = styled(MainButtonContainer)`
	width: ${({ propWidth = "100%" }) => propWidth};
	height: ${({ propHeight = "auto" }) => propHeight};
	font-size: ${({ propFontSize = "1rem" }) => propFontSize};
	text-align: center;
	white-space: nowrap;
	background-color: #eeeeee;
	color: black;
	border-radius: 0.25rem;
	border: 1px solid darkgray;

	&:disabled {
		cursor: default;
		opacity: 0.3;
	}

	&:hover:not(&:disabled) {
		color: white;
		background-color: darkgray;

		& > a {
			color: white;
		}
	}
`;

MainButton.propTypes = {
	children: PropTypes.node.isRequired,
	propWidth: PropTypes.string,
};
