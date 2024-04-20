import styles from "./app.module.css";
import data from "./data.json";
import { useState } from "react";

export const App = () => {
	const [activeStep, setActiveStep] = useState(0);

	function onClickNext() {
		setActiveStep((prev) => (prev += 1));
	}

	function onClickPrev() {
		setActiveStep((prev) => (prev -= 1));
	}

	function onClickStart() {
		setActiveStep(0);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>

				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{data[activeStep]?.content}
					</div>

					<ul className={styles["steps-list"]}>
						{data?.length &&
							data?.map(({ id, title, content }, index) => {
								return (
									<li
										className={`
											${styles["steps-item"]}
											${activeStep >= index ? styles.done : ""}
											${activeStep === index ? styles.active : ""}
										`}
										onClick={() => setActiveStep(index)}
										key={id}
									>
										<button className={styles["steps-item-button"]}>
											{index + 1}
										</button>
										{title}
									</li>
								);
							})}
					</ul>

					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={onClickPrev}
							disabled={activeStep === 0}
						>
							Назад
						</button>

						<button
							className={styles.button}
							onClick={
								activeStep !== data?.length - 1 ? onClickNext : onClickStart
							}
						>
							{activeStep !== data?.length - 1 ? "Далее" : "Начать сначала"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
