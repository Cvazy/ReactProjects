import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
	MainInput,
	MainButton,
	AuthFormWrapper,
	TextUnderAuthForm,
	ErrorMessageBlock,
	H2,
} from "../../components";
import { useResetForm } from "../../hooks";
import { setUser } from "../../actions";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";

const regFormScheme = yup.object().shape({
	login: yup
		.string()
		.required("Пожалуйста, заполните логин")
		.matches(
			/^\w+$/,
			"Неверно заполнен логин. Допускаются только буквы и цифры",
		)
		.min(3, "Неверно заполнен логин. Минимальная длина логина 3 символа")
		.max(15, "Неверно заполнен логин. Максимальная длина логина 15 символов"),

	password: yup
		.string()
		.required("Пожалуйста, заполните пароль")
		.matches(
			/^[\w#%]+$/,
			"Неверно заполнен пароль. Допускаются буквы, цифры и символы # %",
		)
		.min(6, "Неверно заполнен пароль. Минимальная длина пароля 6 символов")
		.max(30, "Неверно заполнен пароль. Максимальная длина пароля 30 символов"),

	passwordCheck: yup
		.string()
		.required("Пожалуйста, повторите пароль")
		.oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

export const Registration = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
			passwordCheck: "",
		},
		resolver: yupResolver(regFormScheme),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(res));
			sessionStorage.setItem("userData", JSON.stringify(res));
		});
	};

	const formError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.passwordCheck?.message;

	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to={"/"} />;
	}

	return (
		<AuthFormWrapper>
			<H2>Регистрация</H2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<MainInput
					type={"text"}
					placeholder={"Логин"}
					{...register("login", {
						onChange: () => setServerError(null),
					})}
				/>

				<MainInput
					type={"password"}
					placeholder={"Пароль"}
					{...register("password", {
						onChange: () => setServerError(null),
					})}
				/>

				<MainInput
					type={"password"}
					placeholder={"Повторите пароль"}
					{...register("passwordCheck", {
						onChange: () => setServerError(null),
					})}
				/>

				<MainButton
					propHeight={"40px"}
					propFontSize={"1.125rem"}
					type={"submit"}
					disabledStatus={!!formError}
				>
					Зарегистрироваться
				</MainButton>

				{errorMessage && <ErrorMessageBlock>{errorMessage}</ErrorMessageBlock>}

				<TextUnderAuthForm>
					Есть аккаунт? <Link to={"/login"}>Войдите</Link>
				</TextUnderAuthForm>
			</form>
		</AuthFormWrapper>
	);
};
