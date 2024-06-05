import styled from "styled-components";
import { useEffect, useState } from "react";

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	width: 100%;
	height: 120px;
	box-shadow: 0 2px 17px -2px black;
	font-weight: bold;
`;

export const Footer = () => {
	const [city, setCity] = useState("");
	const [temperature, setTemperature] = useState("");
	const [weather, setWeather] = useState("");

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=f22caf1fb48c5aa031eebe9171f3da87",
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<FooterContainer>
			<div>
				<p>Блог веб-разработчика</p>
				<a href={"mailto:player7712@mail.ru"}>player7712@mail.ru</a>
			</div>

			<div>
				<p>
					{city},{" "}
					{new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
				</p>
				<p>
					{temperature}°С, {weather}
				</p>
			</div>
		</FooterContainer>
	);
};
