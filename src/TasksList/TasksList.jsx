import Task from "./components/Task";

export default function TasksList({ tasks, openEditMode,
    importanceArr, onSetIsCompleted, isCompleted,
    onToggleTaskEditMode, onToggleCompletedTask, onTaskClicked
}) {
    return (
        <ul className="tasks-container">
            <button>
                {tasks.map((task, i) => <Task task={task} key={i}
                    taskID={i}
                    importanceArr={importanceArr}
                    onSetIsCompleted={onSetIsCompleted} isCompleted={isCompleted}
                    // onSetIsOpenedEditMode={onSetIsOpenedEditMode} isOpenedEditMode={isOpenedEditMode}
                    onToggleTaskEditMode={onToggleTaskEditMode}
                    onToggleCompletedTask={onToggleCompletedTask}
                    onTaskClicked={onTaskClicked}
                />)}
            </button>
        </ul>
    );
}