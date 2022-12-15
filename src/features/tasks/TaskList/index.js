import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toogleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
	const {tasks, hideDone} = useSelector(selectTasks);
	const dispatch = useDispatch();

	return (
		<List>
			{tasks.map(task => (
				<Item
					key={task.id}
					hidden={task.done && hideDone}
				>
					<Button
						toogleDone
						onClick={() => dispatch(toogleTaskDone(task.id))}
					>
						{task.done ? " ✔ " : ""}
					</Button>
					<Content done={task.done}>
						{task.content}
					</Content>
					<Button
						remove
						onClick={() => removeTask(task.id)}
					>
						🗑️
					</Button>
				</Item>
			))}
		</List>
	);
};

export default TaskList; 