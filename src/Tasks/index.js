import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__element ${(task.done && hideDone) ? "taskList__element--hidden" : ""}`}>
                <button
                    className="taskList__button taskList__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__text${task.done ? " taskList__text--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="taskList__button taskList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;