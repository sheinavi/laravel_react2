import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Tasks from '../Tasks';
import { useState } from "react";
import AddTask from '../AddTask';

function Dashboard() {
    const [showAddTask, setAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id : 1,
                text : 'Wash dishes',
                day : 'Feb 5th at 2:30pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Groceries',
                day: 'Mar 10th at 8am',
                reminder: true
            },
            {
                id: 3,
                text: 'Feed ducks',
                day: 'Nov 3rd at 4pm',
                reminder: false
            }
        ]
      );
    
    const addTask = (task) => {
        const id = tasks.length + 1;
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    const onDelete = (id) => {
        setTasks(tasks.filter( 
            (task) => task.id !== id
         ));
    }  

    const toggleReminder = (id) => {
        setTasks(tasks.map( (task) => task.id === id ? 
                { ...task,reminder: !task.reminder } : task ));
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                
                <div className="col-md-6">

                <Header onAdd={ () => setAddTask(!showAddTask) } setAddTask={showAddTask} />
            
                { showAddTask && <AddTask onAdd={addTask} />}
                
                    <div className="card">
                        <div className="card-header">Your Tasks:</div>

                        <div className="card-body">
                            {
                                tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={onDelete} onToggle={toggleReminder} /> : ''
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}