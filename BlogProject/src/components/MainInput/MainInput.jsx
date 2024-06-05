import PropTypes from "prop-types";
import styled from "styled-components";
import { forwardRef } from "react";

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} ref={ref} {...props} />;
});

export const MainInput = styled(InputContainer)`
	width: ${({ propWidth = "100%" }) => propWidth};
	height: 40px;
	padding: 0.25rem 0.5rem;
	font-size: 1.125rem;
	border-radius: 0.25rem;
	border: 1px solid black;
`;

MainInput.propTypes = {
	propWidth: PropTypes.string,
};
