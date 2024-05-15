import { Layout, LayoutWrapper } from "./styled/Layout";
import NavigationBlock from "./components/Navigation/Navigation";
import ToDoListBlock from "./components/ToDoList/ToDoListBlock";
import ModalAddTask from "./components/ModalAddTask";
import { useSelector } from "react-redux";
import { selectModalVisible } from "./selectors";

export const App = () => {
	const modalVisible = useSelector(selectModalVisible);

	return (
		<Layout>
			<LayoutWrapper>
				<NavigationBlock />

				<ToDoListBlock />

				{modalVisible && <ModalAddTask />}
			</LayoutWrapper>
		</Layout>
	);
};
