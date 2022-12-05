import { useState } from 'react'

function AddTask({onAdd}) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
        alert('Please fill out task');
        return
    }

    onAdd({ text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="card mb-3" onSubmit={onSubmit}>
        <div className='card-header'>Add New Task</div>
        <div className='card-body'>
            <label>Task</label>
            <input type="text" className='form-control' value={text} onChange={ (e) => setText(e.target.value) } />

            <label>Day</label>
            <input type="text" className='form-control' value={day} onChange={ (e) => setDay(e.target.value) } />

            <div className="my-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                    checked = {reminder}
                    value={reminder}
                    onChange={ (e) => setReminder(e.currentTarget.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Reminder</label>
            </div>

            <button type="submit" className="btn btn-dark">Save</button>
        </div>
    </form>
  )
}

export default AddTask