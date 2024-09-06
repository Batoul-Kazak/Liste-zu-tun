export default function TaskInsertionForm({ onAddTask, onClearAllTasks, onSetName, name }) {
    return (
        <form className="insertion-form" onSubmit={(e) => onAddTask(e)}>
            <input type="text" placeholder="Add new task..." value={name} onChange={(e) => onSetName(e.target.value)} />
            <button type="submit">ADD</button>
            <button type="button" onClick={onClearAllTasks}>Clear All</button>
        </form>
    )
}