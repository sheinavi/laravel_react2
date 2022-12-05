function Task({task, onDelete, onToggle }) {
  return (
    <div className={`row mb-2 ${task.reminder ? 'border-start border-5 border-success' : ''}`} onDoubleClick={ () => onToggle(task.id) }>
        <div className="col-md-6">
            <h3> {task.text} </h3>
        </div>
        <div className="col-md-6 d-flex justify-content-between" >
            <p> {task.day} </p>
            <i className="text-danger fa-solid fa-circle-minus" onClick={ () => onDelete(task.id)}></i>
        </div>
    </div>
  )
}

export default Task