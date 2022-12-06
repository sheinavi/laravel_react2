import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Tasks from '../Tasks';
import { useState, useEffect } from "react";
import AddTask from '../AddTask';

function Dashboard() {
    const [showAddTask, setAddTask] = useState(false)
    const [tasks, setTasks] = useState([]);

    useEffect( () => {

        const fetchTasks = async () => {
            const res = await fetch('/api/tasks')
            const data = await res.json()

            setTasks(data)
        }

        fetchTasks()

    }, []);
    
    const addTask = async (task) => {

        const res = await fetch('/api/tasks',
            {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task) 
            })
        
            
            const data = await res.json();
            setTasks([...tasks, data])

        // const id = tasks.length + 1;
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }

    const onDelete = async (id) => {

        await fetch(`/api/tasks/${id}`,
            {'method':'DELETE'}
        );

        setTasks(tasks.filter( 
            (task) => task.id !== id
         ));
    }  

    const fetchTask = async (id) => {
        const res = await fetch(`/api/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id)

        const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`/api/tasks/${id}`,{
            method: 'PUT',
            headers : {
                'Content-type': 'application/json'
            },
            body : JSON.stringify(updateTask)
        })

        const data = await res.json()

        setTasks(tasks.map( (task) => task.id === id ? 
                { ...task,reminder: data.reminder } : task ));
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