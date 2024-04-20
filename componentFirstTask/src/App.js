import styles from "./app.module.css";
import { useState } from "react";

export const App = () => {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState(false);
	const [isValueValid, setIsValueValid] = useState(false);

	const errorBlock = (
		<div className={styles.error}>
			Введенное значение должно содержать минимум 3 символа
		</div>
	);

	function addZero(dateElement) {
		if (dateElement.toString().length === 1) {
			return `0${dateElement}`;
		}
	}

	function formattedDate(date) {
		const fullDate = new Date(date);
		const day = addZero(fullDate.getDay());
		const month = addZero(fullDate.getMonth());
		const year = fullDate.getFullYear();
		const timeChart = fullDate.toISOString().substring(11, 19);

		return `${day}.${month}.${year} ${timeChart}`;
	}

	function onInputButtonClick() {
		const promptValue = prompt("Введите значение");

		if (promptValue?.length >= 3) {
			setValue(promptValue);
			setError(false);
			setIsValueValid(true);
		} else {
			setValue("");
			setError(true);
			setIsValueValid(false);
		}
	}

	function onAddButtonClick() {
		if (isValueValid) {
			setList([...list, { id: Date.now(), value }]);
			setValue("");
			setError(false);
		}
	}

	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>

			<p className={styles["no-margin-text"]}>
				Текущее значение
				<code>value</code>: "
				<output className={styles["current-value"]}>{value}</output>"
			</p>

			{error && errorBlock}

			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>

				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>

			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>

				{!list.length && (
					<p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
				)}

				<ul className={styles.list}>
					{list &&
						list.map(({ id, value }) => {
							return (
								<li className={styles["list-item"]} key={id}>
									{value}

									<p>{formattedDate(id)}</p>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
