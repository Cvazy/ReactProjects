import logo from "./logo.svg";
import "./App.css";

// Императивный подход - указываем, что переменная не будет изменяться,
// задаём ей имя, пишем то, что должна вернуть стрелочная функция
export const App = () => {
	return (
		// Декларативный подход - не задумываемся о том,
		// как React отрисует все эти блоки, а просто пишем то, что хотим получить на выходе
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
