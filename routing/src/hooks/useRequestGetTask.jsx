import { useEffect, useState } from "react";
import { serverUrl } from "../constants/serverUrl";

export function UseRequestGetTask(id) {
	const [taskText, setTaskText] = useState("");

	useEffect(() => {
		fetch(`${serverUrl}/${id}`)
			.then((response) => response.json())
			.then((taskInfo) => {
				setTaskText(taskInfo.title);
			});
	}, [id]);

	return {
		taskText,
		setTaskText,
	};
}
