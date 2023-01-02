import { List, Item, Content, Button, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toogleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
	const location = useLocation();
	const query = (new URLSearchParams(location.search)).get("szukaj");


	const tasks = useSelector(state => selectTasksByQuery(state, query));
	const hideDone = useSelector(selectHideDone);

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
						<StyledLink to={`/zadania/${task.id}`} >{task.content}</StyledLink>
					</Content>
					<Button
						remove
						onClick={() => dispatch(removeTask(task.id))}
					>
						🗑️
					</Button>
				</Item>
			))}
		</List>
	);
};

export default TaskList; 