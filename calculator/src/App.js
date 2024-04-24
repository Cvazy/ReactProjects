import styles from "./app.module.css";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

export const App = () => {
	const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const [expression, setExpression] = useState("");
	const [calculatorState, setCalculatorState] = useState("#5b82c9");

	function calculateExpression(exp) {
		let numbers = expression.split(/[+\-]/);
		let operators = expression.replace(/[0-9]/g, "").split("");

		let result = parseInt(numbers[0]);

		for (let i = 0; i < operators.length; i++) {
			if (operators[i] === "+") {
				result += parseInt(numbers[i + 1]);
			} else if (operators[i] === "-") {
				result -= parseInt(numbers[i + 1]);
			}
		}

		return result.toString();
	}

	function onClickNumber(number) {
		setExpression((prev) => prev + number);
		setCalculatorState("#5b82c9");
	}

	function removeNumber() {
		setExpression((prev) => prev.substring(0, prev.length - 1));
		setCalculatorState("#5b82c9");
	}

	function clearMathExpression() {
		setExpression("");
		setCalculatorState("#5b82c9");
	}

	function addPlus() {
		setExpression((prev) => prev + "+");
		setCalculatorState("#5b82c9");
	}

	function addMinus() {
		setExpression((prev) => prev + "-");
		setCalculatorState("#5b82c9");
	}

	function setCalculateExpression() {
		setExpression((prev) => calculateExpression(prev));
		setCalculatorState("#2b9124");
	}

	return (
		<div className={styles.app}>
			<div className={styles.appWrapper}>
				<div
					className={styles.calculator}
					style={{ backgroundColor: calculatorState }}
				>
					<div className={styles.calculatorWrapper}>
						<label className={styles.mathLabel}>
							Введите математическое выражение
							<input
								className={styles.mathExpression}
								type={"text"}
								readOnly={true}
								name={"expression"}
								value={expression}
							/>
						</label>

						<div className={styles.buttonsWrapper}>
							<div className={styles.buttonsNumbers}>
								{NUMS.map((num) => {
									return (
										<button
											key={num}
											className={styles.mathButton}
											onClick={() => onClickNumber(num)}
										>
											{num}
										</button>
									);
								})}
							</div>

							<div className={styles.buttonsActions}>
								<button className={styles.actionButton} onClick={removeNumber}>
									⌦
								</button>

								<button
									className={styles.actionButton}
									onClick={clearMathExpression}
								>
									C
								</button>

								<button className={styles.actionButton} onClick={addPlus}>
									+
								</button>

								<button className={styles.actionButton} onClick={addMinus}>
									-
								</button>

								<button
									className={styles.actionButton}
									onClick={setCalculateExpression}
								>
									=
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
