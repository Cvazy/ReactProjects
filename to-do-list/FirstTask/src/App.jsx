import { Layout, LayoutWrapper } from "./styled/Layout";
import NavigationBlock from "./components/Navigation/Navigation";
import ToDoListBlock from "./components/ToDoList/ToDoListBlock";

export const App = () => {
	return (
		<Layout>
			<LayoutWrapper>
				<NavigationBlock />

				<ToDoListBlock />
			</LayoutWrapper>
		</Layout>
	);
};
