import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SubmitFormButton from "./components/Button/SubmitButton";
import FormError from "./components/Error/FormError";
import * as Components from "./styled/StyledComponents";
import React, { useEffect, useRef } from "react";
import { Input } from "./styled/StyledComponents";
import { fieldsSchema } from "./utils/ValidationSchema";

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			repeatPassword: "",
		},

		resolver: yupResolver(fieldsSchema),
		mode: "onChange",
	});

	const submitButtonRef = useRef(null);

	const onSubmitForm = (formData) => {
		console.log(formData);
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<Components.MainWrapper>
			<Components.Form onSubmit={handleSubmit(onSubmitForm)}>
				<Components.FormWrapper>
					<Components.FormTitle>Регистрация</Components.FormTitle>

					{Object.values(errors).map(({ message }) => (
						<FormError key={message}>{message}</FormError>
					))}

					<Input
						name={"email"}
						type={"email"}
						placeholder={"Email"}
						{...register("email")}
					/>

					<Input
						name={"password"}
						type={"password"}
						placeholder={"Пароль"}
						{...register("password")}
					/>

					<Input
						name={"repeatPassword"}
						type={"password"}
						placeholder={"Повторить пароль"}
						{...register("repeatPassword")}
					/>

					<SubmitFormButton
						type="submit"
						submitButtonRef={submitButtonRef}
						disabled={!isValid}
					>
						Отправить
					</SubmitFormButton>
				</Components.FormWrapper>
			</Components.Form>
		</Components.MainWrapper>
	);
};
