export default function Task({ task, importanceArr,
    onToggleTaskEditMode, taskID, onToggleCompletedTask, onTaskClicked
}) {

    return (
        <li className="task" role="button" onClick={() => onTaskClicked(taskID)}>
            <div>
                <input type="checkbox" checked={task.isCompleted}
                    onChange={() => onToggleCompletedTask(taskID)} />
                <p>{task.name}</p>
            </div>

            <div>
                <p>{!task.deadline ? "not specified deadline" : task.deadline}</p>
                <p>{importanceArr[task.importance - 1]}</p>
                <button onClick={() => onToggleTaskEditMode(taskID)}>🖋</button>
            </div>
        </li>
    )
}