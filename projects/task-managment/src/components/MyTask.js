import React, { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import UpdateTask from './UpdateTask';

const MyTask = () => {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(null);
    const [taskData, setTaskData] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/my-task')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

    const taskDelete = id => {
        console.log(id)
      
        const confirm = window.confirm("Are you sure Delete this task")
          if(confirm) {
            fetch(`http://localhost:5000/deleteTask/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
          }
    }

    const CompletedTaskButtonUpdate = task => {
        const completed = task.completed
        fetch(`http://localhost:5000/completedTask/${task._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({completed})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("Task Was completed")
            }
        })
    }
    return (
        <div>
            
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Task name
                </th>
                <th scope="col" className="py-3 px-6">
                    Update
                </th>
                <th scope="col" className="py-3 px-6">
                    Delete
                </th>
                <th scope="col" className="py-3 px-6">
                    Completed
                </th>
            </tr>
        </thead>
        <tbody>
            {
                tasks.map(task => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task._id}>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.initialTask}
                </th>
                <td className="py-4 px-6">
               <div onClick={() => setShowModal(true)}>
               <button
        className="hover:text-indigo-600 duration-500"
        type="button"
        
        onClick={() => setTaskData(task)}
      >
        <i className="uil uil-refresh mr-1"></i>
        Update
      </button>
               </div>
                </td>
                
                <td className="py-4 px-6">
                <button onClick={() => taskDelete(task._id)}><i className="uil uil-trash-alt"></i> Delete</button>
                </td>
                <td className="py-4 px-6">
                    <Link to='/completed-task'>
                    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" 
                    setTaskData={task}
                    taskData={task}
                    onClick={() => CompletedTaskButtonUpdate(task)}
                    >
                    
                        <i className="uil uil-check"></i> Completed
                    </button>
                    </Link>
                </td>
            </tr>)
            }
            
        </tbody>
    </table>

    <UpdateTask showModal={showModal} setShowModal={setShowModal} taskData={taskData}/>
</div>

        </div>
    );
};

export default MyTask;