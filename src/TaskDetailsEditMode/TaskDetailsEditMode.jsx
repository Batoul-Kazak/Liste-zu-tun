import SubTask from "./components/SubTask"
import { subTasksArr } from "../constants";
import StarImportanceController from "./components/StarImportanceController";

export default function TaskDetailsEditMode({ importanceArr,
    onSetEditName, editName, onSetEditDescription, editDescription,
    onSetEditImportance, editImportance, onSetEditDeadline, editDeadline,
    onEditTaskInfo
}) {

    function handleSetEditImportance(e) {
        switch (e.target.value) {
            case "⭐": onSetEditImportance(1); break;
            case "⭐⭐": onSetEditImportance(2); break;
            case "⭐⭐⭐": onSetEditImportance(3); break;
        }
    }

    return (
        <section className="task-details-edit-mode">
            <form onSubmit={(e) => onEditTaskInfo(e)}>
                <div>
                    <button>save</button>
                    {/* <select value={editImportance === 1 ? "⭐" : editImportance === 2 ? "⭐⭐" : "⭐⭐⭐"} onChange={handleSetEditImportance}>
                        {importanceArr.map((star, i) =>
                            <option value={star} key={i}>{star}</option>
                        )}
                    </select> */}
                    <StarImportanceController onSetEditImportance={onSetEditImportance} editImportance={editImportance} />
                </div>
                <input type="text" placeholder="task name..." value={editName}
                    onChange={(e) => onSetEditName(e.target.value)} />
                <input type="date" value={editDeadline} onChange={(e) => onSetEditDeadline(e.target.value)} />
            </form>

            <div className="info">
                <p className="finished-percentage">50% finished from this Task (1 task from 2)</p>
                <p className="remaining-task">1 task remaining</p>
            </div>

            <div className="details">
                <h3>Task Description</h3>
                <textarea placeholder="Enter a text here..." value={editDescription}
                    onChange={(e) => onSetEditDescription(e.target.value)}></textarea>
            </div>

            <ul className="sub-tasks-container">
                {subTasksArr.map((subTask, i) => <SubTask subTask={subTask} key={i} />)}
            </ul>
        </section>
    )
}