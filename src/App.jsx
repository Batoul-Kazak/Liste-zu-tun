import TaskInsertionForm from "./TaskInsertionForm/TaskInsertionForm";
import TasksList from "./TasksList/TasksList";
import TasksDisplayController from "./TasksDisplayController/TasksDisplayController";
import TaskDetails from "./TaskDetails/TaskDetails";
import TaskDetailsEditMode from "./TaskDetailsEditMode/TaskDetailsEditMode";
import { useState } from "react";

const tasksArr = [
    { id: Date.now(), isCompleted: false, name: "Task1", description: "cba", importance: 1, deadline: "1/2/3003", isOpenedEditMode: false },
    { id: Date.now(), isCompleted: false, name: "Task2", description: "abc", importance: 3, deadline: "1/2/3033", isOpenedEditMode: false },
];

export default function App() {
    const [tasks, setTasks] = useState(tasksArr);
    const [isCompleted, setIsCompleted] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [importance, setImportance] = useState(0);
    const [deadline, setDeadline] = useState("no deadline specified");
    const [isOpenedEditMode, setIsOpenedEditMode] = useState(false);
    const [showEditMode, setShowEditMode] = useState(false);
    const [hideAllModes, setHideAllModes] = useState(true);

    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editImportance, setEditImportance] = useState(1);
    const [editDeadLine, setEditDeadLine] = useState("");
    const [sortBy, setSortBy] = useState("addedTime");

    const [editedTasksByTime, setEditedTasksByTime] = useState(tasks);

    // this state is to render the editModeComponent

    function handleAddTask(e) {
        e.preventDefault();

        if (tasks.length >= 20) {
            alert("You accessed the tasks limit!");
            return;
        }

        if (!name) {
            alert("your didn't add a task");
            // later make the button disabled when the input is empty 
            return;
        }

        const id = crypto.randomUUID();
        const newTask = { id, isCompleted: false, name, description, importance, deadline, isOpenedEditMode: false };
        setTasks((tasks) => [...tasks, newTask]);
        // setAddedTasksArr((tas))
        setName("");
        // setId(Date.now());

        console.log(tasks);
    }

    function handleEditTaskInfo(e) {
        e.preventDefault();

        if (!editName) {
            alert("Task should have a name!");
            return;
        }

        setTasks((tasks) => tasks.map((task) => task.isOpenedEditMode === true ?
            { ...task, name: editName, description: editDescription, importance: editImportance, deadline: editDeadLine }
            : task));

        // setEditedTasksByTime((editedTasksByTime) => editedTasksByTime.slice().sort((a,b) => a.isOpenedEditMode === true ? [a, b]))

        setShowEditMode(false);
        console.log(editDeadLine, editName, editImportance, editDescription);
        console.log(tasks);
    }

    function handleClearAllTasks() {
        const confirmed = window.confirm("Are you sure you want to clear all tasks?");
        setTasks((tasks) => []);

        // setShowEditMode(false);
        setHideAllModes(true);
    }

    function handleToggleTaskEditMode(taskID) {
        setShowEditMode((showEditMode) => !showEditMode);
        setHideAllModes(false);
        setTasks((tasks) => tasks.map((task, i) => (i === taskID) ? { ...task, isOpenedEditMode: true } : task));
        setId(taskID);
    }

    function handleToggleCompletedTask(taskID) {
        setTasks((tasks) => tasks.map((task, i) => (i === taskID) ? { ...task, isCompleted: !task.isCompleted } : task));
        console.log(tasks)
    }

    function handleDeleteTask() {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        setTasks((tasks) => tasks.filter((task, i) => i !== id));

        setEditName("");
        setEditDescription("");
        setEditDeadLine("");
        setEditImportance(1);
        setId(null);
        setHideAllModes(true);
    }

    function handleTaskClicked(id) {
        setShowEditMode(false);
        setHideAllModes(false);

        let importance_;
        let deadline_;
        let name_;
        let description_;

        tasks.map((t, i) => {
            if (i === id) {
                importance_ = t.importance;
                deadline_ = t.deadline;
                name_ = t.name;
                description_ = t.description;
            }
        });

        setEditName(name_);
        setEditDeadLine(deadline_);
        setEditDescription(description_);
        setEditImportance(importance_);
        // console.log(editName, editDeadLine, editDescription, editImportance)
    }

    // function handleSortedItems() {
    let sortedItems;

    if (sortBy === "deadLine") sortedItems = tasks;
    if (sortBy === "importance") sortedItems = tasks.slice.sort((a, b) => Number(a.importance) - Number(b.importance));
    if (sortBy === "description") sortedItems = tasks.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "editedTime") sortedItems = tasks;
    if (sortBy === "addedTime") sortedItems = tasks;
    if (sortBy === "completed") sortedItems = tasks;
    // return sortedItems;
    // }

    const importanceArr = [
        "⭐",
        "⭐⭐",
        "⭐⭐⭐",
        // "⭐⭐⭐⭐",
        // "⭐⭐⭐⭐⭐"
    ];

    return (
        <main className="app-container">
            <div className="app">
                <div className="container-1">
                    <TaskInsertionForm onAddTask={handleAddTask}
                        onClearAllTasks={handleClearAllTasks}
                        onSetName={setName} name={name}
                    />
                    <TasksList tasks={tasks}
                        importanceArr={importanceArr} onSetIsCompleted={setIsCompleted} isCompleted={isCompleted}
                        onSetIsOpenedEditMode={setIsOpenedEditMode} isOpenedEditMode={isOpenedEditMode}
                        onToggleTaskEditMode={handleToggleTaskEditMode}
                        onToggleCompletedTask={handleToggleCompletedTask}
                        onTaskClicked={handleTaskClicked}
                        sortedItems={sortedItems}
                    />
                    <TasksDisplayController onSetSortBy={setSortBy} sortBy={sortBy}
                        setImportance={setImportance} importance={importance} />

                </div>
                {!hideAllModes && !showEditMode && <TaskDetails importanceArr={importanceArr}
                    editName={editName} editDescription={editDescription}
                    editImportance={editImportance} editDeadLine={editDeadLine}
                    onDeleteTask={handleDeleteTask}
                    onSetShowEditMode={handleToggleTaskEditMode}
                    onSetEditImportance={setEditImportance}
                />}
                {!hideAllModes && showEditMode && <TaskDetailsEditMode importanceArr={importanceArr}
                    onSetEditName={setEditName} editName={editName}
                    onSetEditDescription={setEditDescription} editDescription={editDescription}
                    onSetEditImportance={setEditImportance} editImportance={editImportance}
                    onSetEditDeadline={setEditDeadLine} editDeadLine={editDeadLine}
                    onEditTaskInfo={handleEditTaskInfo}
                />}
            </div>
        </main>
    )
}