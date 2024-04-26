import React from "react";
import { FormErrorBlock } from "../../styled/StyledComponents";

function FormError({ children }) {
	return <FormErrorBlock>{children}</FormErrorBlock>;
}

export default FormError;
