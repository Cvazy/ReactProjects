import { useState } from "react";
import { initialValues } from "./initialValues";

export const useFormStore = (submitButtonRef, setError, checkAllInputValid) => {
	const [value, setValue] = useState(initialValues);

	return {
		getValues: () => value,
		updateValues: (fieldName, newValue) => {
			setValue((prevValue) => {
				const updatedValue = { ...prevValue, [fieldName]: newValue };

				if (checkAllInputValid(updatedValue)) {
					setError(null);
					setTimeout(() => {
						submitButtonRef.current.focus();
					}, 0);
				} else {
					setError("");
				}
				return updatedValue;
			});
		},
	};
};
