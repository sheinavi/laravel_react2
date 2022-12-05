import React from 'react'
import { AddButton } from './AddButton'

const Header = ({onAdd, setAddTask }) => {

  return (
    <div className='my-3'>
        <div className="d-flex justify-content-between">
            <h3>Task Tracker</h3>
            <AddButton text={setAddTask ? 'Hide Add Task' : 'Show Add Task'} onClick={onAdd} />
        </div>
    </div>
  )
}

export default Header