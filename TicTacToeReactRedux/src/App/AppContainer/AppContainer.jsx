import { Provider } from "react-redux";
import { store } from "../../store";
import AppLayout from "../AppLayout/AppLayout";

export const AppContainer = () => {
	return (
		<Provider store={store}>
			<AppLayout />
		</Provider>
	);
};
