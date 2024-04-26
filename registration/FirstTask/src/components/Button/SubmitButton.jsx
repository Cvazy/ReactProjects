import React from "react";
import { SubmitButton } from "../../styled/StyledComponents";

function SubmitFormButton({ refButton, disabled }) {
	return (
		<SubmitButton type="submit" ref={refButton} disabled={disabled}>
			Отправить
		</SubmitButton>
	);
}

export default SubmitFormButton;
