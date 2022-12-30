import React from 'react';
import { toast } from 'react-hot-toast';

const UpdateTask = ({showModal, setShowModal, taskData}) => {
    
    const updateTaskData = e => {
        e.preventDefault();

        const initialTask = e.target.task.value;

        fetch(`https://task-management-server-red.vercel.app/updateTask/${taskData._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({initialTask})
        })
        .then(res => res.json())
        .then(data => {
          if(data.matchedCount > 0){
            setShowModal(null)
            toast.success('Task Update Successfully')
          }
        })
    }
    return (
        <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Task Update
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">


                <form onSubmit={updateTaskData}>
               <input type="text" defaultValue={taskData.initialTask} name='task' className='block border border-indigo-400 outline-[var(--main-color)] px-3 py-2 my-4 w-64 sm:w-80'/>
               <input type="submit" className='bg-[var(--main-color)] px-8 py-3 inline-block text-white rounded hover:bg-indigo-700' value="Submit" />

               <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
               </form>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      
    </>
    )
};

export default UpdateTask;