import React from "react";
import { SubmitButton } from "../../styled/StyledComponents";

const SubmitFormButton = ({ submitButtonRef, disabled }) => {
	return (
		<SubmitButton type="submit" ref={submitButtonRef} disabled={disabled}>
			Отправить
		</SubmitButton>
	);
};

export default SubmitFormButton;
