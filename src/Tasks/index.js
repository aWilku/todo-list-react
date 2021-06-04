import "./style.css"

const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li key={task.id} className={`taskList__element ${(task.done && props.hideDoneTask) ? "taskList__element--hidden" : ""}`}>
                <button className="taskList__button taskList__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__text${task.done ? " taskList__text--done" : ""}`}>
                    {task.content}
                </span>
                <button className="taskList__button taskList__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);
export default Tasks;