import React from 'react';

const InitialTask = () => {

    const handleInitialTaskAdd = e => {
        e.preventDefault();
        
        const initialTask = e.target.task.value;
        
        fetch('https://task-management-server-red.vercel.app/my-task', {
            method:"POST",
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify({initialTask})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                e.target.reset()
            }
        })
    }

    return (
        <div className='border w-3/4 mx-auto mt-5 p-10 rounded'>
            <div className='flex items-center justify-center'>
               <div>
               <h3 className='font-semibold'>Add Your Daily Task</h3>
               <form onSubmit={handleInitialTaskAdd}>
               <input type="text" name='task' className='block border border-indigo-400 outline-[var(--main-color)] px-3 py-2 my-4 w-64 sm:w-80' required/>
               <input type="submit" className='bg-[var(--main-color)] px-8 py-3 inline-block text-white rounded hover:bg-indigo-700' value="Submit" />
               </form>
               </div>
            </div>
            
        </div>
    );
};

export default InitialTask;