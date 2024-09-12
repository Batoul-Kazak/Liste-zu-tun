import { useState } from "react";
import Task from "./components/Task";

export default function TasksList({ tasks, openEditMode,
    importanceArr, onSetIsCompleted, isCompleted,
    onToggleTaskEditMode, onToggleCompletedTask, onTaskClicked,
    sortedItems
}) {
    console.log(sortedItems)

    return (
        <ul className="tasks-container">
            {sortedItems.map((task, i) => <Task task={task} key={i}
                taskID={i}
                importanceArr={importanceArr}
                onSetIsCompleted={onSetIsCompleted} isCompleted={isCompleted}
                // onSetIsOpenedEditMode={onSetIsOpenedEditMode} isOpenedEditMode={isOpenedEditMode}
                onToggleTaskEditMode={onToggleTaskEditMode}
                onToggleCompletedTask={onToggleCompletedTask}
                onTaskClicked={onTaskClicked}
            />)}
        </ul>
    );
}