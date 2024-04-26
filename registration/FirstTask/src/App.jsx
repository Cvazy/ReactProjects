import SubmitFormButton from "./components/Button/SubmitButton";
import FormInput from "./components/Input/FormInput";
import FormError from "./components/Error/FormError";
import { useFormStore } from "./utils/FormStore/FormStore";
import * as Components from "./styled/StyledComponents";
import React, { useRef, useState } from "react";
import { checkAllInputValid } from "./utils/Validation";

export const App = () => {
	const submitButtonRef = useRef(null);

	const [error, setError] = useState("");

	const { getValues, updateValues } = useFormStore(
		submitButtonRef,
		setError,
		checkAllInputValid,
	);
	const { email, password, repeatPassword } = getValues();

	const onChange = ({ target }) => {
		updateValues(target.name, target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		console.log(getValues());
	};

	const onBlurEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError("Неверный формат электронной почты");
		} else if (!password || !repeatPassword) {
			setError("");
		} else if (password && repeatPassword) {
			setError(null);
		}
	};

	const onBlurPassword = () => {
		if (password.length !== 0 && repeatPassword.length !== 0) {
			if (password !== repeatPassword) {
				setError("Пароли должны совпадать");
			} else if (password.length < 6 || repeatPassword.length < 6) {
				setError("Пароль должен состоять минимум из 6 символов");
			} else if (
				!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password) &&
				!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(repeatPassword)
			) {
				setError("Пароль должен состоять из букв и цифр");
			} else if (!email) {
				setError("");
			} else if (email) {
				setError(null);
			}
		}
	};

	return (
		<Components.MainWrapper>
			<Components.Form onSubmit={onSubmitForm}>
				<Components.FormWrapper>
					<Components.FormTitle>Регистрация</Components.FormTitle>

					{error && <FormError>{error}</FormError>}

					<FormInput
						inputType="email"
						inputPlaceholder="Email"
						inputValue={email}
						inputName={"email"}
						onChange={onChange}
						onBlur={onBlurEmail}
					/>

					<FormInput
						inputType="password"
						inputPlaceholder="Пароль"
						inputValue={password}
						inputName={"password"}
						onChange={onChange}
						onBlur={onBlurPassword}
					/>

					<FormInput
						inputType="password"
						inputPlaceholder="Повторить пароль"
						inputValue={repeatPassword}
						inputName={"repeatPassword"}
						onChange={onChange}
						onBlur={onBlurPassword}
					/>

					<SubmitFormButton
						type="submit"
						refButton={submitButtonRef}
						disabled={error !== null}
					>
						Отправить
					</SubmitFormButton>
				</Components.FormWrapper>
			</Components.Form>
		</Components.MainWrapper>
	);
};
