import SubTask from "../TaskDetailsEditMode/components/SubTask"
import { subTasksArr } from "../constants"
import StarImportanceDisplayer from "./components/StarImportanceDisplayer"

export default function TaskDetails({ editName, editDescription,
    editDeadLine, editImportance, onDeleteTask, onSetShowEditMode, onSetEditImportance }) {

    return (
        <section className="task-details">
            <section>
                <div>
                    <button onClick={() => onSetShowEditMode(true)}>🖋</button>
                    <StarImportanceDisplayer editImportance={editImportance} />
                </div>
                <h2>{editName}</h2>
                <div>
                    <p className="date">{!editDeadLine ? "not specified deadline" : editDeadLine}</p>
                    <button onClick={() => onDeleteTask()}>🗑</button>
                </div>
            </section>

            <div className="info">
                <p className="finished-percentage">50% finished from this Task (1 task from 2)</p>
                <p className="remaining-task">1 task remaining</p>
            </div>

            <div className="details">
                <h3>Task Description</h3>
                <p className="description">{!editDescription ? "No description Entered" : editDescription}</p>
            </div>

            <ul className="sub-tasks-container">
                {/* {subTasksArr.map((subTask, i) => <SubTask subTask={subTask} key={i} />)} */}
            </ul>
        </section>
    )
}