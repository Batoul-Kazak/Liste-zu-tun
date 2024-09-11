export default function TasksDisplayController() {
    return (
        <div className="tasks-controller">
            <h3>Display Tasks Info</h3>
            <main className="flex-row task-controller-A">
                <section>
                    <button className="display-all-button">display all</button>
                    <p>Completed: <span>{CalculateCompletedTasks()} task</span> </p>
                    <p>Not Completed: <span>{CalculateNotCompletedTasks()} task</span> </p>
                    <p>importance:
                        <select value={importance} onChange={(e) => setImportance(e.target.value)}>
                            <option value="⭐">⭐</option>
                            <option value="⭐⭐">⭐⭐</option>
                            <option value="⭐⭐⭐">⭐⭐⭐</option>
                        </select>
                        <span>  1 task</span> </p>
                    <p>Dead Line: <input type="date" /></p>
                </section>
                <section className="sorting-container">
                    <h3>Sort Tasks by:</h3>
                    <div className="flex-column">
                        <select >
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
                <section>
                    <select>
                        <option value="today">Today</option>
                        <option value="this week">This Week</option>
                        <option value="this month">This Month</option>
                        <option value="this year">This Year</option>
                    </select>
                </section>
            </main>
        </div>
    )
}