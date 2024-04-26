import React from "react";
import { Input } from "../../styled/StyledComponents";

function FormInput({
	inputType,
	inputPlaceholder,
	inputValue,
	inputName,
	onChange,
	onBlur,
}) {
	return (
		<Input
			name={inputName}
			type={inputType}
			placeholder={inputPlaceholder}
			value={inputValue}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
}

export default FormInput;
