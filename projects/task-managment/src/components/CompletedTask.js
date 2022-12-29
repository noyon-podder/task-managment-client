import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CompletedTask = () => {
    const completedTaskData = useLoaderData();

    console.log(completedTaskData)
    return (
        <div>
           
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Color
                </th>
                <th scope="col" className="py-3 px-6">
                    Category
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
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
                Sliver
            </td>
            <td className="py-4 px-6">
                Laptop
            </td>
            <td className="py-4 px-6">
                $2999
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