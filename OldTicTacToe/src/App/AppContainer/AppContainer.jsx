import { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { AppLayout } from "../AppLayout/AppLayout";

export class AppContainer extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppLayout />
			</Provider>
		);
	}
}
