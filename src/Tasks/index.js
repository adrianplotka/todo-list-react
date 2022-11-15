import "./style.css";
const Tasks = ({tasks, hideDone, removeTask}) => (
	<ul className="list">
		{tasks.map(task => (
			<li
			key={task.id}
				className={`list__item ${hideDone && task.done ? 
				"list__item--hide" : ""}`}>
				<button className="list__button list__button--green">
					{task.done ? " ✔ " : ""}
				</button>
				<span className={`tasks__content${task.done ? 
					" list__item--done " : ""}`}>
					{task.content}
				</span>
				<button 
				className="list__button list__button--red"
				onClick={() => removeTask(task.id)}
				>
					🗑️
				</button>
			</li>
		))}
	</ul >
);

export default Tasks;