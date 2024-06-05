import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = ({ className, iconId, onClick }) => {
	return (
		<div className={className} onClick={onClick}>
			<i className={`fa ${iconId}`} aria-hidden="true"></i>
		</div>
	);
};

export const Icon = styled(IconContainer)`
	font-size: ${({ size }) => size};
	color: ${({ disabled }) => (disabled ? "#ccc" : "black")};
`;

Icon.propTypes = {
	iconId: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
