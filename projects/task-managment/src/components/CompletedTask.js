import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const CompletedTask = () => {
    const completedTaskData = useLoaderData();

    const completeTaskDelete = id => {
        const confirm = window.confirm("Are you sure Delete this task")
          if(confirm) {
            fetch(`http://localhost:5000/completedTaskDelete/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success("Task was Deleted successfully")
                }

            })
          }
    }
    return (
        <div>
           
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Completed Task name
                </th>
                <th scope="col" className="py-3 px-6">
                    Delete
                </th>
                <th scope="col" className="py-3 px-6">
                  Button
                </th>
            </tr>
        </thead>
        <tbody>
           {
            completedTaskData.map(complete => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={complete._id}>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {complete.initialTask}
            </th>
            <td className="py-4 px-6">
            <button onClick={() => completeTaskDelete(complete._id)}><i className="uil uil-trash-alt"></i> Delete</button>
            </td>
            <td className="py-4 px-6">
            <Link to="/my-task"><button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Not Completed</button></Link>
            </td>
            <td className="py-4 px-6">
               <button><i className="uil uil-message"> Comment</i></button>
               
            </td>
        </tr>)
             
           }
            
        </tbody>
    </table>
</div>

        </div>
    );
};

export default CompletedTask;