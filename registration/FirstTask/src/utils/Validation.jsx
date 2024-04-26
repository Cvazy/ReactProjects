export const checkAllInputValid = (values) => {
	const { email, password, repeatPassword } = values;

	return !!(email && password && repeatPassword && password === repeatPassword);
};
