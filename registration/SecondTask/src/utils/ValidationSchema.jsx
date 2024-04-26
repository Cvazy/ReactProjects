import * as yup from "yup";

export const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Неверный формат электронной почты"),

	password: yup
		.string()
		.min(6, "Пароль должен состоять минимум из 6 символов")
		.matches(
			/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
			"Пароль должен состоять из букв и цифр",
		),

	repeatPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});
