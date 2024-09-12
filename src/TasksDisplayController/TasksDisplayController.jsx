import StarImportanceController from "./components/StarImportanceController"

export default function TasksDisplayController({ onSetSortBy, sortBy, setImportance, importance }) {
    return (
        <section className="tasks-controller">
            <section>
                <h3>Display Tasks Info</h3>
                <button className="display-all-button">display all</button>
                <p>Completed: <span> task</span> </p>
                <p>Not Completed: <span> task</span> </p>
                <p>importance:
                    {/* <select>
                        <option value="⭐">⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                    </select> */}
                    <StarImportanceController setImportance={setImportance} importance={importance} />
                    <span>  1 task</span> </p>
                <p>Dead Line: <input type="date" /></p>
            </section>
            <section className="sorting-container">
                <h3>Sort Tasks by:</h3>
                <div className="flex-column">
                    <select value={sortBy} onChange={(e) => onSetSortBy(e.target.value)} >
                        <option value="deadLine">DeadLine</option>
                        <option value="importance">Importance</option>
                        <option value="description">Description</option>
                        <option value="editedTime">Edited Time</option>
                        <option value="addedTime">Added Time</option>
                        <option value="completed">Completed</option>
                    </select>
                    <select>
                        <option value="Asc">⬆ Ascendent</option>
                        <option value="Desc">⬇ Descendent</option>
                    </select>
                </div>
            </section>
            <section className="date-sort">
                <h3>Sort Tasks by specific time:</h3>
                <select>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                </select>
            </section>
        </section>
    )
}